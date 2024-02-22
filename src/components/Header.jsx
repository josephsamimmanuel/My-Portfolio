import React, { useState } from 'react'
import { RiMenu3Fill, RiMenuFill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';

function Header() {
    const [showheader,setshowheader]=useState(false)
  return (
    <div className='Header'>
        {showheader? (<RiCloseCircleFill 
        onClick={()=>{setshowheader(!showheader)}} className='menu-icon position-fixed top=0 end-0'></RiCloseCircleFill>):
        (<RiMenu3Fill 
        onClick={()=>{setshowheader(!showheader)}} className='menu-icon position-fixed top=0 end-0'></RiMenu3Fill>)}
        
        <ul className={`${showheader?'show-header':'hide-header'} n-box1`}>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/projects'}>Projects</Link> </li>
            <li> <Link to={'/courses'}>Courses</Link> </li>
            <li> <Link to={'./contact'}>Contact Me</Link> </li>
        </ul>
        </div>
  )
}

export default Header