import React from "react";
import { title } from "../styles/styles";

const Contact = () => {
  return (
    <div className="h-fit md:h-[80vh]">
      <div className="container mx-auto w-full h-full flex flex-col justify-evenly items-center mb-5 sm:mb-0">
        <div className="w-full h-full flex flex-col justify-evenly items-center mb-10 sm:mb-0 py-10">
          {/* Title Content */}
          <div className="flex flex-col justify-center items-center space-y-5">
            <h4 className={`mb-4 sm:mb-0 ${title}`} data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">Contact</h4>
            <p className="w-full md:w-2/3 text-center lg:text-xl text-sm" data-aos="fade-out" data-aos-duration="1800" data-aos-offset="200">Should you be interested in my capabilities, please feel free to contact me.</p>
          </div>
          {/* Form */}
          <div className="w-80 space-y-5 mt-5" data-aos="fade-out" data-aos-duration="2000" data-aos-offset="200">
            <div className="relative h-11 w-full min-w-[200px]">
              <input placeholder="example@gmail.com" className="placeholder-font-custom peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
              <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Email</label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input placeholder="Subject" className="placeholder-font-custom peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
              <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Subject</label>
            </div>
            <div className="relative w-full min-w-[200px]">
              <textarea placeholder="Leave a message ..." className="placeholder-font-custom peer h-28 w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 resize-none" />
              <label className="pointer-events-none absolute left-0 -top-1.5 flex w-full select-none !overflow-visible truncate text-[11px] font-normal text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Message</label>
            </div>
            <div className="relative flex justify-end">
              <button className="border border-white rounded-sm text-sm px-4 py-1 hover:bg-white/80 hover:text-black hover:font-bold transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
