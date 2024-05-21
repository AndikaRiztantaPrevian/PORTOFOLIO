import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const titleBg = `
    p-2 h-full bg-gray-600 rounded-md bg-clip-padding
    backdrop-filter backdrop-blur-md bg-opacity-10 border
    border-gray-100 select-none
  `;
  return (
    <Router>
      <div className="bg-black text-white font-sometype-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
