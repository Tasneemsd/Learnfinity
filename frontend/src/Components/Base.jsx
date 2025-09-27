import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import '../Css/Base.css';

function Base() {
  const navigate = useNavigate();

  return (
    <div className="hero-banner">
      <nav className="hero-nav">
        <div className="nav-logo">Learnfinity</div>
        <div className="nav-items">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/login" className="btn-primary">Log In</Link>
          <Link to="/register" className="btn-outline">Sign Up</Link>
        </div>
      </nav>

      <div className="hero-content slide-in">
        <h1>
          Welcome to <span className="highlight">
            <Typewriter
              words={['Learnfinity']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p>
          Learn anytime, anywhere. Interactive courses designed to help you succeed.
          Structured content, practical examples, and growth-focused learning.
        </p>
        <button onClick={() => navigate('/courses')} className="btn-primary">
          Explore Courses
        </button>
      </div>
    </div>
  );
}

export default Base;
