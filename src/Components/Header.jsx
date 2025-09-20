import React from 'react'
import "../CSS/Header.css"
import { useNavigate } from 'react-router-dom';
import image from "../assets/mf-avatar.svg"

const Header = () => {
  const navigate = useNavigate();
  return (
   <div className='header-menu'>
    <img src={image} alt="main-image" onClick={()=>(navigate("/"))}/>
    <ul>
        <li className='mentorshipBtn' onClick={() => (navigate('/under-development'))}>Mentorship</li>
        <a href="#contactSection"><li className='helloBtn'>Say Hello</li></a>
    </ul>
   </div>
  )
}

export default Header