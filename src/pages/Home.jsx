import React, { useEffect } from "react";
import SkillsIssue from "../components/skills/SkillsIssue";
import Education from "../components/education/Education";
import SosialMedia from "../components/sosial-media/SosialMedia";
import Foto from "../assets/web.webp";

// Packages
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
// Icons
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-white font-sometype-mono">
      <div className="h-[90vh]">
        <div className="container mx-auto h-[85%] flex justify-evenly items-center">
          {/* LEFT */}
          <main data-aos="fade-right" data-aos-duration="1000" className="lg:w-1/2">
            <p className="font-bold text-3xl">Hello, My name Andika.</p>
            <div className="text-typing font-medium text-2xl mt-1 select-none">
              <Typewriter
                options={{
                  strings: ["FrontEnd Developer.", "BackEnd Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-lg text-justify mt-2 mb-3">
              I am a passionate and creative web developer with 4 years of
              experience building engaging and functional websites.
            </p>
            <div className="sosial-media">
              <SosialMedia />
            </div>
          </main>
          {/* RIGHT */}
          <aside className="bg-custom-radial h-96 lg:w-1/3 lg:flex hidden justify-center items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="100">
            <img className="rounded-t-full h-80" src={Foto} alt="Andika Riztanta Previan" />
          </aside>
        </div>
        {/* Scroll Down */}
        <div className="bg-gradient-to-t from-slate-950 h-[15%] flex justify-center items-center">
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
      <section id="skills" className="h-lvh py-10 bg-slate-950">
        <div className="flex flex-col items-center h-full">
          <SkillsIssue />
          <Education />
        </div>
      </section>
    </div>
  );
};

export default Home;
