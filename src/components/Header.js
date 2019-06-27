import React from 'react';
import underlordsLogo from '../assets/underlordsLogo.png'
import '../css/Header.css'

function Header() {
  return (
    <div className="Header">
        <h1 className='Header-text'>Dota Underlord Guidebook</h1>
        <img className='logo' src={underlordsLogo} alt='underlord-logo'/>
    </div>
  );
}

export default Header;
