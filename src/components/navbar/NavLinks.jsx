import React from 'react';
import { smoothScrollToSection, smoothScrollToTop } from '../../utils/smoothScroll';

export default function NavLink({ sectionId, children, block = false }) {
  const base = 'relative inline-block';
  const display = block ? 'block w-full text-center my-2' : '';
  
  const handleClick = (e) => {
    e.preventDefault();
    if (sectionId === 'home') {
      smoothScrollToTop();
    } else {
      smoothScrollToSection(sectionId);
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`${base} ${display} px-4 py-2 hover:text-purple-300 transition-colors cursor-pointer`}
    >      
      <div className="absolute inset-0 w-full h-full stroke-white" />
      <span className="relative text-white uppercase tracking-wide">
        {children}
      </span>
    </button>
  );
}