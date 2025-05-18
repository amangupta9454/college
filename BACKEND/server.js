const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
require('dotenv').config();

const app = express();

// Increase payload size limit to 10MB for file uploads
app.use(express.json({ limit: '10mb' }));
// Configure CORS to allow requests from frontend
app.use(cors({
  origin: process.env.FRONTEND_URL, // http://localhost:5173
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  },
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  problemStatement: String,
  techStack: String,
  githubLink: String,
  linkedinLink: String,
  hostedLink: String,
  description: String,
  image: String, // Store Cloudinary URL
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userEmail: String,
  createdAt: { type: Date, default: Date.now },
});
const Project = mongoose.model('Project', projectSchema);

// Listing Schema
const Listing = require('./listingSchema');

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Store OTPs temporarily (in production, use Redis)
const otpStore = new Map();

// Register: Send OTP
app.post('/api/register', async (req, res) => {
  const { name, email, mobile, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, { otp, data: { name, email, mobile, password } });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Registration',
      text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    });

    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Verify OTP and complete registration
app.post('/api/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  try {
    const stored = otpStore.get(email);
    if (!stored || stored.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    const { name, email: userEmail, mobile, password } = stored.data;
    const user = new User({ name, email: userEmail, mobile, password });
    await user.save();

    otpStore.delete(email);
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { name: user.name, email: user.email, mobile: user.mobile } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user details (protected route)
app.get('/api/user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(401).json({ message: 'Invalid token', error: error.message });
  }
});

// Create Project (protected route)
app.post('/api/projects', upload.single('image'), async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const {
      title,
      problemStatement,
      techStack,
      githubLink,
      linkedinLink,
      hostedLink,
      description,
    } = req.body;

    let imageUrl = '';
    if (req.file) {
      try {
        // Convert buffer to base64 for Cloudinary upload
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: 'collegeconnect_projects',
          resource_type: 'image',
        });
        imageUrl = result.secure_url;
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError);
        return res.status(500).json({ message: 'Failed to upload image to Cloudinary', error: cloudinaryError.message });
      }
    }

    const project = new Project({
      title,
      problemStatement,
      techStack,
      githubLink,
      linkedinLink,
      hostedLink,
      description,
      image: imageUrl,
      userId: user._id,
      userEmail: user.email,
    });

    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update Project (protected route)
app.put('/api/projects/:id', upload.single('image'), async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.userId.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this project' });
    }

    const {
      title,
      problemStatement,
      techStack,
      githubLink,
      linkedinLink,
      hostedLink,
      description,
    } = req.body;

    let imageUrl = project.image;
    if (req.file) {
      try {
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: 'collegeconnect_projects',
          resource_type: 'image',
        });
        imageUrl = result.secure_url;
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError);
        return res.status(500).json({ message: 'Failed to upload image to Cloudinary', error: cloudinaryError.message });
      }
    }

    project.title = title || project.title;
    project.problemStatement = problemStatement || project.problemStatement;
    project.techStack = techStack || project.techStack;
    project.githubLink = githubLink || project.githubLink;
    project.linkedinLink = linkedinLink || project.linkedinLink;
    project.hostedLink = hostedLink || project.hostedLink;
    project.description = description || project.description;
    project.image = imageUrl;

    await project.save();
    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete Project (protected route)
app.delete('/api/projects/:id', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.userId.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this project' });
    }

    await project.deleteOne();
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get User's Projects (protected route)
app.get('/api/user/projects', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const projects = await Project.find({ userId: decoded.id });
    res.status(200).json(projects);
  } catch (error) {
    console.error('Get user projects error:', error);
    res.status(401).json({ message: 'Invalid token', error: error.message });
  }
});

// Get All Projects (public route)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Get all projects error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create Listing (protected route)
app.post('/api/listings', upload.single('photo'), async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const {
      name,
      mobile,
      email,
      whatsapp,
      course,
      branch,
      year,
      collegeId,
      skills,
      about,
      github,
      linkedin,
    } = req.body;

    let photoUrl = '';
    if (req.file) {
      try {
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: 'collegeconnect_listings',
          resource_type: 'image',
        });
        photoUrl = result.secure_url;
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError);
        return res.status(500).json({ message: 'Failed to upload photo to Cloudinary', error: cloudinaryError.message });
      }
    }

    const listing = new Listing({
      name,
      mobile,
      email,
      whatsapp,
      course,
      branch,
      year,
      collegeId,
      skills: skills.split(',').map(skill => skill.trim()),
      about,
      photo: photoUrl,
      github,
      linkedin,
      userId: user._id,
    });

    await listing.save();
    res.status(201).json({ message: 'Listing created successfully', listing });
  } catch (error) {
    console.error('Create listing error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Single Listing (protected route)
app.get('/api/listings/:id', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.userId.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to access this listing' });
    }

    res.status(200).json(listing);
  } catch (error) {
    console.error('Get listing error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update Listing (protected route)
app.put('/api/listings/:id', upload.single('photo'), async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.userId.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this listing' });
    }

    const {
      name,
      mobile,
      email,
      whatsapp,
      course,
      branch,
      year,
      collegeId,
      skills,
      about,
      github,
      linkedin,
    } = req.body;

    let photoUrl = listing.photo;
    if (req.file) {
      try {
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: 'collegeconnect_listings',
          resource_type: 'image',
        });
        photoUrl = result.secure_url;
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError);
        return res.status(500).json({ message: 'Failed to upload photo to Cloudinary', error: cloudinaryError.message });
      }
    }

    listing.name = name || listing.name;
    listing.mobile = mobile || listing.mobile;
    listing.email = email || listing.email;
    listing.whatsapp = whatsapp || listing.whatsapp;
    listing.course = course || listing.course;
    listing.branch = branch || listing.branch;
    listing.year = year || listing.year;
    listing.collegeId = collegeId || listing.collegeId;
    listing.skills = skills ? skills.split(',').map(skill => skill.trim()) : listing.skills;
    listing.about = about || listing.about;
    listing.photo = photoUrl;
    listing.github = github || listing.github;
    listing.linkedin = linkedin || listing.linkedin;

    await listing.save();
    res.status(200).json({ message: 'Listing updated successfully', listing });
  } catch (error) {
    console.error('Update listing error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete Listing (protected route)
app.delete('/api/listings/:id', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.userId.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this listing' });
    }

    await listing.deleteOne();
    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (error) {
    console.error('Delete listing error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get All Listings (public route)
app.get('/api/listings', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    console.error('Get all listings error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Error handling for payload too large and other errors
app.use((err, req, res, next) => {
  console.error('Middleware error:', err);
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ message: 'Payload too large. Please upload a smaller image.' });
  }
  if (err.message === 'Only images are allowed') {
    return res.status(400).json({ message: 'Only image files are allowed.' });
  }
  res.status(500).json({ message: 'Server error', error: err.message });
});

app.get("/", (req, res) => {
  res.send({"msg": "BACKEND HOSTED SUCCESSFULLY"});
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));