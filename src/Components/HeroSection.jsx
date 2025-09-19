import React from 'react'
import "../CSS/HeroSection.css"
import avatar from "../assets/mf-avatar.svg"
import bg from "../assets/heroBg.jpg"

const HeroSection = () => {
  return (
    <div className='herodiv'>
        <div className='herosection'>
        <h2>Full Stack Developer · Robotics · Mentor — Building Experiences with Purpose</h2>
        <p>I craft ideas into code, and code into experiences</p>
        <img src={avatar} alt="avatar" />
        </div>
    </div>
  )
}

export default HeroSection