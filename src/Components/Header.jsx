import React from 'react'
import "../CSS/Header.css"

const Header = () => {
  return (
   <div className='header-menu'>
    <ul>
    <li>Image Space</li>
    </ul>
    <ul>
        <li className='mentorshipBtn'>Mentorship</li>
        <li className='helloBtn'>Say Hello</li>
    </ul>
   </div>
  )
}

export default Header