import React from 'react'
import "../CSS/IntroSection.css"

const IntroSection = () => {
  return (
    <>
      <div className='introDiv' id='introDiv'>
        <h1>Hi, I am Jaideep, Nice to Meet You !</h1>
        <p className='textPara'>Motivated and innovative professional with hands-on experience as the founder of a robotics-based startup, complemented by freelance expertise in digital marketing, website development, and full stack development. Skilled in React Native and MERN Stack, building cross-platform mobile applications, leading cross-functional teams, executing data-driven campaigns, and developing tech-driven solutions. Adept at combining creativity with technical knowledge to drive growth, enhance user experience, and deliver impactful results.</p>
        <p className='cta'>Get in Touch with Me</p>
      </div>
      <div className='intro2div'>
        <div>
          <h1>About Me ! </h1>
          <p>I am a motivated and innovative professional with a diverse background spanning entrepreneurship, technology, and digital strategy. As the founder of a robotics-based startup, I’ve had the opportunity to transform ideas into tangible solutions—designing, building, and optimizing autonomous systems that bridge the gap between technology and real-world applications. This entrepreneurial journey has sharpened my problem-solving skills, leadership abilities, and my passion for creating impactful solutions.</p>
          <p>In addition to my startup experience, I have worked as a freelancer in digital marketing, website development, and full stack development, enabling me to combine creativity with technical expertise. My work ranges from executing data-driven campaigns that boost brand visibility, to designing and developing dynamic, responsive websites that enhance user experience and drive measurable results.</p>
          <p>My technical skillset includes strong proficiency in the MERN stack (MongoDB, Express, React, Node.js) for full stack development, as well as React Native for building cross-platform mobile applications. This allows me to deliver scalable, user-centric solutions across both web and mobile platforms. I enjoy the challenge of bringing concepts to life through clean code, intuitive design, and seamless functionality.</p>
          <p>Beyond the technical side, I thrive in collaborative environments, leading cross-functional teams and aligning efforts toward shared goals. I believe that innovation happens at the intersection of creativity and technology, and I aim to harness both to deliver impactful results—whether that means improving operational efficiency, enhancing customer engagement, or driving business growth.</p>
          <p>At my core, I’m passionate about continuous learning, exploring emerging technologies, and leveraging my multidisciplinary background to create solutions that don’t just work, but truly make a difference.</p>
        </div>
        <div>
          <h1>Professional Experience</h1>
          <div>
            <div className='experienceSegment'>
              <h4>Jaitech Robotics and Automations Private Limited, Jaipur</h4>
              <h4>2023 - 2025</h4>
            </div>
            <p className='designation'>Startup Founder</p>
            <ul>
              <li>Founded and led a robotics startup focused on developing cost-efficient Autonomous Mobile Robots (AMRs).</li>
              <li>Directed cross-functional teams in hardware-software integration, including wireless camera modules, barcode
                analysis, real-time communication systems, and AI-driven control algorithms.</li>
            </ul>
          </div>

          <div>
            <div className='experienceSegment-2'>
              <h4>Freelancing Projects</h4>
              <h4>2020 - 2023</h4>
            </div>
            <p className='designation'>Own Clients and Projects</p>
            <ul>
              <li>Delivered end-to-end digital marketing solutions for multiple clients, including SEO, social media management,
                and content strategy—resulting in increased online visibility and improved lead conversion rates.</li>
              <li>Designed and developed responsive, SEO-optimized websites using tools like WordPress, HTML/CSS, and
                JavaScript, ensuring fast load times, mobile compatibility, and seamless user experience.</li>
            </ul>
          </div>

          <div>
            <div className='experienceSegment-2'>
              <h4>DigiXP Digital Marketing Institute, Jaipur</h4>
              <h4>2020</h4>
            </div>
            <p className='designation'>Internship - 6 Months</p>
            <ul>
              <li>Managed content creation, SEO optimisation, and performance analytics, using tools like Canva, Google
                Analytics, and Meta Business Suite to improve brand visibility and customer interaction.</li>
              <li>Executed targeted digital marketing campaigns across platforms like Instagram, LinkedIn, and Google Ads.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroSection