import React from 'react'
import Header from '../components/Header'
import Courosel from '../components/Courosel'

function Home() {
  return (
    <div>
        <Header></Header>
        <div className="introduction flex-with-center" style={{backgroundImage: `url('./blob-scene-haikei.svg')`}}>
        <div className='introduction-container'>
            <div>
            <h1>JOSEPH SAM IMMANUEL</h1>
            </div>
            <div className='intro-content d-flex gap-2'>
            <p >MERN Stack Developer, <br />Freelancer</p>
            <button className='primary-button font-bold'>Get Started</button>
            </div>
            
            <div className='introduction-container-about'>
            <i style={{color: `#52D857`}} class="fa-solid fa-quote-left large fa-3x"></i>
           <p>MERN Stack Developer with expertise in HTML5, CSS3, React.js, and Node.js, showcasing a blend of frontend and backend skills. Proficient in API integration, MySQL, and MongoDB for robust data management. Adept at version control using GitHub. Let's Connect !</p>
            </div>
            </div>
        </div>
        <Courosel></Courosel>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,256L40,224C80,192,160,128,240,101.3C320,75,400,85,480,106.7C560,128,640,160,720,154.7C800,149,880,107,960,128C1040,149,1120,235,1200,240C1280,245,1360,171,1400,133.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>
        <div className="container">

          <div className="row justify-content-start">
            <div className="col-md-4">
              <div className='n-box2 p-5 font-bold'>
                <h1>Yes you are Right..</h1> <br></br>
                <p>I am a JavaScript Buff</p>
              </div>
            </div>
          </div>

          <div className="row pt-5 justify-content-center">
            <div className="col-md-4">
              <div>
                <img src="./jsbuff.svg" alt="Javascript_SVG" height="200"className='w-100' />
              </div>
            </div>
          </div>

          <div className="row pt-5 justify-content-end py-2">
            <div className="col-md-4">
              <div className='n-box2 p-5 font-bold'>
                <p>Javascript is one of the most top-ranked programming Languages because of its ubiquitous use on all platforms and mass adoption. Main Use Cases: Web Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="devstack container mt-5 py-5 px-5">
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


        <div className='py-5'>
          <h3 className='font-bold text-center'>Who is Joseph?</h3>
        <div className="who-am-i flex-with-center" style={{backgroundImage:`url('blob-haikei.svg')`}}>

        <div>
          <h1>Hi, Hello</h1>
          <hr />
          <p><pre>{JSON.stringify({
            name:"S.Joseph Sam Immanuel",
            from:"India",
            age:"31",
            gender:"Male",
          }, null, 2)}</pre></p>
        </div>      

        </div>
        </div>


    </div>
  )
}

export default Home