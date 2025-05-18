import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/login'); // Redirect to login
    setIsOpen(false); // Close mobile menu
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/students', label: 'Students' },
    { to: '/listing', label: 'Listing' },
    { to: '/projects', label: 'Projects' },
    ...(isLoggedIn
      ? [
          { to: '/user-dashboard', label: 'Dashboard' },
          { to: '#', label: 'Logout', onClick: handleLogout },
        ]
      : [{ to: '/login', label: 'Login' }]),
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 shadow-2xl z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300 tracking-tight animate-pulse">
              Team-Up
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={link.onClick}
                className={({ isActive }) =>
                  `relative text-white px-5 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-indigo-700/50 hover:shadow-lg hover:scale-105 ${
                    isActive && link.label !== 'Logout'
                      ? 'bg-indigo-700/70 shadow-inner text-cyan-200'
                      : ''
                  } ${
                    link.label === 'Logout'
                      ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900'
                      : ''
                  } group`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-200 focus:outline-none p-3 rounded-full hover:bg-indigo-700/50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-900 to-blue-900 shadow-inner animate-slideDown">
          <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => {
                  setIsOpen(false);
                  if (link.onClick) link.onClick();
                }}
                className={({ isActive }) =>
                  `relative text-white block px-5 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-indigo-700/60 hover:shadow-md hover:scale-105 ${
                    isActive && link.label !== 'Logout'
                      ? 'bg-indigo-700/80 text-cyan-200'
                      : ''
                  } ${
                    link.label === 'Logout'
                      ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900'
                      : ''
                  } group`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;