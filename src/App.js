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
import { Toaster } from 'react-hot-toast';
import { useTheme } from './utils/themeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

AOS.init({
  duration:500
});

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#333' : '#fff',
            color: theme === 'dark' ? '#fff' : '#333',
          },
        }}
      />
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === 'dark' ? <FiSun  /> : <FiMoon />}
      </button>
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
