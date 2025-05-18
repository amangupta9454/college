import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [projects, setProjects] = useState([]);
  const [listings, setListings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    problemStatement: '',
    techStack: '',
    githubLink: '',
    linkedinLink: '',
    hostedLink: '',
    description: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imageError, setImageError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        setError('Failed to fetch user data');
        navigate('/login');
      }
    };

    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/projects`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(res.data);
      } catch (err) {
        setError('Failed to fetch projects');
      }
    };

    const fetchListings = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/listings`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userListings = res.data.filter((listing) => listing.userId === user?._id);
        setListings(userListings);
      } catch (err) {
        setError('Failed to fetch listings');
      }
    };

    fetchUser();
    fetchProjects();
    fetchListings();
  }, [navigate, user?._id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        setImageError('Image size exceeds 1MB limit.');
        setImageFile(null);
      } else if (!file.type.startsWith('image/')) {
        setImageError('Only image files are allowed.');
        setImageFile(null);
      } else {
        setImageError('');
        setImageFile(file);
      }
    } else {
      setImageError('');
      setImageFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile && imageError) return;

    try {
      const token = localStorage.getItem('token');
      const data = new FormData();
      data.append('title', formData.title);
      data.append('problemStatement', formData.problemStatement);
      data.append('techStack', formData.techStack);
      data.append('githubLink', formData.githubLink);
      data.append('linkedinLink', formData.linkedinLink);
      data.append('hostedLink', formData.hostedLink);
      data.append('description', formData.description);
      if (imageFile) {
        data.append('image', imageFile);
      }

      if (editProjectId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/projects/${editProjectId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/projects`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      setShowForm(false);
      setEditProjectId(null);
      setFormData({
        title: '',
        problemStatement: '',
        techStack: '',
        githubLink: '',
        linkedinLink: '',
        hostedLink: '',
        description: '',
      });
      setImageFile(null);
      setImageError('');
      setError('');
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save project');
    }
  };

  const handleEditProject = (project) => {
    setEditProjectId(project._id);
    setFormData({
      title: project.title,
      problemStatement: project.problemStatement,
      techStack: project.techStack,
      githubLink: project.githubLink,
      linkedinLink: project.linkedinLink,
      hostedLink: project.hostedLink,
      description: project.description,
    });
    setImageFile(null);
    setImageError('');
    setShowForm(true);
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${import.meta.env.VITE_API_URL}/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((project) => project._id !== projectId));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete project');
    }
  };

  const handleDeleteListing = async (listingId) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${import.meta.env.VITE_API_URL}/listings/${listingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings(listings.filter((listing) => listing._id !== listingId));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete listing');
    }
  };

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center text-gray-300">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.2)_1px,transparent_0)] bg-[length:20px_20px] opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-gray-900"></div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
            }
            50% {
              box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.2);
            }
          }
          .animate-slide-in {
            animation: slideIn 0.6s ease-out forwards;
          }
          .animate-pulse-glow {
            animation: pulseGlow 3s infinite ease-in-out;
          }
          .tooltip {
            position: relative;
          }
          .tooltip:hover:after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(17, 24, 39, 0.9);
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 10;
            margin-bottom: 8px;
          }
        `}
      </style>

      {/* User Info Section */}
      <div className="relative bg-gray-800/40 p-8 rounded-2xl w-full max-w-lg mx-auto backdrop-blur-lg border border-gray-700/20 animate-slide-in shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Dashboard
        </h2>
        {error && (
          <p className="text-red-400 text-center mb-6 bg-red-900/20 p-4 rounded-xl backdrop-blur-sm animate-pulse">
            {error}
          </p>
        )}
        <div className="space-y-3 text-gray-200">
          <p className="text-sm"><strong className="text-blue-300">Name:</strong> {user.name}</p>
          <p className="text-sm"><strong className="text-blue-300">Email:</strong> {user.email}</p>
          <p className="text-sm"><strong className="text-blue-300">Mobile:</strong> {user.mobile}</p>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              setEditProjectId(null);
              setFormData({
                title: '',
                problemStatement: '',
                techStack: '',
                githubLink: '',
                linkedinLink: '',
                hostedLink: '',
                description: '',
              });
              setImageFile(null);
              setShowForm(!showForm);
            }}
            className="flex-1 tooltip bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg animate-pulse-glow"
            data-tooltip={showForm ? 'Cancel project upload' : 'Upload a new project'}
          >
            {showForm ? 'Cancel' : 'Upload Project'}
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
            className="flex-1 tooltip bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-4 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            data-tooltip="Log out of your account"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Project Upload Form */}
      {showForm && (
        <div className="relative bg-gray-800/40 p-8 rounded-2xl w-full max-w-lg mx-auto mt-8 backdrop-blur-lg border border-gray-700/20 animate-slide-in shadow-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-300">
            {editProjectId ? 'Edit Projec':'Project'}
            {editProjectId ? 'Update Project' : 'Upload Project'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {['title', 'techStack', 'githubLink', 'linkedinLink', 'hostedLink'].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field.includes('Link') ? 'url' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full p-3 bg-gray-700/30 border border-gray-600 rounded-lg text-gray-100 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 peer"
                  required={field === 'title' || field === 'techStack'}
                />
                <label className="absolute left-3 -top-2 text-sm text-gray-400 bg-gray-800/40 px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-300">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace('Link', ' Link')}
                </label>
              </div>
            ))}
            {['problemStatement', 'description'].map((field) => (
              <div key={field} className="relative">
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full p-3 bg-gray-700/30 border border-gray-600 rounded-lg text-gray-100 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-y peer"
                  rows="4"
                  required
                />
                <label className="absolute left-3 -top-2 text-sm text-gray-400 bg-gray-800/40 px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-300">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 bg-gray-700/30 border border-gray-600 rounded-lg text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:hover:bg-blue-700 file:transition-all"
              />
              {imageError && <p className="text-red-400 text-sm mt-2">{imageError}</p>}
            </div>
            <button
              type="submit"
              disabled={!!imageError}
              className={`w-full p-3 rounded-lg text-white font-medium transition-all duration-300 tooltip ${
                imageError
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-md hover:shadow-lg animate-pulse-glow'
              }`}
              data-tooltip={editProjectId ? 'Update existing project' : 'Submit new project'}
            >
              {editProjectId ? 'Update Project' : 'Submit Project'}
            </button>
          </form>
        </div>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <div className="w-full max-w-7xl mx-auto mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-blue-300 animate-slide-in">
            Your Projects
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className="relative bg-gray-800/40 p-6 rounded-2xl backdrop-blur-lg border border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.image && (
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                )}
                <h4 className="text-lg font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-2 line-clamp-3">
                  <strong>Problem:</strong> {project.problemStatement}
                </p>
                <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                  <strong>Tech:</strong> {project.techStack}
                </p>
                {project.githubLink && (
                  <p className="text-sm mb-2">
                    <strong>GitHub:</strong>{' '}
                    <a
                      href={project.githubLink}
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.githubLink}
                    </a>
                  </p>
                )}
                {project.linkedinLink && (
                  <p className="text-sm mb-2">
                    <strong>LinkedIn:</strong>{' '}
                    <a
                      href={project.linkedinLink}
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkedinLink}
                    </a>
                  </p>
                )}
                {project.hostedLink && (
                  <p className="text-sm mb-2">
                    <strong>Hosted:</strong>{' '}
                    <a
                      href={project.hostedLink}
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.hostedLink}
                    </a>
                  </p>
                )}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  <strong>Description:</strong> {project.description}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditProject(project)}
                    className="flex-1 tooltip bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                    data-tooltip="Edit this project"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project._id)}
                    className="flex-1 tooltip bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-3 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                    data-tooltip="Delete this project"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Listings Section */}
      {listings.length > 0 && (
        <div className="w-full max-w-7xl mx-auto mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-blue-300 animate-slide-in">
            Your Listings
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((listing, index) => (
              <div
                key={listing._id}
                className="relative bg-gray-800/40 p-6 rounded-2xl backdrop-blur-lg border border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {listing.photo && (
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={listing.photo}
                      alt={listing.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                )}
                <h4 className="text-lg font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                  {listing.name}
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Email:</strong> {listing.email}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Mobile:</strong> {listing.mobile}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Course:</strong> {listing.course}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Branch:</strong> {listing.branch}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Year:</strong> {listing.year}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Skills:</strong> {listing.skills.join(', ')}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  <strong>About:</strong> {listing.about}
                </p>
                {listing.github && (
                  <p className="text-sm mb-2">
                    <strong>GitHub:</strong>{' '}
                    <a
                      href={`https://github.com/${listing.github}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {listing.github}
                    </a>
                  </p>
                )}
                {listing.linkedin && (
                  <p className="text-sm mb-2">
                    <strong>LinkedIn:</strong>{' '}
                    <a
                      href={`https://linkedin.com/in/${listing.linkedin}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {listing.linkedin}
                    </a>
                  </p>
                )}
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/edit-listing/${listing._id}`)}
                    className="flex-1 tooltip bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                    data-tooltip="Edit this listing"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteListing(listing._id)}
                    className="flex-1 tooltip bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-3 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                    data-tooltip="Delete this listing"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;