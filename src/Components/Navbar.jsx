import React from 'react'
import Logo from "../Assets/hamburgerlogo.png";
import {Link} from "react-router-dom";
import Home from '../Pages/Home';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
           <Link to ="/"> <img src={Logo}></img></Link>
        </div>
        <div className='nav-section'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar