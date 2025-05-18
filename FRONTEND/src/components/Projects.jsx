import { useEffect, useState } from 'react';
import axios from 'axios';

function Project() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
        setProjects(res.data);
      } catch (err) {
        setError('Failed to fetch projects');
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-50 pointer-events-none"></div>
      
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
        All Projects
      </h2>
      
      {error && (
        <p className="text-red-400 text-center mb-6 bg-red-900/20 p-3 rounded-lg max-w-md mx-auto animate-pulse">
          {error}
        </p>
      )}
      
      {projects.length === 0 ? (
        <p className="text-center text-gray-400 text-lg animate-fade-in">
          No projects available.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {project.image && (
                <div className="relative overflow-hidden rounded-md mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
              )}
              <h4 className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Problem Statement:</strong> {project.problemStatement}
              </p>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              {project.githubLink && (
                <p className="text-sm mb-2">
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={project.githubLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
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
                    className="text-blue-400 hover:text-blue-300 transition-colors"
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
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.hostedLink}
                  </a>
                </p>
              )}
              <p className="text-gray-300 text-sm mb-4">
                <strong>Description:</strong> {project.description}
              </p>
              <a
                href={`mailto:${project.userEmail}`}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium"
              >
                Contact Owner
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Project;