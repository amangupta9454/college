import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Real-time validation
  useEffect(() => {
    const validate = () => {
      const newErrors = {};
      
      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }

      // Email validation: lowercase, basic Indian email format
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email.toLowerCase())) {
        newErrors.email = 'Enter a valid email (lowercase only)';
      }

      // Mobile validation: Indian number (10 digits, starts with 6-9)
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!formData.mobile) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!mobileRegex.test(formData.mobile)) {
        newErrors.mobile = 'Enter a valid 10-digit Indian mobile number';
      }

      // Password validation: minimum 6 characters
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      setErrors(newErrors);
    };

    validate();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'email' ? value.toLowerCase() : value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setError('Please fix the form errors');
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/register`, formData);
      setIsOtpSent(true);
      setError('');
    } catch (err) {
      console.error('Registration error:', err.response?.data, err.message);
      setError(err.response?.data.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError('OTP is required');
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/verify-otp`, {
        email: formData.email,
        otp,
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data.message || 'OTP verification failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.4) 1.5px, transparent 0),
          radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.4) 1.5px, transparent 0)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px'
      }}></div>
      <div className="relative z-10 w-full max-w-2xl p-8 bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 animate-fade-in-scale">
        <h2 className="text-4xl font-bold mb-8 text-center text-white tracking-tight drop-shadow-md">
          {isOtpSent ? 'Verify OTP' : 'Create Account'}
        </h2>
        {error && (
          <p className="text-red-400 text-center mb-6 bg-red-900/20 p-3 rounded-lg border border-red-700/30 animate-pulse shadow-sm">
            {error}
          </p>
        )}
        {!isOtpSent ? (
          <form onSubmit={handleRegister} className="grid gap-6 lg:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`peer w-full p-3 pt-5 bg-gray-900/50 text-white border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 placeholder-transparent shadow-md hover:shadow-lg ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Name"
                required
              />
              <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-400">Name</label>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 animate-fade-in">{errors.name}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full p-3 pt-5 bg-gray-900/50 text-white border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 placeholder-transparent shadow-md hover:shadow-lg ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Email"
                required
              />
              <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-400">Email</label>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 animate-fade-in">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength="10"
                className={`peer w-full p-3 pt-5 bg-gray-900/50 text-white border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 placeholder-transparent shadow-md hover:shadow-lg ${errors.mobile ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Mobile Number"
                required
              />
              <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-400">Mobile Number</label>
              {errors.mobile && (
                <p className="text-red-400 text-xs mt-1 animate-fade-in">{errors.mobile}</p>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`peer w-full p-3 pt-5 bg-gray-900/50 text-white border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 placeholder-transparent shadow-md hover:shadow-lg ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Password"
                required
              />
              <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-400">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.79m0 0L21 21"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                )}
              </button>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1 animate-fade-in">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading || Object.keys(errors).length > 0}
              className={`w-full lg:col-span-2 flex items-center justify-center p-3 rounded-lg text-white font-medium transition-all duration-300 shadow-md ${isLoading || Object.keys(errors).length > 0 ? 'bg-blue-500/50 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-blue-500/30'}`}
            >
              {isLoading ? (
                <>
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
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                    />
                  </svg>
                  Registering...
                </>
              ) : (
                'Register'
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="peer w-full p-3 pt-5 bg-gray-900/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 placeholder-transparent shadow-md hover:shadow-lg"
                placeholder="OTP"
                required
              />
              <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-300 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-400">Enter 6-digit OTP</label>
            </div>
            <button
              type="submit"
              disabled={isLoading || !otp.trim()}
              className={`w-full flex items-center justify-center p-3 rounded-lg text-white font-medium transition-all duration-300 shadow-md ${isLoading || !otp.trim() ? 'bg-blue-500/50 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-blue-500/30'}`}
            >
              {isLoading ? (
                <>
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
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                    />
                  </svg>
                  Verifying...
                </>
              ) : (
                'Verify OTP'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;