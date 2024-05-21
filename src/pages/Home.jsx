import React, { useEffect, Suspense, lazy } from "react";
import Education from "../components/education/Education";
import SosialMedia from "../components/sosial-media/SosialMedia";
import Foto from "../assets/web.webp";
// Packages
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
// Icons
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const SkillsIssue = lazy(() => import('../components/skills/SkillsIssue'));

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-white font-sometype-mono">
      <div className="h-[90vh]">
        <div className="container mx-auto h-[80%] flex lg:flex-row bg-custome-mobile md:bg-none flex-col-reverse justify-evenly items-center">
          {/* LEFT */}
          <main data-aos="fade-right" data-aos-duration="1000" className="lg:w-1/2">
            <p className="font-bold text-3xl select-none">Hello, My name Andika.</p>
            <div className="text-typing font-medium text-2xl mt-1 select-none">
              <Typewriter
                options={{
                  strings: ["FrontEnd Developer.", "BackEnd Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-lg text-justify mt-2 mb-3 select-none">
              I am a dedicated and inventive web developer with four years of experience in crafting engaging and functional websites.
            </p>
            <div className="sosial-media">
              <SosialMedia />
            </div>
          </main>
          {/* RIGHT */}
          <aside className="h-96 lg:w-1/3 flex justify-end items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="100">
            <div className="bg-profile-1 h-full w-full absolute z-0 left-32 top-14 hidden xl:block"></div>
            <div className="bg-profile-2 h-full w-full absolute z-0 right-30 bottom-14 hidden xl:block"></div>
            <img className="rounded-t-full lg:h-80 h-40 z-10" src={Foto} alt="Andika Riztanta Previan" />
          </aside>
        </div>
        {/* Scroll Down */}
        <div className="bg-gradient-to-t from-[#02020f] h-[20%] flex justify-center items-center">
          <a href="#skills" className="h-full flex flex-col justify-center items-center hover:font-semibold">
            <div className="animate-bounce" data-aos="fade-out" data-aos-duration="1000" data-aos-offset="0">
              Scroll Down
            </div>
            <div className="animate-bounce" data-aos="fade-out" data-aos-duration="1000" data-aos-offset="0">
              <MdKeyboardDoubleArrowDown />
            </div>
          </a>
        </div>
      </div>
      {/* Skills */}
      <div id="skills" className="bg-[#02020f] h-lvh flex flex-col  justify-center items-center">
        <div className="h-2/4">
          <Suspense fallback={<div>Loading ...</div>}>
            <SkillsIssue />
          </Suspense>
        </div>
        <div className="h-2/5 flex xl:items-center sm:items-end">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Home;
