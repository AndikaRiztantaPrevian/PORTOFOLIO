import React from "react";
import { title } from "../../styles/styles";

const Education = () => {
  return (
    <div className="flex flex-col justify-center align-center h-2/4">
      <div className="flex justify-center">
        <h4 className={`${title}`}>Education</h4>
      </div>
      <div className="max-w-3xl flex flex-wrap gap-10 justify-center mt-12">
        <div className="h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-5">
            <p>SMK NEGERI 1 KOTA PROBOLINGGO</p>
            <p>Rekayasa Perangkat Lunak</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
