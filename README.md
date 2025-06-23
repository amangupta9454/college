<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="TeamUp - A MERN stack platform for HIET students to connect, collaborate, and showcase projects.">
  <meta name="keywords" content="TeamUp, HIET, MERN stack, student collaboration, project sharing">
  <meta name="author" content="Aman Gupta">
  <title>TeamUp - College Connect @HIET</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <!-- AOS for animations -->
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
  <!-- Prism.js for code highlighting (optional) -->
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css" rel="stylesheet">
  <style>
    :root {
      --primary: #4CAF50;
      --secondary: #2563EB;
      --text: #1F2937;
      --text-light: #374151;
      --bg: #F9FAFB;
      --bg-secondary: #F3F4F6;
      --border: #E5E7EB;
      --accent: #6B7280;
    }
    [data-theme="dark"] {
      --primary: #22C55E;
      --secondary: #3B82F6;
      --text: #F3F4F6;
      --text-light: #D1D5DB;
      --bg: #1F2937;
      --bg-secondary: #374151;
      --border: #4B5563;
      --accent: #9CA3AF;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    body {
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 20px;
      transition: background 0.3s, color 0.3s;
    }
    h1, h2, h3 {
      color: var(--text);
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      color: transparent;
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: 500;
    }
    p, li {
      color: var(--text-light);
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }
    a {
      color: var(--secondary);
      text-decoration: none;
      transition: color 0.3s, transform 0.3s;
    }
    a:hover {
      color: var(--primary);
      transform: translateY(-2px);
    }
    hr {
      border: 0;
      height: 2px;
      background: var(--border);
      margin: 2rem 0;
    }
    ul {
      list-style-type: none;
      padding-left: 1.5rem;
    }
    ul li::before {
      content: '•';
      color: var(--primary);
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      background: var(--bg-secondary);
      border-radius: 8px;
      overflow: hidden;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border: 1px solid var(--border);
    }
    th {
      background: var(--text);
      color: var(--bg);
    }
    pre {
      background: var(--bg-secondary);
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 0.9rem;
    }
    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      color: white;
      border-radius: 50px;
      text-align: center;
      font-weight: 600;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .btn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    .theme-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
    }
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--primary);
      color: white;
      padding: 10px 15px;
      border-radius: 50%;
      display: none;
      cursor: pointer;
      transition: opacity 0.3s;
    }
    .back-to-top.show {
      display: block;
      opacity: 1;
    }
    @media (max-width: 768px) {
      h1 { font-size: 2rem; }
      h2 { font-size: 1.5rem; }
      h3 { font-size: 1.2rem; }
      p, li { font-size: 0.95rem; }
      table, pre { font-size: 0.85rem; }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    [data-aos] {
      animation: fadeIn 0.5s ease-out;
    }
  </style>
</head>
<body>
  <!-- Theme Toggle Button -->
  <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle Dark Mode">
    🌙
  </button>

  <!-- Header -->
  <h1 data-aos="fade-down">🤝 <b>TeamUp - College Connect @HIET</b> 🤝</h1>
  <h3 data-aos="fade-up" style="color: var(--accent); font-style: italic; text-align: center;">
    Uniting HIET Students for Collaboration, Innovation, and Growth
  </h3>
  <p data-aos="fade-up" style="font-size: 1.1rem; text-align: center; max-width: 800px; margin: 0 auto;">
    <b>TeamUp</b> is a vibrant MERN stack platform that empowers students at <b>Hi-Tech Institute of Engineering and Technology (HIET)</b>, Ghaziabad, to connect, showcase their skills, share projects, and build powerful professional networks. Experience a seamless, tech-driven journey to academic and career success!
  </p>
  <p data-aos="zoom-in" style="text-align: center; margin: 1.5rem 0;">
    <a href="https://hietteam.netlify.app/" class="btn" aria-label="View Live Demo">🚀 LIVE DEMO</a>
  </p>

  <hr>

  <!-- Table of Contents -->
  <h2 data-aos="fade-right">📚 <b>Table of Contents</b></h2>
  <ul data-aos="fade-left">
    <li><a href="#about">About the Project</a></li>
    <li><a href="#structure">Folder & File Structure</a></li>
    <li><a href="#tech">Tech Stack</a></li>
    <li><a href="#dependencies">All Dependencies</a></li>
    <li><a href="#setup">How to Use This Project</a></li>
    <li><a href="#features">Key Features</a></li>
    <li><a href="#enhancements">Future Enhancements</a></li>
    <li><a href="#contact">Contact Me</a></li>
    <li><a href="#creator">Created By</a></li>
  </ul>

  <hr>

  <!-- About the Project -->
  <h2 id="about" data-aos="fade-right">🧭 <b>About the Project</b></h2>
  <p data-aos="fade-left">
    <b>TeamUp</b> is a game-changer for HIET students, providing a dynamic platform to collaborate on projects, form teams, and grow professionally. By bridging the gap between ideas and execution, TeamUp fosters innovation with:
  </p>
  <ul data-aos="fade-up">
    <li><b>Secure Authentication:</b> Robust login and registration with OTP verification.</li>
    <li><b>Dynamic Profiles:</b> Showcase skills, academics, and social links.</li>
    <li><b>Project Sharing:</b> Post and discover innovative project ideas.</li>
    <li><b>Smart Filtering:</b> Find the perfect teammates based on skills or interests.</li>
  </ul>

  <hr>

  <!-- Folder & File Structure -->
  <h2 id="structure" data-aos="fade-right">🗂️ <b>Folder & File Structure</b></h2>
  <pre data-aos="fade-left" class="language-bash"><code>TeamUp/
├── backend/
│   ├── .env                   
│   ├── .gitignore            
│   ├── package.json          
│   ├── server.js             
│   ├── listingSchema.js
│   └── uploads/
│       └── (user images)     
├── frontend/
│   ├── .env                  
│   ├── .gitignore            
│   ├── index.html            
│   ├── netlify.toml          
│   ├── package.json          
│   ├── vite.config.js        
│   ├── dist/                 
│   ├── public/
│   │   └── teamup.jpeg       
│   └── src/
│       ├── App.jsx           
│       ├── index.css         
│       ├── main.jsx          
│       ├── assets/           
│       ├── components/
│       │   ├── Contact.jsx   
│       │   ├── Dashboard.jsx 
│       │   ├── EditListing.jsx 
│       │   ├── Footer.jsx    
│       │   ├── Home.jsx      
│       │   ├── Listing.jsx   
│       │   ├── Login.jsx     
│       │   ├── Navbar.jsx    
│       │   ├── Projects.jsx  
│       │   ├── Register.jsx  
│       │   └── Student.jsx   
</code></pre>

  <hr>

  <!-- Tech Stack -->
  <h2 id="tech" data-aos="fade-right">🧰 <b>Tech Stack</b></h2>
  <table data-aos="fade-left">
    <tr>
      <th>Part</th>
      <th>Technology</th>
    </tr>
    <tr>
      <td>Frontend</td>
      <td>React, Tailwind CSS, Vite</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Node.js, Express.js, MongoDB</td>
    </tr>
    <tr>
      <td>Authentication</td>
      <td>JWT, Bcrypt</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>Nodemailer</td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>Netlify (Frontend), Render (Backend)</td>
    </tr>
  </table>

  <hr>

  <!-- Dependencies -->
  <h2 id="dependencies" data-aos="fade-right">📦 <b>All Dependencies</b></h2>
  <h3 data-aos="fade-left">🔧 <b>Backend</b></h3>
  <table data-aos="fade-up">
    <tr>
      <th>Package</th>
      <th>Version</th>
    </tr>
    <tr><td>bcrypt</td><td>^5.1.1</td></tr>
    <tr><td>cors</td><td>^2.8.5</td></tr>
    <tr><td>dotenv</td><td>^16.4.5</td></tr>
    <tr><td>express</td><td>^4.21.1</td></tr>
    <tr><td>jsonwebtoken</td><td>^9.0.2</td></tr>
    <tr><td>mongoose</td><td>^8.8.0</td></tr>
    <tr><td>multer</td><td>^1.4.5</td></tr>
    <tr><td>nodemailer</td><td>^6.9.16</td></tr>
  </table>
  <h3 data-aos="fade-left">🎨 <b>Frontend</b></h3>
  <table data-aos="fade-up">
    <tr>
      <th>Package</th>
      <th>Version</th>
    </tr>
    <tr><td>@tailwindcss/vite</td><td>^4.1.7</td></tr>
    <tr><td>axios</td><td>^1.9.0</td></tr>
    <tr><td>framer-motion</td><td>^12.12.1</td></tr>
    <tr><td>gsap</td><td>^3.13.0</td></tr>
    <tr><td>react</td><td>^19.1.0</td></tr>
    <tr><td>react-dom</td><td>^19.1.0</td></tr>
    <tr><td>react-icons</td><td>^5.5.0</td></tr>
    <tr><td>react-router-dom</td><td>^7.6.0</td></tr>
    <tr><td>tailwindcss</td><td>^4.1.7</td></tr>
    <tr><td>typed.js</td><td>^2.1.0</td></tr>
    <tr><td>@eslint/js</td><td>^9.25.0</td></tr>
    <tr><td>@types/react</td><td>^19.1.2</td></tr>
    <tr><td>@types/react-dom</td><td>^19.1.2</td></tr>
    <tr><td>@vitejs/plugin-react</td><td>^4.4.1</td></tr>
    <tr><td>eslint</td><td>^9.25.0</td></tr>
    <tr><td>eslint-plugin-react-hooks</td><td>^5.2.0</td></tr>
    <tr><td>eslint-plugin-react-refresh</td><td>^0.4.19</td></tr>
    <tr><td>globals</td><td>^16.0.0</td></tr>
    <tr><td>vite</td><td>^6.3.5</td></tr>
  </table>

  <hr>

  <!-- How to Use -->
  <h2 id="setup" data-aos="fade-right">⚙️ <b>How to Use This Project</b></h2>
  <h3 data-aos="fade-left">🧩 <b>Backend</b></h3>
  <pre data-aos="fade-up" class="language-bash"><code>cd backend
npm install
# Create .env with Mongo URI, JWT, Email credentials
npm start
</code></pre>
  <h3 data-aos="fade-left">🎨 <b>Frontend</b></h3>
  <pre data-aos="fade-up" class="language-bash"><code>cd frontend
npm install
npm run dev
</code></pre>
  <h3 data-aos="fade-left">🌐 <b>Open Your Browser</b></h3>
  <pre data-aos="fade-up" class="language-bash"><code>http://localhost:5173</code></pre>

  <hr>

  <!-- Key Features -->
  <h2 id="features" data-aos="fade-right">✨ <b>Key Features</b></h2>
  <ul data-aos="fade-left">
    <li>🔐 <b>Secure Authentication:</b> JWT-based login with OTP email verification via Nodemailer.</li>
    <li>📦 <b>Dynamic Profiles:</b> Showcase academic details, skills, and social links (GitHub, LinkedIn).</li>
    <li>💬 <b>Project Listings:</b> Share projects with tech stack, problem statements, and repository links.</li>
    <li>📊 <b>Smart Filtering:</b> Filter students by branch, course, year, or skills for team formation.</li>
    <li>📱 <b>Responsive UI:</b> Mobile-first design with Tailwind CSS, Framer Motion, and GSAP animations.</li>
    <li>📊 <b>User Dashboard:</b> Manage profiles and projects with edit/delete options.</li>
    <li>📬 <b>Contact Form:</b> Seamless inquiries via Getform.io integration.</li>
  </ul>

  <hr>

  <!-- Future Enhancements -->
  <h2 id="enhancements" data-aos="fade-right">🚀 <b>Future Enhancements</b></h2>
  <ul data-aos="fade-left">
    <li>📱 Launch Android/iOS app with React Native.</li>
    <li>📈 Integrate AI for personalized project recommendations and skill matching.</li>
    <li>🌍 Add full multilingual support with i18n.</li>
    <li>🔗 Implement blockchain for secure project ownership and verification.</li>
  </ul>

  <hr>

  <!-- Contact Me -->
  <h2 id="contact" data-aos="fade-right">📬 <b>Contact Me</b></h2>
  <ul data-aos="fade-left">
    <li><strong>Name:</strong> Aman Gupta</li>
    <li><strong>Email:</strong> <a href="mailto:ag0567688@gmail.com" aria-label="Email Aman Gupta">Send me an email</a></li>
    <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/amangupta9454" aria-label="Aman Gupta's LinkedIn">LinkedIn</a></li>
    <li><strong>GitHub:</strong> <a href="https://github.com/amangupta9454" aria-label="Aman Gupta's GitHub">GitHub</a></li>
    <li><strong>Portfolio:</strong> <a href="https://guptaaman.netlify.app/" aria-label="Aman Gupta's Portfolio">Portfolio</a></li>
  </ul>

  <hr>

  <!-- Created By -->
  <h2 id="creator" data-aos="fade-right">👨‍💻 <b>Created By</b></h2>
  <p data-aos="fade-left">
    <strong>Aman Gupta</strong><br>
    B.Tech 2nd Year Student | HIET Ghaziabad<br>
    Passionate about tech and sustainable skilling 🌱
  </p>
  <p data-aos="zoom-in" style="text-align: center; margin-top: 1.5rem;">
    ⭐ <a href="https://github.com/amangupta9454/TeamUp" aria-label="Star TeamUp on GitHub">If you found this project helpful, give it a star!</a>
  </p>

  <!-- Back to Top Button -->
  <button class="back-to-top" onclick="scrollToTop()" aria-label="Back to Top">↑</button>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
  <script>
    // Initialize AOS
    AOS.init({ duration: 800, once: true });
    // Theme Toggle
    function toggleTheme() {
      const body = document.body;
      const currentTheme = body.getAttribute('data-theme');
      body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', body.getAttribute('data-theme'));
    }
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    }
    // Back to Top
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 300);
    });
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  </script>
</body>
</html>