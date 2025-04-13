import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import './Courses.css';  


function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !subject || !message) {
      toast.warning('Please fill all fields');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/contact`, {
        name: name,
        email: 'josesamimmanuel@gmail.com',
        subject: subject,
        message: message
      });

      if (response.status === 201) {
        toast.success('Message sent successfully');
        setName('');
        setSubject('');
        setMessage('');
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
              {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                  <div className="loader"></div>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact