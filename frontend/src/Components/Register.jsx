import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FaUser, FaLock, FaEnvelope, FaBirthdayCake,
  FaPhone, FaUniversity, FaBook, FaImage
} from 'react-icons/fa';
import '../Css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    dob: '',
    phone: '',
    gender: '',
    university: '',
    course: '',
    year: ''
  });

  const [image, setImage] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (e) => {
    setFormData(prev => ({ ...prev, gender: e.target.value }));
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    const usernameRegex = /^\w{3,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.name)) {
      alert("Name must be at least 3 characters long and contain only letters.");
      return false;
    }
    if (!usernameRegex.test(formData.username)) {
      alert("Username must be at least 3 characters long and contain no spaces.");
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      alert("Password must be at least 6 characters long and contain both letters and numbers.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      alert("Enter a valid email address.");
      return false;
    }
    const dobDate = new Date(formData.dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (!formData.dob || age < 13) {
      alert("You must be at least 13 years old.");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }
    if (!formData.gender) {
      alert("Please select your gender.");
      return false;
    }
    if (!formData.university || formData.university.length < 3) {
      alert("University name must be at least 3 characters.");
      return false;
    }
    if (!formData.course) {
      alert("Please select your course.");
      return false;
    }
    if (!formData.year) {
      alert("Please select your year.");
      return false;
    }
    if (!agreeTerms) {
      alert("You must agree to the terms and conditions.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));
      if (image) form.append('profileImage', image);

      const response = await axios.post(
        "https://learnfinity-gcyw.onrender.com/register",  // ✅ your live backend endpoint
        form,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );

      alert("Registration Successful");
      setSuccessMsg("Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className='register-page'>
      <div className='register'>
        {successMsg && <div className="success-message">{successMsg}</div>}
        <h2 className="register-title">Create Account</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <div className="icon-input">
              <FaUser className="icon" />
              <input type='text' name="name" value={formData.name} onChange={handleChange} required placeholder='Full name' className='form-input' />
            </div>
            <div className="icon-input">
              <FaUser className="icon" />
              <input type='text' name="username" value={formData.username} onChange={handleChange} required placeholder='Username' className='form-input' />
            </div>
          </div>

          <div className="form-group">
            <div className="icon-input">
              <FaLock className="icon" />
              <input type='password' name="password" value={formData.password} onChange={handleChange} required placeholder='Password' className='form-input' />
            </div>
            <div className="icon-input">
              <FaEnvelope className="icon" />
              <input type='email' name="email" value={formData.email} onChange={handleChange} required placeholder='Email' className='form-input' />
            </div>
          </div>

          <div className="form-group">
            <div className="icon-input">
              <FaBirthdayCake className="icon" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className='form-input' />
            </div>
            <div className="icon-input">
              <FaPhone className="icon" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" className='form-input' />
            </div>
          </div>

          <div className="gender-input">
            <label>Gender:</label>
            <div className="gender-options">
              <label><input type='radio' name="gender" value="M" onChange={handleGenderChange} required /> Male</label>
              <label><input type='radio' name="gender" value="F" onChange={handleGenderChange} /> Female</label>
            </div>
          </div>

          <div className="form-group">
            <div className="icon-input">
              <FaUniversity className="icon" />
              <input type='text' name="university" value={formData.university} onChange={handleChange} required placeholder='University' className='form-input' />
            </div>
          </div>

          <div className="form-group">
            <div className="icon-input">
              <FaBook className="icon" />
              <select name="course" value={formData.course} onChange={handleChange} className='form-input' required>
                <option value="">Course</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>CIVIL</option>
                <option>AIML</option>
                <option>IT</option>
              </select>
            </div>

            <div className="icon-input">
              <FaBook className="icon" />
              <select name="year" value={formData.year} onChange={handleChange} className='form-input' required>
                <option value="">Year</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
              </select>
            </div>
          </div>

          <div className="file-input">
            <label className="upload-label"><FaImage /> Upload Profile Picture</label>
            <input type="file" onChange={handleImageChange} className="file-upload" />
            {image && <img src={URL.createObjectURL(image)} alt="Preview" className='img-preview' />}
          </div>

          <div className="checkbox-input">
            <label>
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required />
              I agree to the terms and conditions
            </label>
          </div>

          <div className='button-group'>
            <button type="submit" className="btn-submit">Register</button>
            <button type="button" className="btn-submit secondary" onClick={() => navigate('/login')}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
