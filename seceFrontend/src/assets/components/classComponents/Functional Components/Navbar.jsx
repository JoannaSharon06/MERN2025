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
      <ol>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/about' className='link'>About</Link></li>
        <li><Link to='/gallery' className='link'>Gallery</Link></li>
        <li><Link to='/contact' className='link'>Contact</Link></li>
        <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className='drop'>
        <span >Hooks</span>
          {dropdown && (
          
          <ul classname="dropdown">
            <li><Link to='usestate' className='link' >useState</Link></li>
            <li><Link to='useeffect' className='link' >useEffect</Link></li>
            <li><Link to='useapi' className='link' >useEffectAPI</Link></li>
            <li><Link to='usereducer' className='link' >useReducer</Link></li>
            <li><Link to='useeffectimg' className='link' >useEffectAPIImage</Link></li>
          </ul>)}
        </div>
        <li><Link to='/signup' className='link'>Signup</Link></li>
        <li><Link to="/" className="Link" onClick={onLogout}>Logout</Link></li>
      </ol>
    </nav>
    </header>
  )
}

export default Navbar