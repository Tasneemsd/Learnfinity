import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiMenu, FiX } from 'react-icons/fi';

function Home() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const username = location.state?.name || storedUser?.name || 'User';
  const profileImage = location.state?.image || storedUser?.profileImage || null;
  const profileImageUrl = profileImage ? `${BASE_URL}/uploads/${profileImage}` : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-blue-500 font-dancing">
            Learnfinity
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm sm:text-base">
            <Link to="/" className="text-gray-700 hover:text-blue-500 font-semibold">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-500 font-semibold">Courses</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-semibold">Contact</Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-gray-700 font-semibold p-0">
                Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/interview">Interview Q/A</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Profile Image */}
          <div className="ml-4">
            {profileImageUrl ? (
              <div className="relative group">
                <img
                  src={profileImageUrl}
                  alt="Profile"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover shadow-md transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm">
                  {username}
                </div>
              </div>
            ) : (
              <div className="text-gray-400 text-xs sm:text-sm">No profile image</div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <Link
              to="/"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-gray-200"></div>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="block w-full text-left px-6 py-3 text-gray-700 font-semibold"
              >
                Profile
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-full">
                <Dropdown.Item as={Link} to="/profile" onClick={() => setMenuOpen(false)}>My Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/interview" onClick={() => setMenuOpen(false)}>Interview Q/A</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="mt-24 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-24 space-y-8 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Find Your Desired <span className="text-blue-500">Courses</span>
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
            Improve your <span className="bg-yellow-300 px-1 rounded">Skills</span> and grow professionally
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            Explore thousands of online courses, learn new skills, and achieve your career goals with Learnfinity.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => navigate('/courses')}
              className="px-5 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition text-sm sm:text-base"
            >
              Explore Courses ➜
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition text-sm sm:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="./images/web.jpg"
            alt="Hero"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center mt-12 px-4 sm:px-6 md:px-24">
        <input
          type="text"
          placeholder="Search for courses..."
          className="flex-1 p-3 border rounded-l-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <button className="px-4 py-3 bg-blue-500 text-white rounded-r-lg shadow hover:bg-blue-600 transition text-sm sm:text-base">
          Search
        </button>
      </div>

      {/* Featured Courses */}
      <section className="mt-16 px-4 sm:px-6 md:px-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {["React", "Python", "Data Science"].map((course, i) => (
            <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={`./images/course${i + 1}.jpg`} alt={course} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold">{course} Course</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Learn {course} from scratch with interactive lessons and projects.
                </p>
                <button
                  onClick={() => navigate('/courses')}
                  className="mt-4 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm sm:text-base"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16 bg-gray-50 py-12 px-4 sm:px-6 md:px-24 rounded-lg shadow-inner">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {["Alice", "Bob", "Charlie"].map((student, i) => (
            <div key={i} className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 text-sm sm:text-base">
                "Learnfinity helped me gain skills in {student}'s field and boosted my career."
              </p>
              <h4 className="mt-3 font-semibold text-gray-900 text-sm sm:text-base">{student}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white py-6 sm:py-8 px-4 sm:px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base">
          <p>© 2025 Learnfinity. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            <Link to="/about" className="hover:text-blue-400">About Us</Link>
            <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
