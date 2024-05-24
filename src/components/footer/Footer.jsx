import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isProjectOrContact = location.pathname === "/project" || location.pathname === "/contact";

  return (
    <footer className={`h-[10vh] w-full p-6 flex justify-center items-center select-none text-white ${isProjectOrContact ? 'bg-black' : 'bg-[#02020f]'}`}>
      <div className="text-sm sm:text-base">
        © 2024 <a href="https://www.instagram.com/andikariztanta.p/" target="_blank">Andika Riztanta Previan</a>
      </div>
    </footer>
  );
};

export default Footer;
