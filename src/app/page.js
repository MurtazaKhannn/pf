'use client'

import React, { useRef } from 'react'
import Eyes from './components/eyes/page'
import Navbar from './components/Navbar/page'
import TechStack from './components/TechStack/page'
import Intro from "./components/Intro/page"
import Socials from './components/Socials/page'
import Projects from './components/Projects/page'

const HomePage = () => {
  const ref = useRef(null)
  return (
    <div ref={ref}>
      <Navbar/>
      <Eyes reference = {ref} />
      <TechStack />
      <Intro/>
      <Socials/>
      <Projects/>
      
    </div>
  )
}

export default HomePage
