import React, { useEffect } from "react";
import { title } from "../../styles/styles";
// Packages
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col justify-center align-center">
      <div className="flex justify-center" data-aos="fade-out" data-aos-duration="1500" data-aos-offset="100">
        <h4 className={title}>Education</h4>
      </div>
      <div className="max-w-3xl flex flex-wrap gap-10 justify-center mt-5" data-aos="fade-out" data-aos-duration="2000" data-aos-offset="100">
        <div className="h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-10 text-center text-sm text-md-md">
            <p>SMK NEGERI 1 KOTA PROBOLINGGO</p>
            <p>Software Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
