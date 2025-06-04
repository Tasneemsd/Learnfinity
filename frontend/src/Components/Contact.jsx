import { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './../Css/Contact.css';

import { Link } from 'react-router-dom';

import { FaUser, FaEnvelope, FaSignOutAlt, FaHome, FaBook, FaQuestion, FaEdit, FaChrome, FaLaptop, FaPen, FaCommentDots  } from 'react-icons/fa';

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return ( <>
  <div className="bg">
        <Navbar expand="lg" className="custom-colors">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="learnfinity-logo" style={{ color: "blue" }}>
              Learnfinity
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  <div className="second">
        <img
          src="../images/lo.png"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            marginLeft: '80px',
            marginTop: '40px'
          }}
        />
        <Link to="/" className="nav-liis">
          <FaHome /> Home
        </Link>
        <Link to="/courses" className="nav-lii">
          <FaBook /> Courses
        </Link>
        <Link to="/" className="nav-lii">
          <FaQuestion /> Quiz
        </Link>
        <Link to="/edit" className="nav-lii">
          <FaEdit /> Editor
        </Link>
        <Link to="/contact" className="nav-lii">
          <FaEnvelope /> Contact
        </Link>
        <Link to="/profile" className="nav-lii">
          <FaUser /> Profile
        </Link>
        <Link to="/lab" className="nav-lii">
          <FaLaptop /> Lab
        </Link>
        <Link to="/help" className="nav-lii">
          <FaChrome /> Help
        </Link>
        <Link to="/login" className="mainli">
          <FaSignOutAlt /> Logout
        </Link>
      </div>

      <div className="contact-container">
          
      <h2 className="contact-title">📩 Get in Touch</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="fullName">
            <Form.Label><FaUser className="me-2" />Full Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your full name" />
            <Form.Control.Feedback type="invalid">
              Please provide your full name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="email">
            <Form.Label><FaEnvelope className="me-2" />Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter your email" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label><FaPen className="me-2" />Subject</Form.Label>
          <Form.Control required type="text" placeholder="Subject of your message" />
          <Form.Control.Feedback type="invalid">
            Please provide a subject.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label><FaCommentDots className="me-2" />Message</Form.Label>
          <Form.Control required as="textarea" rows={5} placeholder="Type your message here..." />
          <Form.Control.Feedback type="invalid">
            Please write your message.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="I agree to the terms and privacy policy"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit" className="submit-btn">
          Send Message
        </Button>
      </Form>
    </div>
  </>
    
  );
};

export default Contact;
