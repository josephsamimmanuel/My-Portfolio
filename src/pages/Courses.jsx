import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import certificationdata from './Certification'
import workshopdata from './Workshops'
import { GrFormView } from "react-icons/gr";

const skills=["HTML", "HTML5", "CSS3", "Bootstrap", "TailwindCSS", "CSSFlexbox", "React.js", "Node.js", "Express.js", "version control", "GitHub", "DOM", "MongoDB", "MySQL", "API", "frontend developer", "backend developer" , "Error Handling and Debugging", "Canva", "Microsoft Excel"]
const oldskills=["Simulink","Matlab","Mathworks","Solar PV"]
const others=["VS Code","Github","Vercel","Netlify","Googling","Basics of ChatGPT3.5"]
function Courses() {
  return (
    <div>
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
          {
            certificationdata.map(function(project){
              return (<div className="col-md-4 p-5">
              <div className="position-relative project">
                <img src={project.image} alt="" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p>{project.description}</p>
                  <p>{project.grade}</p>
                  {/* <button className="primary-button projects-btn"><a href={project.link} className='white'>Get Started</a></button> */}
                  <button className='primary-button'><a style={{color:"black", textDecoration:"none"}} href={project.link}> View<GrFormView></GrFormView> </a></button>
                </div>
                </div>
                </div>)
            })}
        </div>

        <div className="certification row" id='education'>
        <h1 className='certification-h1'>Workshops</h1>
          {
            workshopdata.map(function(project){
              return (<div className="col-md-4 p-5">
              <div className="position-relative project">
                <img src={project.image} alt="" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p>{project.description}</p>
                  <p>{project.grade}</p>
                  {/* <button className="primary-button projects-btn"><a href={project.link} className='white'>Get Started</a></button> */}
                  <button className='primary-button'><a style={{color:"black", textDecoration:"none"}} href={project.link}> View<GrFormView></GrFormView> </a></button>
                </div>
                </div>
                </div>)
            })}
        </div>

      <div className="container-center row flex justify-content-center p-3" >
        <h1 className='text-center p-4 text-decoration-underline pb-5'>Educational Journey</h1>
        <div className="container-education col-md-6">
          <h5 className='container-education-h5'>Full Stack Web Developer-Freelance</h5>
          <p className='container-education-p'>Sep 2023 - Present</p>
          <p>Passionate Full Stack Web Developer | HTML, CSS, JavaScript | React.js | Node.js | MongoDB</p>
          <p>With a diverse background encompassing Electrical Engineering (BE EEE, ME), two years as an Assistant Professor, and over three years as an Entrepreneur in Solar-Based Business, I bring a unique blend of skills and experiences to the dynamic IT industry. Transitioning from Non-IT to IT, I am a fresher in Full Stack Development with a robust foundation in the MERN stack, particularly passionate about React and Node.js. During my journey, I've completed noteworthy projects including the Bulk Mail App, Actodo, Weather App API, and Nostra, showcasing my commitment to innovation and problem-solving. Eager to contribute my diverse skill set and adaptability to the ever-evolving landscape of web development, I am driven by a passion for learning and growth. Let's connect and explore opportunities to collaborate and create impactful solutions together!</p>
            <p style={{ fontWeight: "bold", color:"#52D857", textDecoration:"underline" }}>Top Skills learned:</p>
        <div>
          {
            skills.map(function(items){
              return(<p className='container-education-skills'>{items}</p>)
            })
          }
        </div>
        <p style={{ fontWeight: "bold", color:"#52D857", textDecoration:"underline", paddingTop:"20px" }}>Others:</p>
        <div>
          {
            others.map(function(items){
              return(<p className='container-education-skills'>{items}</p>)
            })
          }
        </div>
        </div>
      </div>

      <div className="container-center row flex justify-content-center mt-5 p-3">
        <div className="container-education col-md-6">
          <h5 className='container-education-h5'>Jerusalem College of Engineering – India</h5>
          <p className='container-education-p'>Master of Engineering - MEng, Power Electronics and Drives <br /> <span> Aug 2014 - Apr 2016</span></p>
          <p className='container-education-style' style={{ fontWeight: "bold" }}>Grade: 8.4</p>
          <p>Master of Engineering in Power Electronics and Drives | Award-Winning Topper | Solar Enthusiast</p>
          <p>I  am a dedicated professional with a passion for sustainable energy solutions. With a track record of excellence, I clinched the 2nd prize for academic excellence in my class. My commitment to advancing knowledge is evident through my participation in three conferences and the publication of three international journals. A specialist in solar-based technologies, my expertise extends to projects such as Solar Maximum Power Point Tracking for efficient PV panel energy extraction and Harmonics Minimization. Eager to contribute to the green energy revolution and explore opportunities in the dynamic field of Power Electronics.</p>
          <p> <span className='container-education-style' style={{ fontWeight: "bold" }}>Key Highlights: </span>
            - Awarded 2nd prize for academic excellence.
            - Published in three international journals, showcasing research prowess.
            - Expertise in Solar Maximum Power Point Tracking and Harmonics Minimization.
            - Passionate about sustainable energy solutions.</p>
          <p style={{fontWeight:"bold", color:"#52D857"}}>Skills:</p>
          {
            oldskills.map(function(items){
              return(<p className='container-education-skills'>{items}</p>)
            })
          }
        </div>
      </div>

      <div className="container-center row flex justify-content-center mt-5 p-3">
        <div className="container-education col-md-6">
          <h5 className='container-education-h5'>Francis Xavier Engineering College</h5>
          <p className='container-education-p'>Bachelor of Engineering - BE, Electrical and Electronics Engineering <br /> <span> Aug 2010 - Apr 2014</span></p>
          <p className='container-education-style' style={{ fontWeight: "bold" }}>Grade: 7.69</p>
          <p>Results-Driven Engineer | BE Graduate (2014) | 7.69 CGPA</p>
          <p>
            <span className='container-education-style' style={{ fontWeight: "bold" }}>Academic Achievements:</span>
            - 🏆 Consistent academic excellence, highlighted by a strong CGPA. <br />

            <span className='container-education-style' style={{ fontWeight: "bold" }}>Project Highlights: </span>
            🏆 1. Multiple Angular Force Generator (Mini Project - 3rd Year):
            - Developed an innovative Multiple Angular Force Generator as a part of my third-year project, showcasing problem-solving skills and a knack for engineering challenges.
            <br />
            2. Transmission of Data through Fiber Optic Cable (Final Year Project):
            - Led a team in the successful completion of a Final Year Project focused on the Transmission of Data through Fiber Optic Cable. This project reflects my dedication to staying at the forefront of technology trends and implementing solutions with real-world applications. <br />

            <span className='container-education-style' style={{ fontWeight: "bold" }}>Research and Presentation Skills:</span>
            - 🏅 Three-time winner of paper presentation competitions, demonstrating effective communication and research prowess.</p>
        </div>
      </div>

      <div className="container-center row flex justify-content-center mt-5 p-3">
        <div className="container-education col-md-6">
          <h5 className='container-education-h5'>Rose Mary Matriculation Higher Secondary School, Palayamkottai</h5>
          <p className='container-education-p'>Apr 2009 - Apr 2010</p>
          <p className='container-education-style' style={{ fontWeight: "bold" }}>•	Grade: 1082/1200</p>
          <p>🚀 Results-Driven Professional | Higher Secondary (2010) | Aspiring Technologist</p>
          <p>With a solid academic foundation, I completed my Higher Secondary in 2010, securing an impressive 1082 marks out of 1200. Excelling in subjects like Mathematics and Physics, I demonstrated strong problem-solving skills early on. Eager to dive into the world of technology, I learned basic programming languages such as C and C++, laying the groundwork for my journey as an aspiring technologist. Open to new opportunities, I am ready to apply my analytical mindset and programming proficiency to contribute meaningfully in the ever-evolving tech landscape.
            <br />
            <span className='container-education-style' style={{ fontWeight: "bold" }}> 🌐 Key Highlights:</span>
            - Higher Secondary Graduate (2010) with 1082/1200 marks.
            - Strong foundation in Mathematics and Physics.
            - Proficient in C and C++ programming languages.
            - Eager to embark on a dynamic career in technology.</p>
        </div>
      </div>

      <div className="container-center row flex justify-content-center mt-5 p-3 pb-5">
        <div className="container-education col-md-6">
          <h5 className='container-education-h5'>Rose Mary Matriculation Higher Secondary School, Palayamkottai</h5>
          <p className='container-education-p'>Apr 2007 - Apr 2008</p>
          <p className='container-education-style' style={{ fontWeight: "bold" }}>•	Grade: 443/500</p>
          <p>🚀 Mathematics and Science Enthusiast | Problem Solver | Aspiring Programmer</p>
          <p>Passionate about mathematics and science since matriculation, I scored an impressive 443/500, showcasing my strong problem-solving skills and logical thinking. Proficient in basic programming languages such as C and C++, I am an aspiring programmer eager to contribute to innovative solutions. </p>
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