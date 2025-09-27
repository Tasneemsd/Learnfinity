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
        } catch (error) {
          console.error("Failed to parse user from localStorage", error);
        }
      }
    }
  }, [userData]);

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="profile-container" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar" style={{
        width: '220px',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img
          src="../images/lo.png"
          alt="Logo"
          style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "30px" }}
        />
        <Link to="/" className="navliis"><FaHome /> Home</Link>
        <Link to="/courses" className="navlii"><FaBook /> Courses</Link>
        <Link to="/quiz" className="navlii"><FaQuestion /> Quiz</Link>
        <Link to="/edit" className="navlii"><FaEdit /> Editor</Link>
        <Link to="/contact" className="navlii"><FaEnvelope /> Contact</Link>
        <Link to="/profile" className="navlii"><FaUser /> Profile</Link>
        <Link to="/logout" className="main-li" style={{ marginTop: 'auto' }}><FaSignOutAlt /> Logout</Link>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        {/* Charts */}
        <div className="charts-grid" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
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

        {/* Profile Details */}
        <div className="profile-details" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h1>{user.name}'s Profile</h1>
          <img
            src={`https://learnfinity-gcwy.onrender.com/uploads/${user.profileImage}`}
            alt="Profile"
            style={{ borderRadius: '50%', width: '150px', height: '150px', marginTop: '20px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
