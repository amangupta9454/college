<h1 align="center" style="color:#4CAF50; font-size: 42px;">🤝 <b>TeamUp - College Connect @HIET</b> 🤝</h1>
<h3 align="center" style="color:#6B7280; font-style: italic;">Uniting HIET Students for Collaboration, Innovation, and Growth</h3>

<p align="center" style="font-size: 17px; color:#374151;">
<b>TeamUp</b> is a vibrant MERN stack platform that empowers students at <b>Hi-Tech Institute of Engineering and Technology (HIET)</b>, Ghaziabad, to connect, showcase their skills, share projects, and build powerful professional networks. Experience a seamless, tech-driven journey to academic and career success!
</p>
<p align="center">
  <a href="http://your-deployed-url" style="color:#2563EB; font-weight:bold;">🚀 LIVE DEMO</a>
</p>

<hr style="border: 2px solid #E5E7EB;">

<h2>📚 <b>Table of Contents</b></h2>

<ul style="list-style-type: square; color:#1F2937;">
  <li><a href="#about" style="color:#2563EB;">About the Project</a></li>
  <li><a href="#structure" style="color:#2563EB;">Folder & File Structure</a></li>
  <li><a href="#tech" style="color:#2563EB;">Tech Stack</a></li>
  <li><a href="#dependencies" style="color:#2563EB;">All Dependencies</a></li>
  <li><a href="#setup" style="color:#2563EB;">How to Use This Project</a></li>
  <li><a href="#features" style="color:#2563EB;">Key Features</a></li>
  <li><a href="#enhancements" style="color:#2563EB;">Future Enhancements</a></li>
  <li><a href="#contact" style="color:#2563EB;">Contact Me</a></li>
  <li><a href="#creator" style="color:#2563EB;">Created By</a></li>
</ul>

<hr style="border: 2px solid #E5E7EB;">

<h2 id="about">🧭 <b>About the Project</b></h2>

<p style="color:#374151;">
<b>TeamUp</b> is a game-changer for HIET students, providing a dynamic platform to collaborate on projects, form teams, and grow professionally. By bridging the gap between ideas and execution, TeamUp fosters innovation with:
</p>

<ul style="list-style-type: disc; color:#1F2937;">
  <li><b>Secure Authentication:</b> Robust login and registration with OTP verification.</li>
  <li><b>Dynamic Profiles:</b> Showcase skills, academics, and social links.</li>
  <li><b>Project Sharing:</b> Post and discover innovative project ideas.</li>
  <li><b>Smart Filtering:</b> Find the perfect teammates based on skills or interests.</li>
</ul>

<hr style="border: 2px solid #E5E7EB;">

<h2 id="structure">🗂️ <b>Folder & File Structure</b></h2>

<pre style="background-color:#F3F4F6; padding:15px; border-radius:8px;">
TeamUp/
├── backend/
│   ├── .env                   # Environment variables
│   ├── .gitignore            # Git ignore file
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Express server entry
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── middleware/
│   │   └── authMiddleware.js # JWT authentication
│   ├── models/
│   │   ├── Listing.js        # Student listing schema
│   │   ├── Project.js        # Project schema
│   │   └── User.js           # User schema
│   ├── routes/
│   │   ├── listing.js        # Listing endpoints
│   │   ├── project.js        # Project endpoints
│   │   └── user.js           # User endpoints
│   └── uploads/
│       └── (user images)     # Uploaded files
├── frontend/
│   ├── .env                  # Environment variables
│   ├── .gitignore            # Git ignore file
│   ├── index.html            # HTML template
│   ├── netlify.toml          # Netlify config
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite config
│   ├── dist/                 # Build output
│   ├── public/
│   │   └── teamup.jpeg       # Favicon
│   └── src/
│       ├── App.jsx           # Main app with routes
│       ├── index.css         # Global styles
│       ├── main.jsx          # Entry point
│       ├── assets/           # Static assets
│       ├── components/
│       │   ├── Contact.jsx   # Contact form
│       │   ├── Dashboard.jsx # User dashboard
│       │   ├── EditListing.jsx # Edit profile
│       │   ├── Footer.jsx    # Footer
│       │   ├── Home.jsx      # Landing page
│       │   ├── Listing.jsx   # Profile creation
│       │   ├── Login.jsx     # Login form
│       │   ├── Navbar.jsx    # Navigation bar
│       │   ├── Projects.jsx  # Project listings
│       │   ├── Register.jsx  # Registration form
│       │   └── Student.jsx   # Student listings
</pre>

<hr style="border: 2px solid #E5E7EB;">

<h2 id="tech">🧰 <b>Tech Stack</b></h2>

