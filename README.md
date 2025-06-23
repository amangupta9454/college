can you enhance it more <h1 align="center" style="color:#4CAF50; font-size: 42px;">🤝 <b>TeamUp - College Connect @HIET</b> 🤝</h1>
<h3 align="center" style="color:#6B7280; font-style: italic;">Uniting HIET Students for Collaboration, Innovation, and Growth</h3>

<p align="center" style="font-size: 17px; color:#374151;">
<b>TeamUp</b> is a vibrant MERN stack platform that empowers students at <b>Hi-Tech Institute of Engineering and Technology (HIET)</b>, Ghaziabad, to connect, showcase their skills, share projects, and build powerful professional networks. Experience a seamless, tech-driven journey to academic and career success!
</p>
<p align="center">
  <a href="https://hietteam.netlify.app/" style="color:#2563EB; font-weight:bold;">🚀 LIVE DEMO</a>
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
```


<hr> 
<h2 id="features">✨ Key Features</h2>
 <ul>
  <li>🔐 Secure Authentication: JWT-based login with OTP email verification via Nodemailer.</li>
   <li>📦 Dynamic Profiles: Showcase academic details, skills, and social links (GitHub, LinkedIn).</li>
    <li>💬 Project Listings: Share projects with tech stack, problem statements, and repository links.</li>
     <li>📊 Smart Filtering: Filter students by branch, course, year, or skills for team formation.</li>
      <li>📱 Responsive UI: Mobile-first design with Tailwind CSS, Framer Motion, and GSAP animations.</li>
       <li>📊 User Dashboard: Manage profiles and projects with edit/delete options.</li>
       <li>📬 Contact Form: Seamless inquiries via Getform.io integration.</li>
        </ul> 



<hr> 
        <h2 id="enhancements">🚀 Future Enhancements</h2>
         <ul>
          <li>📱 Launch Android/iOS app</li>
           <li>📈 AI for price & crop prediction</li> 
           <li>🌍 Full multilingual support</li> 
           <li>🔗 Blockchain traceability</li>
            </ul> 


<hr> 
            <h2 id="contact">📬 Contact Me</h2>
             <ul>
              <li><strong>Name:</strong> Aman Gupta</li>
               <li><strong>Email:</strong>  <a href="ag0567688@gmail.com">Send me an email</a> </li>
                <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/amangupta9454">LINKEDIN</a></li>
                 <li><strong>GitHub:</strong> <a href="https://github.com/amangupta9454">GITHUB</a></li>
                 <li><strong>Portfolio:</strong> <a href="https://guptaaman.netlify.app/">PORTFOLIO</a></li>
                  </ul> 
                  <hr>
                   <h2 id="creator">👨‍💻 Created By</h2> 
                   <p><strong>Aman Gupta</strong><br>B.Tech 2nd year Student | HIET Ghaziabad<br>Passionate about tech and sustainable Skilling 🌱</p>
                    <p align="center">⭐ If you found this project helpful, give it a star!</p>

