import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';

function Header() {
    const [showheader,setshowheader]=useState(false)
    const path=window.location.pathname
  return (
    <div className='Header'>
              <div className='Header-p'>
        <p className={`${path==='/' && 'active'}`}> <Link to={'/'}>Home</Link></p> 
        <p className={`${path==='/projects' && 'active'}`}> <Link to={'/projects'}>Projects</Link> </p>  
        <p className={`${path==='/courses' && 'active'}`}> <Link to={'/courses'}>Education</Link> </p> 
        <p className={`${path==='/contact' && 'active'}`}><Link to={'/contact'}>Contact</Link></p> 
        <p className={`${path==='https://github.com/josephsamimmanuel' && 'active'}`}> <a href="https://github.com/josephsamimmanuel">GitHub</a></p>
            <p className={`${path==='https://drive.google.com/file/d/1mnhGIsY6TF6RTlwjbugVA52NFPm_Iiha/view' && 'active'}`}> <a href="https://drive.google.com/file/d/1mnhGIsY6TF6RTlwjbugVA52NFPm_Iiha/view">Resume</a> </p>
        </div>
        {showheader? (<RiCloseCircleFill 
        onClick={()=>{setshowheader(!showheader)}} className='menu-icon position-fixed top=0 end-0'></RiCloseCircleFill>):
        (<RiMenu3Fill 
        onClick={()=>{setshowheader(!showheader)}} className='menu-icon position-fixed top=0 end-0'></RiMenu3Fill>)}

        <ul className={`${showheader?'show-header':'hide-header'} n-box1`}>
            <li className={`${path==='/' && 'active'}`}> <Link to={'/'}>Home</Link> </li>
            <li className={`${path==='/projects' && 'active'}`}> <Link to={'/projects'}>Projects</Link> </li>
            <li className={`${path==='/courses' && 'active'}`}> <Link to={'/courses'}>Education</Link> </li>
            <li className={`${path==='/contact' && 'active'}`}> <Link to={'./contact'}>Contact Me</Link> </li>
            <li className={`${path==='https://github.com/josephsamimmanuel' && 'active'}`}> <a href="https://github.com/josephsamimmanuel">GitHub</a></li>
            <li className={`${path==='https://drive.google.com/file/d/1mnhGIsY6TF6RTlwjbugVA52NFPm_Iiha/view' && 'active'}`}> <a href="https://drive.google.com/file/d/1mnhGIsY6TF6RTlwjbugVA52NFPm_Iiha/view">Resume</a> </li>
        </ul>
        </div> 
  )
}

export default Header