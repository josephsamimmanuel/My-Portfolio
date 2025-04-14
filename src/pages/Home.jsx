import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Courosel from '../components/Courosel'
import Footer from '../components/Footer'
import '../components/TypeWriter.css'
import '../stylesheets/home.css'
function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [techIndex, setTechIndex] = useState(0);
  const technologies = useMemo(() => ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'], []);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1000;

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      const currentTech = technologies[techIndex];

      if (!isDeleting) {
        // Typing
        if (displayText !== currentTech) {
          setDisplayText(currentTech.substring(0, displayText.length + 1));
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, pauseTime);
        }
      } else {
        // Deleting
        if (displayText) {
          setDisplayText(currentTech.substring(0, displayText.length - 1));
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
          timer = setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, techIndex, technologies]);

  return (
    <div>
      <Header></Header>

      <div className="introduction flex-with-center" style={{ backgroundImage: `url('./blob-scene-haikei.svg')` }}>
        <div className='introduction-container'>
          <div className='introduction-container-profile'>
            <img src="./Joseph.png" alt="profile" />
          </div>

          <div className='introduction-container-title'>
            <div>
              <h1 data-aos='fade-right'>JOSEPH SAM IMMANUEL</h1>
            </div>
            <div className='intro-content'>
              <p>Full Stack Developer | <span className="typewriter">{displayText}</span></p>
              <button className='primary-button font-bold'> <a style={{ color: "black", textDecoration: "none" }} href="#courosel">Get Started</a> </button>
            </div>
          </div>
          <div className='introduction-container-about'>
            <p>MERN Stack Developer skilled in JavaScript, React.js, and Node.js, blending frontend and backend expertise. Proficient in RESTful API integration, MySQL, and MongoDB for efficient data handling. Experienced with GitHub for version control. Let's connect!</p>
          </div>
        </div>
      </div>
      <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#52D857" fill-opacity="1" d="M0,224L80,197.3C160,171,320,117,480,128C640,139,800,213,960,245.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}

        <Courosel></Courosel>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,256L40,224C80,192,160,128,240,101.3C320,75,400,85,480,106.7C560,128,640,160,720,154.7C800,149,880,107,960,128C1040,149,1120,235,1200,240C1280,245,1360,171,1400,133.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>

      <div className="skillSet container mt-5 mb-5 py-5 px-5">
        <div className='text-center'>
          <h3 className='font-bold text-center'>Developer Stack I Have</h3>
          <hr />
          <img src="./developer.svg" height='200' width='200' alt="" />
        </div>
        <div className="row">

          <div className="col-md-3">
            <div className=' text-left'>
              <h3 className='font-bold'>Front-End</h3>
              <hr />
              <span>JavaScript</span>
              <p className='font-size'>For Logic and Interactivity</p>
              <span>React.Js</span>
              <p className='font-size'>For Building User Interfaces</p>
              <span>HTML/CSS</span>
              <p className='font-size'>For Structure and Styling</p>
              <span>Python</span>
              <p className='font-size'>For Backend Development</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className=' text-center'>
              <h3 className='font-bold '>UI/Styling</h3>
              <hr />
              <span>Tailwind CSS</span>
              <p className='font-size'>For Rapid Development</p>
              <span>BootStrap</span>
              <p className='font-size'>For Responsive Design</p>
              <span>Material UI</span>
              <p className='font-size'>For Consistent Design</p>
              <span>Ant Design</span>
              <p className='font-size'>For Complex Applications</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className=' text-center'>
              <h3 className='font-bold'>Back-End</h3>
              <hr />
              <span>Node.Js</span>
              <p className='font-size'>For Server-Side Development</p>
              <span>Express.Js</span>
              <p className='font-size'>For Building APIs</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className=' text-end'>
              <h3 className='font-bold'>Database</h3>
              <hr />
              <span>MySQL</span>
              <p className='font-size'>For Relational Data</p>
              <span>MongoDB</span>
              <p className='font-size'>For NoSQL Data</p>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-md-3">
            <div className=' text-left'>
              <h3 className='font-bold'>Libraries</h3>
              <hr />
              <span>React-Redux</span>
              <p className='font-size'>For State Management</p>
              <span>Redux-Saga</span>
              <p className='font-size'>For Side Effects | Asynchronous Operations</p>
              <span>Axios</span>
              <p className='font-size'>For API Integration</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className=' text-left'>
            <h3 className='font-bold'>Tools Used</h3>
              <hr />
              
              <span>Code Editor</span>
              <p className='font-size'>Cursor</p>
              <p className='font-size'>VS Code</p>
              <span>API Testing</span>
              <p className='font-size'>Postman</p>
              <p className='font-size'>Swagger</p>
              <span>Version Control</span>
              <p className='font-size'>GitHub</p>
              <span>Database</span>
              <p className='font-size'>MongoDB Compass</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className=' text-end'>
              <h3 className='font-bold'>Deployment</h3>
              <hr />
              <span>AWS EC2</span>
              <p className='font-size'>For Hosting</p>
              <span>pm2</span>
              <p className='font-size'>For Process Management</p>
              <span>nginx</span>
              <p className='font-size'>For Reverse Proxy</p>
              <span>Netlify,Vercel</span>
              <p className='font-size'>For one-click Deployment</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className=' text-end'>
              <h3 className='font-bold'>3rd Party Services</h3>
              <hr />
              <span>GoDaddy</span>
              <p className='font-size'>For Domain Registration</p>
              <span>Cloudflare</span>
              <p className='font-size'>For DNS and SSL Certificates</p>
              <span>Razorpay</span>
              <p className='font-size'>For Payment Gateway</p>
              <span>Stripe</span>
              <p className='font-size'>For Payment Gateway</p>
              <span>Twilio</span>
              <p className='font-size'>For SMS and Voice</p>
            </div>
          </div>
        </div>

      </div>
      <div className="container-visionary">
        <div className='container-visionary-title'>
          <h4>Vision</h4>
          <p>Full Stack Developer with a passion for building scalable and efficient web applications.</p>
        </div>
        <div className= "container-visionary-one">
        <div>
          <div>
            <div className='n-box2 p-5 font-bold'>
              <h6 className='container-visionary-h6'>About Me</h6>
              <i style={{ color: `black` }} className="fa-solid fa-quote-left "></i>
              <p className='container-visionary-p'>I'm a React.js Frontend Developer with 8+ months of experience, skilled in creating responsive UIs and managing complex states using Redux and Redux-Saga. I've expanded into backend development with Node.js and MongoDB, and have basic deployment knowledge with AWS EC2, Nginx, and PM2. I'm passionate about learning, coding best practices, and team collaboration.</p>
            </div>
          </div>
        </div>

        <div>
          <div >
            <div className='n-box2 p-5 font-bold'>
              <h6 className='container-visionary-h6'>Reason to Hire Me</h6>
              <i style={{ color: `black` }} className="fa-solid fa-quote-left "></i>
              <p className='container-visionary-p'>I bring a solid blend of frontend expertise and backend understanding, making me a capable contributor to full-stack projects. I’m quick to learn, proactive in solving problems, and excited to collaborate with dynamic teams. My passion for clean code, performance optimization, and continuous learning makes me a valuable asset to any development team.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className="Developer-stack-scroll">
        <div className="Developer-stack-scroll-title">
          <h3>Tech That Powers My Code...</h3>
        </div>
        
        {/* Frontend Skills - Left to Right */}
        <div className="scroll-wrapper">
          <div className="scroll-row scroll-row-right">
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Python</div>
          </div>
        </div>

        {/* UI/Styling Skills - Right to Left */}
        <div className="scroll-wrapper">
          <div className="scroll-row scroll-row-left">
            <div className="skill-item">Tailwind CSS</div>
            <div className="skill-item">Bootstrap</div>
            <div className="skill-item">Material UI</div>
            <div className="skill-item">Ant Design</div>
            <div className="skill-item">Tailwind CSS</div>
            <div className="skill-item">Bootstrap</div>
            <div className="skill-item">Material UI</div>
            <div className="skill-item">Ant Design</div>
            <div className="skill-item">Tailwind CSS</div>
            <div className="skill-item">Bootstrap</div>
            <div className="skill-item">Material UI</div>
            <div className="skill-item">Ant Design</div>
          </div>
        </div>

        {/* Backend & Database - Left to Right */}
        <div className="scroll-wrapper">
          <div className="scroll-row scroll-row-right">
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Express.js</div>
            <div className="skill-item">MySQL</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Redux-Saga</div>
            <div className="skill-item">React-Redux</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Express.js</div>
            <div className="skill-item">MySQL</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Redux-Saga</div>
            <div className="skill-item">React-Redux</div>
          </div>
        </div>

        {/* Tools & Deployment - Right to Left */}
        <div className="scroll-wrapper">
          <div className="scroll-row scroll-row-left">
            <div className="skill-item">AWS EC2</div>
            <div className="skill-item">Nginx</div>
            <div className="skill-item">GitHub</div>
            <div className="skill-item">Postman</div>
            <div className="skill-item">VS Code</div>
            <div className="skill-item">Swagger</div>
            <div className="skill-item">AWS EC2</div>
            <div className="skill-item">Nginx</div>
            <div className="skill-item">GitHub</div>
            <div className="skill-item">Postman</div>
            <div className="skill-item">VS Code</div>
            <div className="skill-item">Swagger</div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}
export default Home