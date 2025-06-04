import React, { useState } from 'react';
import './../Css/Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4001/login', credentials, {
        withCredentials: true,
      });

      console.log('Login response:', res.data);

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // Navigate to Home with state
      navigate('/home', {
        state: {
          name: res.data.name,
          image: res.data.profileImage,
        },
      });
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <div className="secondnavbar">
        <Link to="/" className="navbar-link-style2 mx-2">Home</Link>
        <Link to="/error" className="navbar-link-style2 mx-2">Courses</Link>
        <Link to="/contact" className="navbar-link-style2 mx-2">Contact</Link>
        <Link to="/about" className="navbar-link-style2 mx-2">About Us</Link>
      </div>

      <div className='whole'>
        <div className='child1'>
          <img
            src='https://financialit.net/sites/default/files/4.17.2019_wordpress.jpg'
            width="450px"
            height="500px"
            alt="Login Visual"
          />
        </div>

        <div className='login'>
          <form onSubmit={handleSubmit}>
            <div className="icon-input">
              <FaUser className="icon" />
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                className='inp'
                placeholder='Your username ...'
                autoComplete="username"
              />
            </div>

            <div className="icon-input">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className='inp'
                placeholder='Your Password ...'
                autoComplete="current-password"
              />
            </div>

            <br />
            <button type="submit" className='but' style={{ marginLeft: "100px" }}>
              Login
            </button>
            <br /><br />
            <label>Need to Register?</label>
            <button
              type="button"
              className='but'
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
