import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../Css/Error.css';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1>🚫 Access Denied</h1>
      <p>You must be logged in to access this page.</p>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  );
};

export default Error;
