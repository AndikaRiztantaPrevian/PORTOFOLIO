import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className='bg-slate-900 flex'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar