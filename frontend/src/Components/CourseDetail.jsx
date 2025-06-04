import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './../Css/CourseDetail.css';
import {
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
  FaHome,
  FaBook,
  FaQuestion,
  FaEdit,
  FaChrome,
  FaLaptop
} from 'react-icons/fa';

const CourseDetail = () => {
  const { state: course } = useLocation();
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);

 
  useEffect(() => {
    if (course?.title === 'HTML') {
      navigate('/courses/html-full');
    }
  }, [course, navigate]);

  return (
    <>
      <div className="second">
        <img
          src="../images/lo.png"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            marginLeft: '80px',
            marginTop: '40px'
          }}
        />
        <Link to="/" className="nav-liis">
          <FaHome /> Home
        </Link>
        <Link to="/courses" className="nav-lii">
          <FaBook /> Courses
        </Link>
        <Link to="/" className="nav-lii">
          <FaQuestion /> Quiz
        </Link>
        <Link to="/edit" className="nav-lii">
          <FaEdit /> Editor
        </Link>
        <Link to="/contact" className="nav-lii">
          <FaEnvelope /> Contact
        </Link>
        <Link to="/profile" className="nav-lii">
          <FaUser /> Profile
        </Link>
        <Link to="/lab" className="nav-lii">
          <FaLaptop /> Lab
        </Link>
        <Link to="/help" className="nav-lii">
          <FaChrome /> Help
        </Link>
        <Link to="/login" className="mainli">
          <FaSignOutAlt /> Logout
        </Link>
      </div>

      <div className="course-detail-container">
        <h1>{course.title}</h1>
        <img src={course.image} alt={course.title} width="300" />

        <Accordion className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{course.header}</Accordion.Header>
            <Accordion.Body>
              <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
                {course.lessons &&
                  course.lessons.map((lesson, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedLesson(lesson)}
                      style={{ cursor: 'pointer' }}
                    >
                      📘 {lesson.name}
                    </li>
                  ))}
              </ul>

              {selectedLesson && (
                <div
                  style={{
                    marginTop: '20px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '10px'
                  }}
                >
                  <h5>{selectedLesson.name}</h5>
                  <p>{selectedLesson.content}</p>
                </div>
              )}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>More Content Coming Soon</Accordion.Header>
            <Accordion.Body>Stay tuned for updates.</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Button
          variant="primary"
          onClick={() => navigate('/interview', { state: course })}
          className="mt-3"
        >
          Explore Interview Qs
        </Button>
      </div>
    </>
  );
};

export default CourseDetail;
