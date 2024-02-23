import React, { useState } from 'react'
import { RiMenu3Fill, RiMenuFill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';

function Header() {
    const [showheader,setshowheader]=useState(false)
    const path=window.location.pathname
  return (
    <div className='Header'>
        {showheader? (<RiCloseCircleFill 
        onClick={()=>{setshowheader(!showheader)}} className='menu-icon position-fixed top=0 end-0'></RiCloseCircleFill>):
        (<RiMenu3Fill 
        onClick={()=>{setshowheader(!showheader)}} className='menu-icon position-fixed top=0 end-0'></RiMenu3Fill>)}
        
        <ul className={`${showheader?'show-header':'hide-header'} n-box1`}>
            <li className={`${path=='/' && 'active'}`}> <Link to={'/'}>Home</Link> </li>
            <li className={`${path=='/projects' && 'active'}`}> <Link to={'/projects'}>Projects</Link> </li>
            <li className={`${path=='/courses' && 'active'}`}> <Link to={'/courses'}>Courses</Link> </li>
            <li className={`${path=='/contact' && 'active'}`}> <Link to={'./contact'}>Contact Me</Link> </li>
        </ul>
        </div>
  )
}

export default Header