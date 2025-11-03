import React, { useEffect, useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

function Footer() {
  const [necessaryLinks, setNecessaryLinks] = useState([]);

  useEffect(() => {
    fetchNecessaryLinks();
  }, []);

  const fetchNecessaryLinks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-necessary-links`);
      if (response) {
        setNecessaryLinks(response.data.data[0]);
      }else{
        console.log("No necessary links found");
      }
    } catch (error) {
      console.error('Error fetching necessary links:', error);
    }
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#001220" fill-opacity="1" d="M0,96L16,96C32,96,64,96,96,112C128,128,160,160,192,165.3C224,171,256,149,288,138.7C320,128,352,128,384,154.7C416,181,448,235,480,250.7C512,267,544,245,576,234.7C608,224,640,224,672,229.3C704,235,736,245,768,256C800,267,832,277,864,261.3C896,245,928,203,960,181.3C992,160,1024,160,1056,176C1088,192,1120,224,1152,208C1184,192,1216,128,1248,96C1280,64,1312,64,1344,80C1376,96,1408,128,1424,144L1440,160L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg>
      <div className="row justify-content-center footer-content">
        <div className="col-md-6">
          <div>
            <div className='footer-content-div'>
            <p className='footer-content-p'>Designed using React.js, Node.js, Express.js, and MongoDB</p>
            <p className='footer-content-p'>Deployed on AWS Cloud, hosted on GoDaddy, managed by Cloudflare</p>
            </div>

            <hr />
            <div className='d-flex justify-content-between'>
              <a href={`${necessaryLinks.instagramLink}`}> <FaInstagram></FaInstagram>  </a>
              <a href={`${necessaryLinks.facebookLink}`}><FaFacebook></FaFacebook></a>
              <a href={`${necessaryLinks.linkedinLink}`}><FaLinkedin></FaLinkedin></a>
              <a href={`${necessaryLinks.githubLink}`}> <FaGithub></FaGithub></a>
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