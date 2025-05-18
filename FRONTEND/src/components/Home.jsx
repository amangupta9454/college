import { useEffect } from 'react';
import Typed from 'typed.js';
import { FaUsers, FaRocket, FaCode, FaUserPlus, FaListAlt, FaProjectDiagram } from 'react-icons/fa';

function Home() {
  useEffect(() => {
    const options = {
      strings: ['Connect with teams'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed('#typed-text', options);
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          el.classList.add('reveal-active');
        } else {
          el.classList.remove('reveal-active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FaUserPlus className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />,
      title: 'Join Teams',
      description: 'Discover and join diverse teams to collaborate on exciting projects tailored to your skills and interests.',
    },
    {
      icon: <FaListAlt className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />,
      title: 'List Yourself',
      description: 'Showcase your skills and expertise to attract team leaders looking for talented members like you.',
    },
    {
      icon: <FaProjectDiagram className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />,
      title: 'Post Projects',
      description: 'Share your innovative project ideas and recruit passionate teammates to bring them to life.',
    },
    {
      icon: <FaUsers className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />,
      title: 'Build Connections',
      description: 'Network with peers, form lasting collaborations, and grow your professional circle within the community.',
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="max-w-7xl w-full mx-auto z-10 reveal">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6 tracking-tighter hero-text animate-gradient  p-2">
            TeamUp
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span id="typed-text" className="inline-block"></span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="font-semibold text-indigo-300">Collaborate.</span>
            <span className="font-semibold text-indigo-300">Innovate.</span>
            <span className="font-semibold text-indigo-300">Create.</span>
            <span className="font-semibold text-indigo-300">Succeed.</span>
            <span className="font-semibold text-indigo-300">Together.</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:bg-gray-800/90 hover:shadow-3xl hover:ring-2 hover:ring-cyan-400/40 transition-all duration-300">
              <FaUsers className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">Find Teammates</span>
            </div>
            <div className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:bg-gray-800/90 hover:shadow-3xl hover:ring-2 hover:ring-cyan-400/40 transition-all duration-300">
              <FaRocket className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">Post Projects</span>
            </div>
            <div className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:bg-gray-800/90 hover:shadow-3xl hover:ring-2 hover:ring-cyan-400/40 transition-all duration-300">
              <FaCode className="text-4xl sm:text-5xl md:text-6xl text-indigo-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">Showcase Skills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-15"></div>
        <div className="max-w-7xl mx-auto relative z-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-12 lg:mb-16 reveal   p-2">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex flex-col items-center p-6 rounded-2xl bg-gray-800/80 backdrop-blur-md shadow-2xl hover:bg-cyan-700/90 hover:shadow-3xl hover:ring-2 hover:ring-pink-600/50 transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature.icon}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;