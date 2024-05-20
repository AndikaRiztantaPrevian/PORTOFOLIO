import React from "react";
import Typewriter from "typewriter-effect";
import { title } from "../styles/styles";
import SkillsIssue from "../components/skills/SkillsIssue";
import Education from "../components/education/Education";
import SosialMedia from "../components/sosial-media/SosialMedia";

const Home = () => {
  return (
    <div className="container mx-auto h-auto text-white font-sometype-mono ">
      <div className="bg-custom-radial h-[93vh] flex items-center">
        <main className="lg:w-1/2">
          <p className="font-bold text-3xl">Hello, I’m Andika.</p>
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
            experience building engaging and functional websites. For more
            information, please scroll down to see my profile.
          </p>
          <div className="sosial-media">
            <SosialMedia />
          </div>
        </main>
      </div>
      <section id="skills" className="h-lvh py-10">
        <div className="flex flex-col items-center h-full">
          <SkillsIssue />
          <Education />
        </div>
      </section>
    </div>
  );
};

export default Home;
