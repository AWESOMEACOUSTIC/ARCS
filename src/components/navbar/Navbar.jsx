import React, { useState } from 'react';
import LogoIcon from '../../assets/svg/logo.svg?react';
import HamburgerIcon from '../../assets/svg/hamburger.svg?react';
import NavLink from './NavLinks';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative w-full h-[9vw] py-3 ">
      <div 
        className="relative w-full h-full flex items-center justify-between px-8 2xl:px-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/svg/full-navbar.svg')"
        }}
      >
        <LogoIcon className="h-18 w-40" />
        <div className="hidden 2xl:flex space-x-12 font-[rugen]">
          <NavLink sectionId="home">Home</NavLink>
          <NavLink sectionId="about">About</NavLink>
          <NavLink sectionId="faq">FAQ</NavLink>
          <NavLink sectionId="contact">Contact Us</NavLink>
        </div>
        <button className="2xl:hidden" onClick={() => setMenuOpen(o => !o)}>
          <HamburgerIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      {menuOpen && (
        <div className="2xl:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90">
          <NavLink block sectionId="home">Home</NavLink>
          <NavLink block sectionId="about">About</NavLink>
          <NavLink block sectionId="faq">FAQ</NavLink>
          <NavLink block sectionId="contact">Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}