import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const SosialMedia = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/AndikaRiztantaPrevian" target="_blank">
        <div className="w-12 h-12 bg-gradient-to-t from-indigo-950/80 to-indigo-300/20 flex justify-center items-center rounded-md hover:ring-2 hover:ring-white">
          <FaGithub className="w-8 h-8" />
        </div>
      </a>
      <a href="https://www.instagram.com/andikariztanta.p/" target="_blank">
        <div className="w-12 h-12 bg-gradient-to-t from-indigo-950/80 to-indigo-300/20 flex justify-center items-center rounded-md hover:ring-2 hover:ring-white">
          <FaInstagram className="w-8 h-8" />
        </div>
      </a>
    </div>
  );
};

export default SosialMedia;