<table style="width:100%; border-collapse:collapse; border:1px solid #D1D5DB;">
  <tr style="background-color:#1F2937; color:white;">
    <th style="padding:10px;">Part</th>
    <th style="padding:10px;">Technology</th>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">Frontend</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">React, Tailwind CSS, Vite</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">Backend</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">Node.js, Express.js, MongoDB</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">Authentication</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">JWT, Bcrypt</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">Email</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">Nodemailer</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">Deployment</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">Netlify (Frontend), Render (Backend)</td>
  </tr>
</table>

<hr style="border: 2px solid #E5E7EB;">

<h2 id="dependencies">📦 <b>All Dependencies</b></h2>

<h3>🔧 <b>Backend</b></h3>

<table style="width:100%; border-collapse:collapse; border:1px solid #D1D5DB;">
  <tr style="background-color:#1F2937; color:white;">
    <th style="padding:10px;">Package</th>
    <th style="padding:10px;">Version</th>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">bcrypt</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^5.1.1</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">cors</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^2.8.5</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">dotenv</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^16.4.5</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">express</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^4.21.1</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">jsonwebtoken</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^9.0.2</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">mongoose</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^8.8.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">multer</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^1.4.5</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">nodemailer</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^6.9.16</td>
  </tr>
</table>

<h3>🎨 <b>Frontend</b></h3>

<table style="width:100%; border-collapse:collapse; border:1px solid #D1D5DB;">
  <tr style="background-color:#1F2937; color:white;">
    <th style="padding:10px;">Package</th>
    <th style="padding:10px;">Version</th>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">@tailwindcss/vite</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^4.1.7</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">axios</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^1.9.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">framer-motion</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^12.12.1</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">gsap</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^3.13.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">react</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^19.1.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">react-dom</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^19.1.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">react-icons</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^5.5.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">react-router-dom</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^7.6.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">tailwindcss</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^4.1.7</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">typed.js</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^2.1.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">@eslint/js</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^9.25.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">@types/react</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^19.1.2</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">@types/react-dom</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^19.1.2</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">@vitejs/plugin-react</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^4.4.1</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">eslint</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^9.25.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">eslint-plugin-react-hooks</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^5.2.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">eslint-plugin-react-refresh</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^0.4.19</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">globals</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^16.0.0</td>
  </tr>
  <tr>
    <td style="padding:10px; border:1px solid #D1D5DB;">vite</td>
    <td style="padding:10px; border:1px solid #D1D5DB;">^6.3.5</td>
  </tr>
</table>

<hr style="border: 2px solid #E5E7EB;">

<h2 id="setup">⚙️ <b>How to Use This Project</b></h2>

<h3>🧩 <b>Backend</b></h3>

```bash
cd backend
npm install
# Create .env with Mongo URI, JWT, Email credentials
npm start

🎨 Frontend

cd frontend
npm install
npm run dev

🌐 Open Your Browser

http://localhost:5173



✨ Key Features





🔐 Secure Authentication: JWT-based login with OTP email verification via Nodemailer.



📋 Dynamic Profiles: Showcase academic details, skills, and social links (GitHub, LinkedIn).



📦 Project Listings: Share projects with tech stack, problem statements, and repository links.



🔍 Smart Filtering: Filter students by branch, course, year, or skills for team formation.



📱 Responsive UI: Mobile-first design with Tailwind CSS, Framer Motion, and GSAP animations.



📊 User Dashboard: Manage profiles and projects with edit/delete options.



📬 Contact Form: Seamless inquiries via Getform.io integration.



🚀 Future Enhancements





📱 Mobile App: Launch iOS and Android apps for on-the-go access.



💬 Real-Time Chat: Enable instant messaging for team collaboration.



📈 AI Skill Matching: Suggest teammates based on skills and interests.



🌐 Multilingual Support: Expand accessibility with multiple languages.



🎓 Hackathon Integration: Dedicated section for hackathon events.



<h2 id="contact">📬 Contact Me</h2>
             <ul>
              <li><strong>Name:</strong> Aman Gupta</li>
               <li><strong>Email:</strong>  <a href="ag0567688@gmail.com">Send me an email</a> </li>
                <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/amangupta9454">LINKEDIN</a></li>
                 <li><strong>GitHub:</strong> <a href="https://github.com/amangupta9454">GITHUB</a></li>
                 <li><strong>Portfolio:</strong> <a href="https://guptaaman.netlify.app/">PORTFOLIO</a></li>
                  </ul> 


👨‍💻 Creator

Aman Gupta
B.Tech 2nd Year CS Student | HIET, Ghaziabad
Passionate about crafting tech solutions for education and collaboration 🌟

center; color:#333;"> ⭐️ If you love this project, give it a star!

```
