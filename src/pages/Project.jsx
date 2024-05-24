import React from 'react'
import CardProject from '../components/project/CardProject'
import { title } from "../styles/styles";

const Project = () => {
  return (
    <div className='h-fit md:h-[80vh]'>
      <div className="container mx-auto w-full h-full flex flex-col justify-evenly items-center mb-5 sm:mb-0">
        <div className="w-full h-full flex flex-col justify-center items-center mb-10 sm:mb-0 space-y-8">
          {/* Title Content */}
          <h4 className={`mb-4 sm:mb-0 ${title}`} data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">Project</h4>
          <p className="w-full md:w-2/3 text-center text-sm sm:text-lg text-sm select-none" data-aos="fade-out" data-aos-duration="1800" data-aos-offset="200">Featured here are various projects I have undertaken, some for personal development and others commissioned by clients.</p>
          {/* Card Content */}
          <CardProject />
        </div>
      </div>
    </div>
  )
}

export default Project