import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Student from './components/Student';
import Listing from './components/Listing';
import Projects from './components/Projects';
import Login from './components/Login';
import Contact from './components/Contact';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import EditListing from './components/EditListing';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/students" element={<Student />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/edit-listing/:id" element={<EditListing />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;