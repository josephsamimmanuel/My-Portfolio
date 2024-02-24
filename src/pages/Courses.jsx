import React from 'react'
import Header from '../components/Header'

function Courses() {
  return (
    <div>
      <Header></Header>
        <div className="courses-intro" style={{ backgroundImage: `url('./blob-scene-haikei1.svg')` }}>
          <div className='courses-intro-content'>
            <div>
            <h1>Educational Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in ad at odit dignissimos assumenda nobis itaque repudiandae minima ut?</p>
            <button className='primary-button' style={{fontWeight:'bold'}}>Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Courses