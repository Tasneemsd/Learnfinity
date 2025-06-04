import React from 'react';
import { FaUser, FaEnvelope, FaSignOutAlt, FaHome, FaBook, FaQuestion, FaEdit, FaChrome, FaLaptop } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './../Css/Help.css';

const Help = () => {
  return (
    <>
    <div className="second">
        <img src='../images/lo.png' style={{ borderRadius: "50%", width: "100px", height: "100px", marginLeft: "80px", marginTop: "40px" }} />
        <Link to="/" className=" nav-liis "><FaHome />  Home</Link>
        <Link to="/courses" className="nav-lii"><FaBook />  Courses</Link>
        <Link to="/" className="nav-lii "> <FaQuestion />  Quiz</Link>
        <Link to="/edit" className="nav-lii "><FaEdit />  Editor</Link>
        <Link to="/contact" className="nav-lii"><FaEnvelope />  Contact</Link>
        <Link to="/profile" className="nav-lii "><FaUser />  Profile</Link>
        <Link to="/lab" className="nav-lii "><FaLaptop />  Lab</Link>
        <Link to="/help" className="nav-lii "><FaChrome /> Help</Link>
                  
        <Link to="/login" className="mainli" ><FaSignOutAlt />  Logout</Link>

      </div>
      <div className="form-container06">
      <h2 className='.head2'>Submit Feedback / Report Issue</h2>
      <form>
        <div className="form-group06">
          <label htmlFor="category" className='labell'>Category</label>
          <select id="category" required className='selectt'>
            <option value="">Select an option</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group06">
          <label className='labell'>Name</label>
          <input className='inputt'  placeholder="Enter Name ..." type="text" value="" required  />
        </div>

        <div className="form-group06">
          <label className='labell'>Email</label>
          <input type="email" value=""  placeholder="Enter Email ..." required className='inputt' />
        </div>

        <div className="form-group06">
          <label className='labell'>College</label>
          <input type="text" value=""  placeholder="Enter College name ..."required className='inputt'/>
        </div>

        <div className="form-group06">
          <label className='labell'>Title</label>
          <input type="text"  placeholder="Enter title ..." required className='inputt'/>
        </div>

        <div className="form-group06">
          <label className='labell'>Description</label>
          <textarea placeholder="Any issue or feedback..." required></textarea>
        </div>

        <div className="form-group06">
          <label className='labell'>Attachment</label>
          <input type="file" />
        </div>

        <button type="submit" className='button06'>Submit</button>
      </form>
    </div>
    
    </>
  );
};

export default Help;
