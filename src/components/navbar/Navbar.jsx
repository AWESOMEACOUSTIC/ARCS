import React, { useState } from 'react';
import NavBorder from '../../assets/svg/full-navbar.svg?react';
import LogoIcon from '../../assets/svg/logo.svg?react';
import HamburgerIcon from '../../assets/svg/hamburger.svg?react';
import NavLink from './NavLinks';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative w-full h-[96px]">
      <NavBorder className="absolute inset-0 w-full h-full" />
      <div className="relative flex items-center justify-between h-full px-8 2xl:px-32">
        <LogoIcon className="h-10 w-auto" />
        <div className="hidden 2xl:flex space-x-8">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </div>
        <button className="2xl:hidden" onClick={() => setMenuOpen(o => !o)}>
          <HamburgerIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      {menuOpen && (
        <div className="2xl:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90">
          <NavLink block href="#">Home</NavLink>
          <NavLink block href="#about">About</NavLink>
          <NavLink block href="#faq">FAQ</NavLink>
          <NavLink block href="#contact">Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}