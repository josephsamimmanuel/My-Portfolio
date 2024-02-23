import React from 'react'
import {  FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Courosel() {
  return (
    <div>

        <div className='courosel-parent position-relative'>
        <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies I Use</h1>
        <div className='gallery'>

        <span style={{'--i' :1}}>
          <FaReact color='cyan'></FaReact>                  
        </span>

        <span style={{'--i' :2}}>
          <FaJsSquare color='yellow'></FaJsSquare>          
        </span>

        <span style={{'--i' :3}}>
          <FaNodeJs color='#7ADB56'></FaNodeJs>                
        </span>

        <span style={{'--i' :4}}>
          <FaHtml5 color='#DD4B25'></FaHtml5>                
        </span>

        <span style={{'--i' :5}}>
          <FaCss3 color='#254BDD'></FaCss3>                  
        </span>

        <span style={{'--i' :6}}>
          <SiTailwindcss color='#36B7F0'></SiTailwindcss>    
        </span>

        <span style={{'--i' :7}}>
          <FaGithub color='white'></FaGithub>              
        </span>

        <span style={{'--i' :8}}>
          <SiMysql color='#F29221'></SiMysql>
        </span>

        </div>
        </div>
    </div>
  )
}

export default Courosel