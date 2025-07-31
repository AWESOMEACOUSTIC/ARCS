import React from 'react';
import { smoothScrollToSection } from '../../utils/smoothScroll';
import ButtonBorder from '../../assets/svg/button.svg?react';

export default function EventButton({ children, sectionId, onClick }) {
  const handleClick = () => {
    if (sectionId) {
      smoothScrollToSection(sectionId);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative cursor-pointer w-[40vw] py-5 flex items-center justify-center sm:inline-block my-2 hover:scale-105  transition-transform"
    >
      <ButtonBorder className="absolute inset-1 w-full h-full" />
      <span className="relative font-[rugen] text-[2em] text-white font-bold uppercase">
        {children}
      </span>
    </button>
  );
}