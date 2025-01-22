import React, { useState } from 'react'
import "../../../../css/Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = (onLogout) => {
  var[dropdown,showDropdown]=useState(false)
  const toggleDropdown=()=>{
    showDropdown((dropdown)=>!dropdown);
  };
  return (
    <header>
    <nav>
      <ul>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/about' className='link'>About</Link></li>
        <li><Link to='/gallery' className='link'>Gallery</Link></li>
        <li><Link to='/contact' className='link'>Contact</Link></li>
        <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <span >Hooks</span>
          {dropdown && (
          
          <ul>
            <li><Link to='usestate' className='link' >useState</Link></li>
            <li><Link to='useeffect' className='link' >useEffect</Link></li>
          </ul>)}
        </div>
        <li><Link to='/signup' className='link'>Signup</Link></li>
        <li><Link to="/" className="Link" onClick={onLogout}>Logout</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar