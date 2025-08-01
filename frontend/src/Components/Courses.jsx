import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './../Css/Courses.css';
import { FaBars } from 'react-icons/fa';

import {
  FaUser, FaEnvelope, FaSignOutAlt, FaHome, FaBook,
  FaQuestion, FaEdit, FaChrome, FaLaptop
} from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: 'HTML',
    description: 'Learn the basics of HTML.',
    image: '../images/card1.png',
    header: "Introduction to HTML",
    lessons: [
      {
        name: "Lesson 1: What is HTML?",
        content: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages.",
      },
      {
        name: "Lesson 2: HTML structure",
        content: "An HTML document is structured with tags like <html>, <head>, <body>, etc.",
      },
      {
        name: "Quiz 1: HTML Basics",
        content: "Take the quiz to test your HTML fundamentals.",
      }
    ],
    modules: "🖥️ Modules",
    lab: "👨‍💻 Labs"
  },
  {
    id: 2,
    title: 'CSS',
    description: 'Deep dive into CSS concepts.',
    image: '../images/card2.png',
    header: "Introduction to CSS"
  },
  { id: 3, title: 'JS', description: 'Learn more about JS', image: '../images/card3.png' },
  { id: 4, title: 'React', description: 'Learn more about React.JS', image: '../images/card4.png' },
  { id: 5, title: 'MongoDB', description: 'Learn more about MongoDB', image: '../images/card5.png' },
  { id: 6, title: 'SQL', description: 'Learn more about SQL', image: '../images/card6.jpg' },
  { id: 7, title: 'Python', description: 'Learn more about Python', image: '../images/card7.jpg' },
  { id: 8, title: 'AWS', description: 'Learn more about AWS', image: '../images/card8.png' },
];

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    const results = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(results);
  }, [searchTerm]);

  const handleExplore = (course) => {
    const route = `/courses/${course.title.toLowerCase().replace('.', '').replace(/\s/g, '-')}-course`;
    navigate(route, { state: course });
  };

  return (
    <>
      <div className="bg fixed-top">
        <Navbar expand="lg" className="custom-colors">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="learnfinity-logo" style={{ color: "blue" }}>
              Learnfinity
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
              <Form className="d-flex">
                <Form.Control
                  style={{ borderRadius: "50px", width: "500px" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-primary" style={{ borderRadius: "50px", marginRight: "70px" }}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

     
      <div className="second">
        <img src='../images/lo.png' alt="logo" style={{ borderRadius: "50%", width: "100px", height: "100px", marginLeft: "80px", marginTop: "40px" }} />
        <Link to="/home" className="nav-liis"><FaHome /> Home</Link>
        <Link to="/courses" className="nav-lii"><FaBook /> Courses</Link>
        <Link to="/quiz" className="nav-lii"><FaQuestion /> Quiz</Link>
        <Link to="/edit" className="nav-lii"><FaEdit /> Editor</Link>
        <Link to="/contact" className="nav-lii"><FaEnvelope /> Contact</Link>
        <Link to="/profile" className="nav-lii"><FaUser /> Profile</Link>
        <Link to="/lab" className="nav-lii"><FaLaptop /> Lab</Link>
        <Link to="/help" className="nav-lii"><FaChrome /> Help</Link>
        <Link to="/login" className="mainli"><FaSignOutAlt /> Logout</Link>
      </div>

      <div className="myrow">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredCourses.map((course) => (
            <Col key={course.id}>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={course.image} style={{ height: '160px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleExplore(course)}>Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* Mobile Menu Button */}
<button className="mobile-menu-btn d-lg-none" onClick={() => document.querySelector('.second').classList.toggle('show')}>
  <FaBars />
</button>
    </>
    
  );
};

export default Courses;
