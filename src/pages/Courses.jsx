import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import certificationdata from './Certification'
// import workshopdata from './Workshops'
import { GrFormView } from "react-icons/gr";
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/Courses.css';  

function Courses() {
  const [certificationdata, setCertificationdata] = useState([]);
  const [workshopdata, setWorkshopdata] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCertifications = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/get-certifications`);
      if (response.data.data) {
        console.log(response.data.data);
        setCertificationdata(response.data.data.certifications);
        setWorkshopdata(response.data.data.workshops);
        // Sort education data by sortOrder in reverse order
        const sortedEducation = response.data.data.education.sort((a, b) => b.sortOrder - a.sortOrder);
        setEducationData(sortedEducation);
        toast.success(response.data.message);
      } else {
        console.error("No certifications found");
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching certifications:", error);
      toast.error('Failed to load certifications');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []);
  

  return (
    <div>
      <ToastContainer position="bottom-center" autoClose={3000} />
      <Header></Header>
      <div className="courses-intro" style={{ backgroundImage: `url('./blob-scene-haikei1.svg')` }}>
        <div className='courses-intro-content'>
          <div>
            <h1>Educational Details</h1>
            <p>Sharing my educational details. Excited to showcase my academic journey and achievements. Feel free to explore my educational background.</p>
            <button className='primary-button' style={{ fontWeight: 'bold' }}> <a style={{color:"black", textDecoration:"none"}} href="#education">Get Started</a> </button>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#C2C6CA"}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,192L26.7,181.3C53.3,171,107,149,160,144C213.3,139,267,149,320,170.7C373.3,192,427,224,480,234.7C533.3,245,587,235,640,224C693.3,213,747,203,800,181.3C853.3,160,907,128,960,128C1013.3,128,1067,160,1120,149.3C1173.3,139,1227,85,1280,80C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>
      <div style={{backgroundColor:"#C2C6CA"}}>

      <div className="certification row" id='education'>
        <h1 className='certification-h1'>Certifications</h1>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <div className="loader"></div>
          </div>
        ) : (
          certificationdata.map(function(project){
            return (<div className="col-md-4 p-5" key={project._id}>
              <div className="project">
                <img src={project.image} alt="" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p className="project-description">{project.description}</p>
                  <p>{project.grade}</p>
                  <button className='primary-button'>
                    <a style={{color:"black", textDecoration:"none"}} href={project.link}> 
                      View<GrFormView></GrFormView> 
                    </a>
                  </button>
                </div>
              </div>
            </div>)
          })
        )}
      </div>

      <div className="certification row" id='education'>
        <h1 className='certification-h1'>Workshops</h1>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <div className="loader"></div>
          </div>
        ) : (
          workshopdata.map(function(project){
            return (<div className="col-md-4 p-5" key={project._id}>
              <div className="project">
                <img src={project.image} alt="" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p className="project-description">{project.description}</p>
                  <p>{project.grade}</p>
                  <button className='primary-button'>
                    <a style={{color:"black", textDecoration:"none"}} href={project.link}> 
                      View<GrFormView></GrFormView> 
                    </a>
                  </button>
                </div>
              </div>
            </div>)
          })
        )}
      </div>

      <div style={{backgroundColor:"#C2C6CA"}}>
        <div className="container-center row flex justify-content-center p-3">
          <h1 className='text-center p-4 text-decoration-underline pb-5'>Educational Journey</h1>
          {isLoading ? (
            <div className="d-flex" style={{ minHeight: '200px' }}>
              <div className="loader"></div>
            </div>
          ) : (
            educationData.map((edu) => (
              <div key={edu._id} className="container-education col-md-5 m-4">
                <h5 className='container-education-h5'>{edu.title}</h5>
                <p className='container-education-p'>{edu.role} <br /> <span>{edu.timeline}</span></p>
                {edu.grade && (
                  <p className='container-education-style' style={{ fontWeight: "bold" }}>Grade: {edu.grade}</p>
                )}
                <p>{edu.description}</p>

                {edu.achievements && (
                  <>
                    <p className='container-education-style' style={{ fontWeight: "bold" }}>
                      {edu.sortOrder === 6 ? "Projects worked on:" : "Achievements:"}
                      </p>
                    {Array.isArray(edu.achievements) ? (
                      edu.achievements.map((achievement, index) => (
                        <p key={index}>- {achievement}</p>
                      ))
                    ) : (
                      <p>- {edu.achievements}</p>
                    )}
                  </>
                )}

                {edu.projectHighlights && edu.projectHighlights.length > 0 && (
                  <>
                    <p className='container-education-style' style={{ fontWeight: "bold" }}>Project Highlights:</p>
                    {edu.projectHighlights.map((project, index) => (
                      <div key={index}>
                        {typeof project === 'string' ? (
                          <p>- {project}</p>
                        ) : (
                          <>
                            <p>🏆 {index + 1}. {project.name} ({project.type}):</p>
                            <p>- {project.description}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </>
                )}

                {edu.researchAndPaper && (
                  <>
                    <p className='container-education-style' style={{ fontWeight: "bold" }}>Research and Presentation Skills:</p>
                    <p>- 🏅 {edu.researchAndPaper}</p>
                  </>
                )}

                {edu.keyHighlights && edu.keyHighlights.length > 0 && (
                  <>
                    <p style={{ fontWeight: "bold", color:"#52D857", textDecoration:"underline" }}>Key Highlights:</p>
                    {edu.keyHighlights.map((highlight, index) => (
                      <p key={index}>- {highlight}</p>
                    ))}
                  </>
                )}

                {edu.skills && (
                  <>
                    <p style={{ fontWeight: "bold", color:"#52D857", textDecoration:"underline" }}>
                      {typeof edu.skills === 'object' && !Array.isArray(edu.skills) ? 'Top Skills learned:' : 'Skills:'}
                    </p>
                    {typeof edu.skills === 'object' && !Array.isArray(edu.skills) ? (
                      <>
                        <div>
                          {edu.skills.technical.map((skill, index) => (
                            <p key={index} className='container-education-skills'>{skill}</p>
                          ))}
                        </div>
                        <p style={{ fontWeight: "bold", color:"#52D857", textDecoration:"underline", paddingTop:"20px" }}>Others:</p>
                        <div>
                          {edu.skills.others.map((skill, index) => (
                            <p key={index} className='container-education-skills'>{skill}</p>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div>
                        {edu.skills.map((skill, index) => (
                          <p key={index} className='container-education-skills'>{skill}</p>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      </div>
      <div style={{backgroundColor:"#C2C6CA"}}>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Courses