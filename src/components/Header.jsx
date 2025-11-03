import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

function Header() {
  const [showheader, setshowheader] = useState(false)
  const path = window.location.pathname
  const [necessaryLinks, setNecessaryLinks] = useState([]);

  useEffect(() => {
    fetchNecessaryLinks();
  }, []);
  const fetchNecessaryLinks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-necessary-links`);
      if (response) {
        setNecessaryLinks(response?.data?.data[0]);
      }else{
        console.log("No necessary links found");
      }
    } catch (error) {
      console.error('Error fetching necessary links:', error);
    }
  }
  console.log(necessaryLinks);
  
// createdAt: "2025-05-18T03:21:37.803Z"
// facebookLink: "https://www.facebook.com/username"
// githubLink: "https://github.com/username"
// instagramLink: "https://www.instagram.com/username"
// linkedinLink: "https://www.linkedin.com/in/username"
// resumeLink: "https://example.com/resume.pdf"
// twitterLink: "https://twitter.com/username"
// updatedAt: "2025-05-18T03:21:37.803Z"
// __v: 0
// id: "68295241f5508f12eb05ef8f"

  return (
    <div className='Header'>
      <div className='Header-p'>
        <p className={`${path === '/' && 'active'}`}> <Link to={'/'}>Home</Link></p>
        <p className={`${path === '/projects' && 'active'}`}> <Link to={'/projects'}>Projects</Link> </p>
        <p className={`${path === '/courses' && 'active'}`}> <Link to={'/courses'}>Education</Link> </p>
        <p className={`${path === '/contact' && 'active'}`}><Link to={'/contact'}>Contact</Link></p>
        <p className={`${path === `${necessaryLinks.githubLink}` && 'active'}`}> <a href={`${necessaryLinks.githubLink}`} target='_blank' rel='noreferrer'>GitHub</a></p>
        <p className={`${path === `${necessaryLinks.resumeLink}` && 'active'}`}> <a href={`${necessaryLinks.resumeLink}`} target='_blank' rel='noreferrer'>Resume</a> </p>
      </div>
      {showheader ? (<RiCloseCircleFill
        onClick={() => { setshowheader(!showheader) }} className='menu-icon position-fixed top=0 end-0'></RiCloseCircleFill>) :
        (<RiMenu3Fill
          onClick={() => { setshowheader(!showheader) }} className='menu-icon position-fixed top=0 end-0'></RiMenu3Fill>)}

      <ul className={`${showheader ? 'show-header' : 'hide-header'} n-box1`}>
        <li><p className={`${path === '/' && 'active'}`}> <Link to={'/'}>Home</Link></p> </li>
        <li><p className={`${path === '/projects' && 'active'}`}> <Link to={'/projects'}>Projects</Link> </p> </li>
        <li><p className={`${path === '/courses' && 'active'}`}> <Link to={'/courses'}>Education</Link> </p></li>
        <li><p className={`${path === '/contact' && 'active'}`}><Link to={'/contact'}>Contact</Link></p></li>
        <li><p className={`${path === `${necessaryLinks.githubLink}` && 'active'}`}> <a href={`${necessaryLinks.githubLink}`} target='_blank' rel='noreferrer'>GitHub</a></p></li>
        <li> <p className={`${path === `${necessaryLinks.resumeLink}` && 'active'}`}> <a href={`${necessaryLinks.resumeLink}`} target='_blank' rel='noreferrer'>Resume</a> </p></li>
      </ul>
    </div>
  )
}

export default Header