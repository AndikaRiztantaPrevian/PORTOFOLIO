import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
      <nav className='p-6 font-sometype-mono'>
        <div className="container mx-auto flex lg:flex-row flex-col justify-center items-center">
          <div className="menu-button flex justify-end w-full lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M24,3c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1ZM7,20H1c-.55,0-1,.45-1,1s.45,1,1,1H7c.55,0,1-.45,1-1s-.45-1-1-1ZM15,11H1c-.55,0-1,.45-1,1s.45,1,1,1H15c.55,0,1-.45,1-1s-.45-1-1-1Z"/></svg>
            </button>
          </div>
          <div className={`lg:flex lg:items-center w-full lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='lg:flex lg:gap-4 text-white font-normal uppercase tracking-widest'>
              <li><Link to="/">Home</Link></li> <span className='hidden lg:block select-none'>|</span>
              <li><Link to="/project">Project</Link></li> <span className='hidden lg:block select-none'>|</span>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar