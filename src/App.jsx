import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import IntroSection from './Components/IntroSection'
import Footer from './Components/Footer'
import ProjectsSection from './Components/ProjectSection'
import SkillsSection from './Components/SkillsSection'
import Achievements from './Components/AchievementsSection'
import Certifications from './Components/CerificatesSection'
import ContactUs from './Components/ContactUsPage'
import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <IntroSection />
    <SkillsSection />
    <ProjectsSection />
    <Achievements />
    <Certifications />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App