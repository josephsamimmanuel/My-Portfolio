
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/projects-courses.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:500
});

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='/projects' exact Component={Projects}></Route>
      <Route path='/courses' exact Component={Courses} ></Route>
      <Route path='/contact' exact Component={Contact}></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
