import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, formData);
      localStorage.setItem('token', res.data.token);
      navigate('/user-dashboard');
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,225,215,0.1),transparent)] animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="bg-gray-800/40 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md mx-4 border border-gray-700/50 transform transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">Welcome Back</h2>
        {error && (
          <p className="text-red-400 text-center mb-6 bg-red-900/20 p-3 rounded-lg border border-red-700/50 animate-shake">{error}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full p-4 pt-6 bg-gray-700/30 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-transparent"
              required
              placeholder="Email"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">Email</label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="peer w-full p-4 pt-6 bg-gray-700/30 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-transparent"
              required
              placeholder="Password"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">Password</label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg hover:from-blue-700 hover:to-purple-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Sign In'
            )}
          </button>
          <p className="text-gray-400 text-center mt-4 text-sm">
            Not Registered?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Create an account
            </Link>
          </p>
        </form>
      </div>

      
    </div>
  );
}

export default Login;