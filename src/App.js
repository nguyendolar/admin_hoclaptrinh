// src/App.js
import React,{useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Authen from './pages/authen';
import News from './pages/news';
import Course from './pages/course';
import Customer from './pages/customer';
import Video from './pages/video';
import CourseType from './pages/coursetype';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/authen"
          element={
            <Authen setIsAuthenticated={setIsAuthenticated} />
          } />
        <Route path="/news" element={<News />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/course" element={<Course />} />
        <Route path="/video" element={<Video />} />
        <Route path="/coursetype" element={<CourseType />} />
      </Routes>
    </div>
  );
};

export default App;
