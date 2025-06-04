// src/Components/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // clear auth data
    navigate('/login');   // redirect to login
  }, [navigate]);

  return null;
};

export default Logout;
