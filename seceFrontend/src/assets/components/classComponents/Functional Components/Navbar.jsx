import React from 'react'
import "../../../../css/Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = (onLogout) => {
 var styling={textDecoration:"underline",
  color:"blue",
  listStyletype:"none",
  textalign:"center",
 }
  return (
    <header>
    <nav>
      <ul>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/about' className='link'>About</Link></li>
        <li><Link to='/gallery' className='link'>Gallery</Link></li>
        <li><Link to='/contact' className='link'>Contact</Link></li>
        <li><Link to='/signup' className='link'>Signup</Link></li>
        <li><Link to="/" className="Link" onClick={onLogout}>Logout</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar