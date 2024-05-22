import React, { useEffect } from "react";
import Skill from "./Skills";
import { title } from "../../styles/styles";

// Packages
import AOS from "aos";
import "aos/dist/aos.css";

// ICON IMPORT FROM REACT-ICON
import { FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoElectron, IoLogoJavascript } from "react-icons/io5";
import { SiJquery, SiLaragon, SiPostman } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";

const SkillsIssue = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-8">
      <div className="flex flex-col items-center justify-center gap-y-5 sm:gap-y-0 sm:space-y-5">
        <h4 className={title} data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">Technologies & Tools</h4>
        <p className="sm:w-2/3 w-full px-2 sm:px-0 text-center lg:text-2xl sm:text-lg text-sm" data-aos="fade-out" data-aos-duration="1800" data-aos-offset="200">Here are the technologies and tools I utilize for website development.</p>
      </div>
      <div className="max-w-3xl flex flex-wrap justify-center  sm:gap-6 lg:gap-10 gap-y-3 gap-x-4 px-2 sm:px-0" data-aos="fade-out" data-aos-duration="2000" data-aos-offset="200">
        <Skill icon={FaReact} name="ReactJS" color="text-sky-300" />
        <Skill icon={FaLaravel} name="Laravel" color="text-red-500" />
        <Skill icon={IoLogoElectron} name="Electron" color="text-cyan-600" />
        <Skill icon={DiNodejs} name="NodeJS" color="text-green-500" />
        <Skill icon={IoLogoJavascript} name="JavaScript" color="text-yellow-500" />
        <Skill icon={SiJquery} name="jQuery" color="text-cyan-500" />
        <Skill icon={BiLogoTailwindCss} name="TailwindCSS" color="text-sky-400" />
        <Skill icon={FaCss3Alt} name="CSS" color="text-sky-500" />
        <Skill icon={FaHtml5} name="HTML" color="text-orange-500" />
        <Skill icon={SiPostman} name="Postman" color="text-orange-500" />
        <Skill icon={SiLaragon} name="Laragon" color="text-sky-500" />
        <Skill icon={FaGitAlt} name="Git" color="text-orange-500" />
        <Skill icon={FaGithub} name="Github" color="text-gray-200" />
      </div>
    </div>
  );
}

export default SkillsIssue;
