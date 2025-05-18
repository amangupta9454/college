import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Listing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    whatsapp: '',
    course: '',
    branch: '',
    year: '',
    collegeId: '',
    skills: '',
    about: '',
    github: '',
    linkedin: '',
    photo: null,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // Fetch user email on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      axios
        .get(`${import.meta.env.VITE_API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setFormData((prev) => ({ ...prev, email: response.data.email }));
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'mobile':
        if (!/^[6-9]\d{9}$/.test(value)) error = 'Must be a 10-digit Indian number (starting with 6, 7, 8, or 9)';
        break;
      case 'whatsapp':
        if (!/^[6-9]\d{9}$/.test(value)) error = 'Must be a 10-digit Indian number (starting with 6, 7, 8, or 9)';
        break;
      case 'course':
        if (!value) error = 'Course is required';
        break;
      case 'branch':
        if (!value) error = 'Branch is required';
        break;
      case 'year':
        if (!value) error = 'Year is required';
        break;
      case 'collegeId':
        if (!/^\d{6}$/.test(value)) error = 'College ID must be exactly 6 digits';
        break;
      case 'skills':
        if (!value.trim()) error = 'Skills are required';
        break;
      case 'about':
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount < 100) error = `Description must be at least 100 words (current: ${wordCount})`;
        break;
      case 'photo':
        if (value && value.size > 1 * 1024 * 1024) error = 'Photo must be less than 1MB';
        break;
      case 'github':
        if (value && !/^[a-zA-Z0-9-]{1,39}$/.test(value)) error = 'Invalid GitHub username (1-39 characters, letters, numbers, or hyphens)';
        break;
      case 'linkedin':
        if (value && !/^[a-zA-Z0-9-]{3,100}$/.test(value)) error = 'Invalid LinkedIn username (3-100 characters, letters, numbers, or hyphens)';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });

    const error = validateField(name, newValue);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) formErrors[key] = error;
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitting(false);
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'photo' && formData[key]) {
        data.append('photo', formData[key]);
      } else if (key !== 'email' || formData[key]) {
        data.append(key, formData[key]);
      }
    });

    console.log('FormData entries:');
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/listings`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Listing created successfully!');
      navigate('/students');
    } catch (error) {
      console.error('Listing submission error:', error);
      console.log('Error response:', error.response);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An unexpected error occurred while creating the listing';
      alert(`Error creating listing: ${errorMessage}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22 viewBox=%220 0 4 4%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] flex items-center justify-center p-4">
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-white text-center mb-6 glow-text">Create Your Listing</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="mt-1 w-full p-3 rounded-lg bg-gray-600 text-gray-300 border border-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600  focus:ring-indigo- PragmaticDragons
              focus:ring-2 focus:ring-indigo-500 shadow-inner"
            >
              <option value="">Select Course</option>
              {['BTech', 'BBA', 'BCA', 'Polytechnic', 'MEd', 'BEd', 'MCA'].map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            {errors.course && <p className="text-red-400 text-sm mt-1">{errors.course}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            >
              <option value="">Select Branch</option>
              {['CS', 'IT', 'CS AI&ML', 'EE', 'ECE', 'ME', 'Fashion Designing', 'Other'].map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
            {errors.branch && <p className="text-red-400 text-sm mt-1">{errors.branch}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            >
              <option value="">Select Year</option>
              {[1, 2, 3, 4].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors.year && <p className="text-red-400 text-sm mt-1">{errors.year}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">College ID</label>
            <input
              type="text"
              name="collegeId"
              value={formData.collegeId}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.collegeId && <p className="text-red-400 text-sm mt-1">{errors.collegeId}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Skills (comma-separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.skills && <p className="text-red-400 text-sm mt-1">{errors.skills}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">About Yourself</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
              rows="6"
            ></textarea>
            {errors.about && <p className="text-red-400 text-sm mt-1">{errors.about}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Upload Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            />
            {errors.photo && <p className="text-red-400 text-sm mt-1">{errors.photo}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">GitHub Username</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.github && <p className="text-red-400 text-sm mt-1">{errors.github}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">LinkedIn Username</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.linkedin && <p className="text-red-400 text-sm mt-1">{errors.linkedin}</p>}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 glow-button'
            }`}
          >
            {submitting ? 'Submitting...' : 'Submit Listing'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Listing;