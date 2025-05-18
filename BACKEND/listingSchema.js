const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true },
  course: {
    type: String,
    required: true,
    enum: ['BTech', 'BBA', 'BCA', 'Polytechnic', 'MEd', 'BEd', 'MCA'],
  },
  branch: {
    type: String,
    required: true,
    enum: ['CS', 'IT', 'CS AI&ML', 'EE', 'ECE', 'ME', 'Fashion Designing', 'Other'],
  },
  year: { type: Number, required: true, enum: [1, 2, 3, 4] },
  collegeId: { type: String, required: true, maxLength: 6 },
  skills: [{ type: String }],
  about: { type: String, required: true },
  photo: { type: String }, // Cloudinary URL
  github: { type: String },
  linkedin: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Listing', listingSchema);