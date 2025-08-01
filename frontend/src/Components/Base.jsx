import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Base.css';

function Base() {
  const navigate = useNavigate();

  return (
    <div className="hero-banner">
      
      <nav className="hero-nav">
        <div className="nav-logo">Learnfinity</div>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="nav-btn">Log In</Link>
          <Link to="/register" className="nav-btn-outline">Sign Up</Link>
        </div>
      </nav>

      <div className="hero-content">
        <h1>Learnfinity</h1>
        <p>
          Learn anytime, anywhere. Interactive courses designed to help you succeed.
          Structured content, practical examples, and growth-focused learning.
        </p>
        <button onClick={() => navigate('/courses')} className="learn-more-btn">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Base;
