import React, { useState, useEffect } from 'react';
import {
  FaHome, FaBook, FaQuestion, FaEdit, FaEnvelope, FaUser, FaSignOutAlt,
} from 'react-icons/fa';
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Link } from 'react-router-dom';
import './../Css/Profile.css';

const Profile = ({ user: userData }) => {
  const pieData = [
    { name: 'Completed', value: 400 },
    { name: 'In Progress', value: 300 },
    { name: 'Not Started', value: 300 },
  ];

  const barData = [
    { name: 'HTML', score: 85 },
    { name: 'CSS', score: 90 },
    { name: 'JavaScript', score: 70 },
    { name: 'React', score: 60 },
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  const [user, setUser] = useState(userData || null);

  useEffect(() => {
    if (!userData) {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        try {
          setUser(JSON.parse(storedUser));
          console.log("Loaded user from localStorage:", storedUser);
        } catch (error) {
          console.error("Failed to parse user from localStorage", error);
        }
      } else {
        console.warn("No valid user found in localStorage");
      }
    }
  }, [userData]);

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <>
      <div className="second-2">
        <img
          src="../images/lo.png"
          style={{ borderRadius: "50%", width: "100px", height: "100px", marginLeft: "80px", marginTop: "40px" }}
          alt="Logo"
        />
        <Link to="/" className="navliis"><FaHome /> Home</Link>
        <Link to="/courses" className="navlii"><FaBook /> Courses</Link>
        <Link to="/quiz" className="navlii"><FaQuestion /> Quiz</Link>
        <Link to="/edit" className="navlii"><FaEdit /> Editor</Link>
        <Link to="/contact" className="navlii"><FaEnvelope /> Contact</Link>
        <Link to="/profile" className="navlii"><FaUser /> Profile</Link>
        <Link to="/logout" className="main-li"><FaSignOutAlt /> Logout</Link>
      </div>

      <div className="p-4 grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-4 shadow">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="profile-details">
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>{user.name}'s Profile</h1>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <img
            src={`http://localhost:4001/uploads/${user.profileImage}`}
            alt="Profile"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
