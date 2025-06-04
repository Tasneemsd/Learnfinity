import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import './../Css/Home.css';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();


  const username = location.state?.name || localStorage.getItem("username") || "User";
  const profileImage = location.state?.image || localStorage.getItem("profileImage");

  const profileImageUrl = profileImage ? `http://localhost:4001/uploads/${profileImage}` : null;

  console.log("location.state:", location.state);
  console.log("localStorage profileImage:", localStorage.getItem("profileImage"));
  console.log("Final profileImage:", profileImage);


  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("profileImage");
    navigate('/login');
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
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <div className="profile-container">
                  {profileImageUrl ? (
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="profile-pic"
                    />
                  ) : (
                    <div className="no-image">No profile image found</div>
                  )}
                  <div className="username-hover">{username}</div>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>




      <div className="d-flex justify-content-center align-items-center my-4 secondnav1">
        <Link to="/" className="nav-lit mx-2">Home</Link>
        <Link to="/courses" className="nav-linkt-style2 mx-2">Courses</Link>
        <Link to="/contact" className="nav-linkt-style2 mx-2">Contact</Link>


        <Dropdown className="mx-2">
          <Dropdown.Toggle variant="link" className="nav-linkt-style">
            Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>

            <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
            <Dropdown.Item as={Link} to="/interview">Interview Q/A</Dropdown.Item>
            <Dropdown.Item as={Link} to="/logout" onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="flex-div">
        <div>
          <div className="skill">Find your Desired Courses and</div>
          <div className="skill2">
            Improve your <span className="highlight-style">Skills</span>
          </div>
          <br />
          <Button
            variant="outline-primary"
            style={{ borderRadius: "50px", marginLeft: "250px" }}
            onClick={() => navigate('/courses')}
          >
            Explore all courses ➜
          </Button>
        </div>
        <img src="./images/web.jpg" alt="Hero" className="myimg" />
      </div>
    </>
  );
}

export default Home;
