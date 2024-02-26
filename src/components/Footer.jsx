import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className='footer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,96L24,80C48,64,96,32,144,64C192,96,240,192,288,224C336,256,384,224,432,192C480,160,528,128,576,122.7C624,117,672,139,720,144C768,149,816,139,864,133.3C912,128,960,128,1008,106.7C1056,85,1104,43,1152,53.3C1200,64,1248,128,1296,138.7C1344,149,1392,107,1416,85.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </div>
        <div className="row justify-content-center footer-content">
            <div className="col-md-6">
                <div>
                    <p className='footer-content-p'>Designed with React</p> 
                    <hr />
                    <div className='d-flex justify-content-between'>
                   <a href="https://www.instagram.com/josesamimmanuel/"> <FaInstagram></FaInstagram>  </a>     
                    <a href="https://www.facebook.com/joseph.immanuel.12/"><FaFacebook></FaFacebook></a>    
                    <a href="https://www.linkedin.com/in/josephsamimmanuel/"><FaLinkedin></FaLinkedin></a>    
                    <a href="https://github.com/josephsamimmanuel"> <FaGithub></FaGithub></a>   
                    </div>
                    <hr />
                    <p> &copy; {new Date().getFullYear()} Developed by Joseph Sam Immanuel </p>
                    <p>Email: immanueljosephsam@gmail.com</p>
                    <p>Contact me: +91 638 175 4592</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer