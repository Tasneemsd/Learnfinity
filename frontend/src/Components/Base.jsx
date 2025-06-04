import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Base.css'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap';

function Base() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="secondnav">
          <Link to="/" className="nav-link-style24 mx-2" >Home</Link>
          <Link to="/error" className="nav-link-style2 mx-2">Courses</Link>
          <Link to="/contact" className="nav-link-style2 mx-2">Contact</Link>
          <Link to="/about" className="nav-link-style2 mx-2">About Us</Link>




          <button type="submit" className='buton' onClick={() => { navigate('/login') }}>Login</button>
          <button type="submit" className='buton' style={{ marginLeft: "10px" }} onClick={() => { navigate('/register') }}>Register</button>


        </div>


      </div>
      <div >
        <Carousel data-bs-theme="dark">
          <Carousel.Item className='caro'>
            <img
              className="ic"
              src="../images/12.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <Button style={{ marginRight: "790px", marginBottom: "60px", backgroundColor: "white", color: "blue" }}>Explore more</Button>
            </Carousel.Caption>

          </Carousel.Item>


          <Carousel.Item className='caro'>
            <img
              className="ic"
              src="../images/22.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <Button style={{ marginRight: "890px", marginBottom: "-29px", backgroundColor: "white", color: "blue", borderRadius: "12px" }}>Learn More</Button>
            </Carousel.Caption>


          </Carousel.Item>
          <Carousel.Item className='caro'>
            <img
              className="ic"
              src="../images/3.png"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>



        <footer className="footer">
          <div className="footer-container">

            <div className="footer-brand">
              <h2>LEARNFINITY</h2>
              <p>
                Step in, level up. Join our mission to make learning accessible and impactful.
              </p>
            </div>

            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Profile</a></li>
              </ul>
            </div>


            <div className="footer-contact">
              <h3>Contact</h3>
              <ul>
                <li>Email: tasneembanu2005@gmail.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Narasaraopet, India</li>
              </ul>
            </div>


            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Learnfinity. All rights reserved.
          </div>
        </footer>


      </div>



    </>
  );
}

export default Base;
