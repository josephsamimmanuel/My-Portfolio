import React, { useEffect } from 'react'
import Header from '../components/Header'
import { FaLaptopCode } from "react-icons/fa";
import projectsdata from './projectsdata';
import Footer from '../components/Footer';
import reactdata from './Reactdata';
import nodedata from './nodedata';
import frontenddata from './Frontenddata';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../utils/constants';
import toast from 'react-hot-toast';
import '../stylesheets/Courses.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/get-projects`);
      setProjects(response.data.data);
      toast.success('Projects fetched successfully');
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Error fetching projects');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container projects-intro">
        <div className="row flex-with-center">
          <div className="col-md-6 n-box2 px-3 py-5">
            <h1 className='font-bold'>Projects</h1>
            <p className='font-bold'>Good Ideas are not adopted automatically. They must be driven into practice with courageous patience</p>
            <button className='primary-button'> <a style={{ color: "white", textDecoration: "none" }} href="#projects">Get Started</a> </button>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0000FF" d="M31.9,-55C41.1,-49.8,48.4,-41,57.9,-31.2C67.4,-21.4,79.2,-10.7,79.2,0C79.1,10.7,67.3,21.4,59.4,33.8C51.4,46.3,47.3,60.6,38.1,70.8C28.8,81,14.4,87.1,1,85.4C-12.5,83.8,-25,74.4,-39.2,67C-53.4,59.7,-69.3,54.4,-74.7,43.6C-80.2,32.8,-75.2,16.4,-70.9,2.5C-66.6,-11.5,-63.1,-22.9,-57.8,-34.1C-52.6,-45.3,-45.7,-56.2,-35.8,-61C-25.8,-65.8,-12.9,-64.6,-0.8,-63.2C11.3,-61.8,22.6,-60.2,31.9,-55Z" transform="translate(100 100)" />
            </svg>
            <FaLaptopCode
              color='white'
              size={180}
              className='position-absolute top-50 start-50 translate-middle'></FaLaptopCode>
          </div>
        </div>
      </div>

      <div className="container projects-list pb-1" id='projects'>
        <h2 className='font-bold'>Take a Look of my Project</h2>
        <hr />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container-center row flex justify-content-center p-3" >
          <h1 className='text-center p-4 text-decoration-underline pb-5'>Projects I have worked on...</h1>
          {projects.projects && projects.projects.map((project) => (
            <div key={project._id} className="container-education col-md-5 m-4">
                <h5 className='container-education-h5'>{project.title}</h5>
                <p className='container-education-p'>{project.timeline}</p>
                <p><span style={{ fontWeight: "bold", color: "#52D857", textDecoration: "underline" }}>Role:</span> {project.role}</p>
                <p><span style={{ fontWeight: "bold", color: "#52D857", textDecoration: "underline" }}>Description:</span> {project.description}</p>
                <p><span style={{ fontWeight: "bold", color: "#52D857", textDecoration: "underline" }}>Project Highlights:</span> {project.projectHighlights.join(", ")}</p>

                <p style={{ fontWeight: "bold", color: "#52D857", textDecoration: "underline" }}>Top Skills learned:</p>
                <div>
                  <div>
                    {project.technologies.map((technology, index) => (
                      <p className='container-education-skills' key={index}>{technology}</p>
                    ))}
                  </div>
                </div>

                <p style={{ fontWeight: "bold", color: "#52D857", textDecoration: "underline", paddingTop: "20px" }}>Others:</p>
                <div>
                  {project.tools.map((tool, index) => (
                    <p className='container-education-skills' key={index}>{tool}</p>
                  ))}
                </div>

                <p style={{ fontWeight: "bold", color: "#52D857", textDecoration: "underline", paddingTop: "20px" }}>AI:</p>
                <div>
                  {project.aiUsed.map((ai, index) => (
                    <p className='container-education-skills' key={index}>{ai}</p>
                  ))}
                </div>
            </div>
          ))}
        </div>
      )}

      <div className="container projects-list pb-5" id='projects'>
        <hr />
        <h4 className='font-bold'>Projects on MERN stack</h4>
        <hr />

        <div className="row">
          {
            projectsdata.map(function (project) {
              return (<div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h1>{project.title}</h1>
                    <hr />
                    <p>{project.description}</p>
                    {/* <button className="primary-button projects-btn"><a href={project.link} className='white'>Get Started</a></button> */}
                    <button className='primary-button'><a style={{ color: "black", textDecoration: "none" }} href={project.link}>View Me</a></button>
                  </div>
                </div>
              </div>)
            })}
        </div>

      </div>

      <div className="container projects-list pb-5" id='projects'>

        <h4 className='font-bold'>Projects on NodeJs</h4>
        <hr />

        <div className="row">
          {
            nodedata.map(function (project) {
              return (<div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <hr />
                    <p>{project.description}</p>
                    {/* <button className="primary-button projects-btn"><a href={project.link} className='white'>Get Started</a></button> */}
                    <button className='primary-button'><a style={{ color: "black", textDecoration: "none" }} href={project.link}>View Me</a></button>
                  </div>
                </div>
              </div>)
            })}
        </div>

      </div>

      <div className="container projects-list pb-5" id='projects'>

        <h4 className='font-bold'>Projects on ReactJs</h4>
        <hr />

        <div className="row">
          {
            reactdata.map(function (project) {
              return (<div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h1>{project.title}</h1>
                    <hr />
                    <p>{project.description}</p>
                    {/* <button className="primary-button projects-btn"><a href={project.link} className='white'>Get Started</a></button> */}
                    <button className='primary-button'><a style={{ color: "black", textDecoration: "none" }} href={project.link}>View Me</a></button>
                  </div>
                </div>
              </div>)
            })}
        </div>

      </div>

      <div className="container projects-list pb-5" id='projects'>

        <h4 className='font-bold'>Projects on FrontEnd</h4>
        <hr />

        <div className="row">
          {
            frontenddata.map(function (project) {
              return (<div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h1>{project.title}</h1>
                    <hr />
                    <p>{project.description}</p>
                    {/* <button className="primary-button projects-btn"><a href={project.link} className='white'>Get Started</a></button> */}
                    <button className='primary-button'><a style={{ color: "black", textDecoration: "none" }} href={project.link}>View Me</a></button>
                  </div>
                </div>
              </div>)
            })}
        </div>

      </div>

      <Footer></Footer>
    </div>
  )
}

export default Projects