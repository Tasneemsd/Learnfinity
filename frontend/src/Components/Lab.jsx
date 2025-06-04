import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './../Css/Lab.css';
import { FaUser, FaEnvelope, FaSignOutAlt, FaHome, FaBook, FaQuestion, FaEdit, FaChrome, FaLaptop } from 'react-icons/fa';


const labs = [
    {
        title: 'Java',
        description: 'Complete Topic wise Labs',
    },
    {
        title: 'Data Structures',
        description: 'Complete Topic wise Labs',
    },
    {
        title: 'Python',
        description: 'Complete Topic wise Basic Labs',
    },
    {
        title: 'Programming For Problem Solving (C Programming)',
        description: 'Complete Topic wise Basic Labs',
    },
];

export default function Lab() {
    return (
        <>
            <aside className="second">
                <img src='../images/lo.png' style={{ borderRadius: "50%", width: "100px", height: "100px", marginLeft: "80px", marginTop: "40px" }} />
                <Link to="/" className=" nav-liis "><FaHome />  Home</Link>
                <Link to="/courses" className="nav-lii"><FaBook />  Courses</Link>
                <Link to="/quiz" className="nav-lii "> <FaQuestion />  Quiz</Link>
                <Link to="/edit" className="nav-lii "><FaEdit />  Editor</Link>
                <Link to="/contact" className="nav-lii"><FaEnvelope />  Contact</Link>
                <Link to="/profile" className="nav-lii "><FaUser />  Profile</Link>
                <Link to="/lab" className="nav-lii "><FaLaptop />  Lab</Link>
                <Link to="/help" className="nav-lii "><FaChrome /> Help</Link>

                <Link to="/" className="mainli "><FaSignOutAlt />  Logout</Link>

            </aside>

            <div className="main-content">
                <h2>Lab Groups</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Go to Labs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labs.map((lab, index) => (
                            <tr key={index}>
                                <td>{lab.title}</td>
                                <td>{lab.description}</td>
                                <td>
                                    <button className="open-btn">Open</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>


    );
}
