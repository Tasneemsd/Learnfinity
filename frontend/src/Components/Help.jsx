import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaSignOutAlt, FaHome, FaBook, FaQuestion, FaEdit, FaChrome, FaLaptop, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './../Css/Help.css';

const Help = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    college: '',
    title: '',
    description: '',
    attachment: null
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <>
      <div className="bg">
        <Navbar expand="lg" className="custom-colors">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="learnfinity-logo" style={{ color: "blue" }}>
              Learnfinity
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className={`second ${showSidebar ? 'show' : ''}`}>
        <img src='../images/lo.png' alt="Learnfinity Logo" />
        <Link to="/" className="nav-liis"><FaHome /> <span>Home</span></Link>
        <Link to="/courses" className="nav-lii"><FaBook /> <span>Courses</span></Link>
        <Link to="/" className="nav-lii"><FaQuestion /> <span>Quiz</span></Link>
        <Link to="/edit" className="nav-lii"><FaEdit /> <span>Editor</span></Link>
        <Link to="/contact" className="nav-lii"><FaEnvelope /> <span>Contact</span></Link>
        <Link to="/profile" className="nav-lii"><FaUser /> <span>Profile</span></Link>
        <Link to="/lab" className="nav-lii"><FaLaptop /> <span>Lab</span></Link>
        <Link to="/help" className="nav-lii"><FaChrome /> <span>Help</span></Link>
        <Link to="/login" className="mainli"><FaSignOutAlt /> <span>Logout</span></Link>
      </div>

      <div className="form-container06">
        <h2 className="head2">Submit Feedback / Report Issue</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group06">
            <label htmlFor="category" className="labell">Category</label>
            <select 
              id="category" 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="selectt"
              required
            >
              <option value="">Select an option</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group06">
            <label htmlFor="name" className="labell">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              placeholder="Enter Name ..." 
              value={formData.name}
              onChange={handleChange}
              className="inputt" 
              required 
            />
          </div>

          <div className="form-group06">
            <label htmlFor="email" className="labell">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              placeholder="Enter Email ..." 
              value={formData.email}
              onChange={handleChange}
              className="inputt" 
              required 
            />
          </div>

          <div className="form-group06">
            <label htmlFor="college" className="labell">College</label>
            <input 
              id="college"
              name="college"
              type="text" 
              placeholder="Enter College name ..."
              value={formData.college}
              onChange={handleChange}
              className="inputt"
              required 
            />
          </div>

          <div className="form-group06">
            <label htmlFor="title" className="labell">Title</label>
            <input 
              id="title"
              name="title"
              type="text" 
              placeholder="Enter title ..." 
              value={formData.title}
              onChange={handleChange}
              className="inputt"
              required 
            />
          </div>

          <div className="form-group06">
            <label htmlFor="description" className="labell">Description</label>
            <textarea 
              id="description"
              name="description"
              placeholder="Any issue or feedback..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group06">
            <label htmlFor="attachment" className="labell">Attachment</label>
            <input 
              id="attachment"
              name="attachment"
              type="file" 
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="button06">Submit</button>
        </form>
      </div>

      {/* Mobile menu button */}
      <button 
        className="mobile-menu-btn d-lg-none" 
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaBars />
      </button>
    </>
  );
};

export default Help;