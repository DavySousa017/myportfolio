import React from 'react'
import AboutMe from '@/components/AboutMe'
import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'


const page = () => {
  return (
    <div className='bg-bkgprimary text-white font-custom'>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default page