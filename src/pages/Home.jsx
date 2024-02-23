import React from 'react'
import Header from '../components/Header'

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
    </div>
  )
}

export default Home