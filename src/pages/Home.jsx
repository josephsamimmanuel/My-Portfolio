import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div>
        <Header></Header>
        <div className="introduction flex-with-center" style={{backgroundImage: `url('./blob-scene-haikei.svg')`}}>
        <div>
            <h1>JOSEPH SAM IMMANUEL</h1>
            <div className='intro-content d-flex gap-4'>
            <p className='font-size'>MERN Stack Developer, <br />Freelancer</p>
            <button className='primary-button font-bold w-25'>Get Started</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home