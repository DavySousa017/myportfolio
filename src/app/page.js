import React from 'react'
import AboutMe from '@/components/AboutMe'
import Header from '@/components/Header'


const page = () => {
  return (
    <div className='bg-bkgprimary text-white font-custom'>
      <Header/>
      <AboutMe/>
    </div>
  )
}

export default page