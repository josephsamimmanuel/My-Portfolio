import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header></Header>
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contactus.svg" alt="" />
          </div>
          <div className=" col-md-6">
            <div className='contact-input contact-form m-2 p-5 n-box2'>
              <h1>Contact Us</h1>
              <hr />
              <input type="text" className='form-control' placeholder='Enter your name' />
              <input type="text" className='form-control' placeholder='Subject of Message' />
              <textarea className='form-control' name="" id="" cols="" rows="3" placeholder='Your message here'></textarea>
              <button >Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact