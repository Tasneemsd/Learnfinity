import React, { useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Base from './Components/Base'
import Register from './Components/Register'
import CourseDetail from './Components/CourseDetail'
import Courses from './Components/Courses'
import Lab from './Components/Lab'
import Help from './Components/Help'
import { Route, Routes } from 'react-router-dom';
import HtmlC from './Courses/HtmlC'
import Contact from './Components/Contact'
import Profile from './Components/Profile'
import Quiz from './Components/Quiz'
import Editor from './Components/Editor'
import HtmlCourse from './Courses/HtmlCourse'
import Logout from './Components/Logout'
import Error from './Components/Error'
import AboutUs from './Components/AboutUs'






const App = () => {

  const [userData, setUserData] = useState(null);


  const handleRegister = (data) => {
    setUserData(data);
  };
  return (


    <>



      <Routes>

        <Route path='/' element={<Base />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/error' element={<Error />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/register' element={<Register onRegister={handleRegister} />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/interview" element={<HtmlC />} />
        <Route path="/profile" element={<Profile user={userData} />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/edit" element={<Editor />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/courses/html-course" element={<HtmlCourse />} />

      </Routes>






    </>
  )
}

export default App