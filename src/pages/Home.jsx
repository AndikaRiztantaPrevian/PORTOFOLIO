import React from "react";
import Typewriter from "typewriter-effect";
import Skills from "../components/skills/Skills";
import { title } from "../styles/styles";
import { FaLaravel, FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto h-auto text-white font-sometype-mono ">
      <div className="bg-custom-radial h-[93vh] flex items-center">
        <main className="lg:w-1/2">
          <p className="font-bold text-3xl">Hello, I’m Andika.</p>
          <div className="text-typing font-medium text-2xl mt-1 select-none">
            <Typewriter
              options={{
                strings: ["FrontEnd Developer", "BackEnd Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-lg text-justify mt-2">
            I am a passionate and creative web developer with 4 years of
            experience building engaging and functional websites. For more
            information, please scroll down to see my profile.
          </p>
        </main>
      </div>
      <section id="skills">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h4 className={title}>Technologies & Tools</h4>
          </div>
          <div className="grid grid-cols-8 gap-4">
            <Skills icon={FaReact} name="React" />
            <Skills icon={FaLaravel} name="Laravel" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
