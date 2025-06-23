<h1 align="center" style="color:#4CAF50; font-size: 40px;">🤝 TeamUp - College Connect @HIET</h1>
<h3 align="center" style="color:gray;">Empowering HIET Students to Collaborate, Innovate, and Network</h3>

<p align="center" style="font-size: 16px;">
TeamUp is a MERN stack web platform that connects students at Hi-Tech Institute of Engineering and Technology (HIET), Ghaziabad, enabling them to create profiles, share projects, form teams, and build professional networks with a seamless, tech-driven experience.
</p>
<li><a href="http://your-deployed-url">LIVE DEMO</a></li>

<hr>

<h2>📚 Table of Contents</h2>

<ul>
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

<h2 id="about">🧭 About the Project</h2>

<p>
TeamUp is designed to foster collaboration among HIET students by providing a centralized platform for academic and project-based networking. It addresses the challenge of finding compatible teammates and sharing innovative ideas, offering:
</p>

<ul>
  <li>Secure, user-friendly authentication with OTP verification</li>
  <li>Dynamic student profiles and project listings</li>
  <li>Advanced filtering for targeted collaboration</li>
  <li>Responsive, animated UI for an engaging experience</li>
</ul>

<hr>

<h2 id="structure">🗂️ Folder & File Structure</h2>

<pre>
COLLEGE-CONNECT/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   ├── listingSchema.js
│   └── uploads/
│       └── (user images, etc.)
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
</pre>

<hr>

<h2 id="tech">🧰 Tech Stack</h2>

<table>
  <tr><th>Part</th><th>Technology</th></tr>
  <tr><td>Frontend</td><td>React, Tailwind CSS, Vite</td></tr>
  <tr><td>Backend</td><td>Node.js, Express.js, MongoDB</td></tr>
  <tr><td>Authentication</td><td>JWT, Bcrypt</td></tr>
  <tr><td>Email</td><td>Nodemailer</td></tr>
  <tr><td>Deployment</td><td>Netlify (Frontend), Render (Backend)</td></tr>
</table>

<hr>

<h2 id="dependencies">📦 All Dependencies</h2>

<h3>🔧 Backend</h3>

<table>
<tr><th>Package</th><th>Version</th></tr>
<tr><td>bcript</td><td>^5.1.1</td></tr>
<tr><td>cors</td><td>^2.8.5</td></tr>
<tr><td>dotenv</td><td>^16.4.5</td></tr>
<tr><td>express</td><td>^4.21.1</td></tr>
<tr><td>jsonwebtoken</td><td>^9.0.2</td></tr>
<tr><td>mongoose</td><td>^8.8.0</td></tr>
<tr><td>multer</td><td>^1.4.5</td></tr>
<tr><td>nodemailer</td><td>^6.9.16</td></tr>
</table>

<h3>🎨 Frontend</h3>

<table>
<tr><th>Package</th><th>Version</th></tr>
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

<h2 id="setup">⚙️ How to Use This Project</h2>

<h3>🧩 Backend</h3>

```bash
cd backend
npm install
# Create a .env file with credentials (Mongo URI, JWT, Email)
npm start

🎨 Frontend

cd frontend
npm install
npm run dev

🌐 Open your browser

http://localhost:5173



✨ Key Features


  🔐 Secure JWT-based authentication with OTP email verification
  📋 Dynamic student profiles with skills, academic details, and social links
  📦 Project listings with tech stack and repository links
  🔍 Advanced filtering by branch, course, year, or skills
  📱 Responsive UI with Tailwind CSS and animations (Framer Motion, GSAP)
  📊 Personalized dashboard for managing profiles and projects
  📬 Contact form integrated with Getform.io




🚀 Future Enhancements


  📱 Mobile app for iOS and Android
  💬 Real-time chat for team collaboration
  📈 AI-driven skill matching for team formation
  🌐 Multilingual support for broader accessibility




📬 Contact Me


  Name: Aman Gupta
  Email: Send me an email
  LinkedIn: LINKEDIN
  GitHub: GITHUB
  Portfolio: PORTFOLIO




👨‍💻 Created By

Aman GuptaB.Tech 2nd Year Student | HIET GhaziabadPassionate about building tech solutions for education and collaboration 🤝
⭐ If you found this project helpful, give it a star!
```