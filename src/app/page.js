import React from 'react'
import AboutMe from '@/components/AboutMe'
import Header from '@/components/Header'
import Skills from '@/components/Skills'


const page = () => {
  return (
    <div className='bg-bkgprimary text-white font-custom'>
      <Header/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default page