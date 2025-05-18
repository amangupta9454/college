import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Student = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    branch: '',
    course: '',
    year: '',
    skill: '',
  });

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/listings`);
        setListings(response.data);
        setFilteredListings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let result = [...listings];

      if (filters.branch) {
        result = result.filter((listing) => listing.branch === filters.branch);
      }
      if (filters.course) {
        result = result.filter((listing) => listing.course === filters.course);
      }
      if (filters.year) {
        result = result.filter((listing) => listing.year === parseInt(filters.year));
      }
      if (filters.skill) {
        const skillLower = filters.skill.toLowerCase().trim();
        result = result.filter((listing) =>
          listing.skills.some((skill) => skill.toLowerCase().includes(skillLower))
        );
      }

      setFilteredListings(result);
    };
    applyFilters();
  }, [filters, listings]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({ branch: '', course: '', year: '', skill: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22 viewBox=%220 0 4 4%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 glow-text">Student Listings</h2>
      
      {/* Filter Section */}
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Filter Listings</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-300">Branch</label>
            <select
              name="branch"
              value={filters.branch}
              onChange={handleFilterChange}
              className="mt-1 w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Branches</option>
              {['CS', 'IT', 'CS AI&ML', 'EE', 'ECE', 'ME', 'Fashion Designing', 'Other'].map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-300">Course</label>
            <select
              name="course"
              value={filters.course}
              onChange={handleFilterChange}
              className="mt-1 w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Courses</option>
              {['BTech', 'BBA', 'BCA', 'Polytechnic', 'MEd', 'BEd', 'MCA'].map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-300">Year</label>
            <select
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
              className="mt-1 w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Years</option>
              {[1, 2, 3, 4].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-300">Skill</label>
            <input
              type="text"
              name="skill"
              value={filters.skill}
              onChange={handleFilterChange}
              placeholder="e.g., HTML"
              className="mt-1 w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={clearFilters}
          className="mt-4 w-full sm:w-auto py-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 glow-button"
        >
          Clear Filters
        </button>
      </div>

      {/* Listings Grid */}
      {filteredListings.length === 0 ? (
        <p className="text-center text-gray-300 text-lg">No listings match the selected filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div
              key={listing._id}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-700 hover:shadow-indigo-500/50 transition-shadow duration-300"
            >
              {listing.photo && (
                <img
                  src={listing.photo}
                  alt={listing.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-white">{listing.name}</h3>
              <p className="text-gray-300"><strong>Email:</strong> {listing.email}</p>
              <p className="text-gray-300"><strong>Mobile:</strong> {listing.mobile}</p>
              <p className="text-gray-300"><strong>WhatsApp:</strong> {listing.whatsapp}</p>
              <p className="text-gray-300"><strong>Course:</strong> {listing.course}</p>
              <p className="text-gray-300"><strong>Branch:</strong> {listing.branch}</p>
              <p className="text-gray-300"><strong>Year:</strong> {listing.year}</p>
              <p className="text-gray-300"><strong>College ID:</strong> {listing.collegeId}</p>
              <p className="text-gray-300"><strong>Skills:</strong> {listing.skills.join(', ')}</p>
              <p className="text-gray-300"><strong>About:</strong> {listing.about}</p>
              {listing.github && (
                <p className="text-gray-300">
                  <strong>GitHub:</strong>{' '}
                  <a href={`https://github.com/${listing.github}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                    {listing.github}
                  </a>
                </p>
              )}
              {listing.linkedin && (
                <p className="text-gray-300">
                  <strong>LinkedIn:</strong>{' '}
                  <a href={`https://linkedin.com/in/${listing.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                    {listing.linkedin}
                  </a>
                </p>
              )}
              <a
                href={`https://wa.me/${listing.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center py-2 px-4 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-300 glow-button"
              >
                Contact via WhatsApp
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Student;