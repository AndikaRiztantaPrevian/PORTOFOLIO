import React, {useState , useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-blue-500' : '';
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav data-aos="fade-out" data-aos-duration="2000" className='py-6 px-2 font-sometype-mono lg:h-[10vh] h-auto lg:relative absolute w-full'>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="menu-button flex justify-end w-full lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2"/><rect y="4" width="24" height="2"/><rect y="18" width="24" height="2"/></svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center w-full lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='lg:flex lg:gap-4 text-white font-normal uppercase tracking-widest'>
            <li className='w-28 text-center'><Link to="/" className={`hover:text-blue-500 ${getLinkClass('/')}`}>Home</Link></li>
            <li className='w-28 text-center'><Link to="/project" className={`hover:text-blue-500 ${getLinkClass('/project')}`}>Project</Link></li>
            <li className='w-28 text-center'><Link to="/contact" className={`hover:text-blue-500 ${getLinkClass('/contact')}`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar