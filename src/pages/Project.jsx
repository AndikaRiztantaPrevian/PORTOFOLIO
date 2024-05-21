import React from 'react'
import { title } from "../styles/styles"

const Project = () => {
  return (
    <div className='h-[80vh]'>
      <div className="container mx-auto w-full h-full flex flex-col justify-evenly items-center">
        <div className="w-full h-1/5 flex flex-col justify-center items-center gap-2">
          <h4 className={title} data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">Projects</h4>
          <p className="w-2/3 text-center lg:text-xl text-lg" data-aos="fade-out" data-aos-duration="1800" data-aos-offset="200">Featured here are various projects I have undertaken, some for personal development and others commissioned by clients.</p>
        </div>
        <div className="grid grid-cols-4 items-center gap-4 w-full h-2/4" data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">
          <div className="max-w-1/4 h-36 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <p>a</p>
          </div>
          <div className="max-w-1/4 h-36 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <p>a</p>
          </div>
          <div className="max-w-1/4 h-36 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <p>a</p>
          </div>
          <div className="max-w-1/4 h-36 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <p>a</p>
          </div>
          <div className="max-w-1/4 h-36 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <p>a</p>
          </div>
          <div className="max-w-1/4 h-36 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <p>a</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project