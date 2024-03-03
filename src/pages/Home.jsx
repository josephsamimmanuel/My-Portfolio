import React from 'react'
import Header from '../components/Header'
import Courosel from '../components/Courosel'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Header></Header>

      <div className="introduction flex-with-center" style={{ backgroundImage: `url('./blob-scene-haikei.svg')` }}>
        <div className='introduction-container'>
          <div>
            <h1 data-aos='fade-right'>JOSEPH SAM IMMANUEL</h1>
          </div>
          <div className='intro-content d-flex gap-2'>
            <p >MERN Stack Developer, <br />Freelancer</p>
            <button className='primary-button font-bold'> <a style={{color:"black", textDecoration:"none"}} href="#courosel">Get Started</a> </button>
          </div>

          <div className='introduction-container-about'>
            <i style={{ color: `#52D857` }} class="fa-solid fa-quote-left large fa-3x"></i>
            <p>MERN Stack Developer with expertise in HTML5, CSS3, React.js, and Node.js, showcasing a blend of frontend and backend skills. Proficient in API integration, MySQL, and MongoDB for robust data management. Adept at version control using GitHub. Let's Connect !</p>
          </div>
        </div>
      </div>
      <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#52D857" fill-opacity="1" d="M0,224L80,197.3C160,171,320,117,480,128C640,139,800,213,960,245.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}

        <Courosel></Courosel>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,256L40,224C80,192,160,128,240,101.3C320,75,400,85,480,106.7C560,128,640,160,720,154.7C800,149,880,107,960,128C1040,149,1120,235,1200,240C1280,245,1360,171,1400,133.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>
      <div className="container">

        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              
              <p>React.js isn't just a library; it's my love language for building beautiful, engaging, and responsive web experiences.</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="./jsbuff.svg" alt="Javascript_SVG" height="300" width="300" className='w-100' />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end py-2">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <p>React.js simplifies UI development with its declarative syntax, component-based structure, and efficient rendering, fostering a streamlined and enjoyable development experience. </p><span>Main Use Cases: Web Development</span> 
            </div>
          </div>
        </div>
      </div>

      <div className="devstack container mt-5 mb-5 py-5 px-5">
        <div className='text-center'>
          <h3 className='font-bold text-center'>My Development Stack</h3>
          <hr />
          <img src="./developer.svg" height='200' width='200' alt="" />
        </div>
        <div className="row">

          <div className="col-md-4">
            <div className=' text-left'>
              <h3 className='font-bold'>Front-End</h3>
              <hr />
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React.Js</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className=' text-center'>
              <h3 className='font-bold '>UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>BootStrap</p>

            </div>
          </div>

          <div className="col-md-4">
            <div className=' text-end'>
              <h3 className='font-bold'>Back-End</h3>
              <hr />
              <p>Node.Js</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Express.Js</p>
            </div>
          </div>
        </div>

      </div>
      <div className="container-visionary">
        <div className='container-visionary-title'>
      <h4>Vision</h4>
      <p>Launching my career: Gaining a Fresh Perspective on Full Stack Development</p>
      </div>
      <div className="container-visionary-one row justify-content-center py-4 px-3">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <h6 className='container-visionary-h6'>About Me</h6>
              <i style={{ color: `black` }} class="fa-solid fa-quote-left "></i>
              <p className='container-visionary-p'>As a fresher in web development, I am passionate about crafting web experiences that stand out, ensuring every detail exudes style and magic. I enjoy taking on complex challenges, and this excitement propels my journey toward becoming a full-stack wizard. The prospect of working with a dynamic team and learning from experienced professionals is incredibly thrilling. I am eager to enhance my skills in this ever-evolving field.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center py-4 px-3">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <h6 className='container-visionary-h6'>Reason to Hire Me</h6>
              <i style={{ color: `black` }} class="fa-solid fa-quote-left "></i>
              <p className='container-visionary-p'>I'm a budding Full Stack Developer with a passion for crafting amazing user experiences. I dive into each project with new perspectives, a ton of ambition, and a touch of unconventional thinking. My goal is to work magic in the digital realm through energetic and innovative efforts. Let's connect and collaborate to breathe life into unique, ambitious, and engaging experiences!</p>
            </div>
          </div>
        </div>
        
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,256L40,224C80,192,160,128,240,101.3C320,75,400,85,480,106.7C560,128,640,160,720,154.7C800,149,880,107,960,128C1040,149,1120,235,1200,240C1280,245,1360,171,1400,133.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <div className='text py-5'>
        <h3 className='font-bold text-center'>Who is Joseph?</h3>
        <div className="who-am-i flex-with-center" style={{ backgroundImage: `url('blob-haikei.svg')` }}>
          <div>
            <h3>DevEnthusiast</h3>
            <hr />
            <p><pre>{JSON.stringify({
              L1: "while energy_level > 0:",
              L2: "write_code()",
              L3: "debug_errors()",
              L4: "repeat()",
            }, null, 2)}</pre></p>
          </div>

        </div>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default Home