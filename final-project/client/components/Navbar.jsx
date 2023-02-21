import React from 'react';
import logo from '../images/Icon.png';

export default function Navbar() {
  return (
    <>
      <a className='bg-black'>
        <img src={logo} className="logo-img"/>
        <p className='logo-text'>be tab'd</p>
      </a>
      <ul className='nav-items'>
        <li className='nav-item'><a>My files</a></li>
        <li className='nav-item'><a>About</a></li>
        <li className='nav-item'><a>Sign In</a></li>
        <li className='nav-button'><a>Sign Up</a></li>
      </ul>
    </>
  );
}
