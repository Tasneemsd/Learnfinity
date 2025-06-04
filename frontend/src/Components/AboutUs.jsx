import React from 'react';
import '../Css/AboutUs.css'
import { FaChalkboardTeacher, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About This Project</h1>
        <p>
          Welcome to <span className="brand">Learnfinity</span> – a personalized E-Learning platform crafted  code, and caffeine.
        </p>
      </div>

      <div className="features">
        <div className="feature-box">
          <FaChalkboardTeacher className="feature-icon" />
          <h3>Interactive Learning</h3>
          <p>Dynamic quizzes, Learning made easier</p>
        </div>
        <div className="feature-box">
          <FaLaptopCode className="feature-icon" />
          <h3>Fullstack Powered</h3>
          <p>React, Firebase, Python, Node.js — everything built from scratch.</p>
        </div>
        <div className="feature-box">
          <FaUserGraduate className="feature-icon" />
          <h3>Student Focused</h3>
          <p>Made by a student, for students. Adapted to every learning style.</p>
        </div>
      </div>

      <div className="creator-section">
        <h2>Meet the Creator</h2>
        <div className="creator-card">
          <img src="./images/tassoff.jpg" alt="Creator" className="creator-img" />
          <h3>Tassu</h3>
          <p>
            👩‍💻 B.Tech 3rd Year | Passionate Developer & Learner <br />
            💡 Building smart learning tools , React & Python <br />
            🌱 Always learning. Always building.
          </p>
        </div>
      </div>

      <div className="about-footer">
        This platform is a solo passion project – crafted with ❤️ for curious learners everywhere.
      </div>
    </div>
  );
};

export default AboutUs;
