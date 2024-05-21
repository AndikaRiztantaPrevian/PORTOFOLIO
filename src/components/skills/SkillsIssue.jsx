import React, { useEffect } from "react";
import Skill from "./Skills";
import { title } from "../../styles/styles";

// Packages
import AOS from "aos";
import "aos/dist/aos.css";

// ICON IMPORT FROM REACT-ICON
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { SiLaragon } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

const SkillsIssue = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="flex flex-col lg:justify-center align-center h-full">
      <div className="flex justify-center" data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">
        <h4 className={`${title}`}>Technologies & Tools</h4>
      </div>
      <div className="max-w-3xl flex flex-wrap px-2 gap-6 lg:gap-10 justify-center mt-12" data-aos="fade-out" data-aos-duration="2000" data-aos-offset="200">
        <Skill icon={FaReact} name="ReactJS" />
        <Skill icon={FaLaravel} name="Laravel" />
        <Skill icon={IoLogoElectron} name="Electron" />
        <Skill icon={FaNode} name="NodeJS" />
        <Skill icon={IoLogoJavascript} name="JavaScript" />
        <Skill icon={SiJquery} name="jQuery" />
        <Skill icon={BiLogoTailwindCss} name="TailwindCSS" />
        <Skill icon={FaCss3Alt} name="CSS" />
        <Skill icon={FaHtml5} name="HTML" />
        <Skill icon={SiPostman} name="Postman" />
        <Skill icon={SiLaragon} name="Laragon" />
        <Skill icon={FaGit} name="Git" />
        <Skill icon={FaGithub} name="Github" />
      </div>
    </div>
  );
}

export default SkillsIssue;
