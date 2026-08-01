import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import toast from 'react-hot-toast';
import { useState } from 'react';
import '../stylesheets/Courses.css';  

function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !message) {
      toast.warning('Please fill all fields');
      return;
    }

    const whatsappMessage = `Name: ${name}\nSubject: ${subject}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918508406281?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
      <Header></Header>
      <div className="container contact mt-5 pb-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contactus.svg" alt="" />
          </div>
          <div className="col-md-6">
            <div className='contact-input contact-form m-2 p-5 n-box2'>
              <h1>Contact Us</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  className='form-control mb-3' 
                  placeholder='Enter your name' 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
                <input 
                  type="text" 
                  className='form-control mb-3' 
                  placeholder='Subject of Message' 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                />
                <textarea 
                  className='form-control mb-3' 
                  rows="3" 
                  placeholder='Your message here' 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact