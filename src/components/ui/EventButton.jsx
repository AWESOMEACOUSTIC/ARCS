import React from 'react';
import ButtonBorder from '../../assets/svg/button.svg?react';

export default function EventButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer px-8 py-3 block sm:inline-block my-2"
    >
      <ButtonBorder className="absolute inset-0 w-full h-full" />
      <span className="relative text-white font-bold uppercase">
        {children}
      </span>
    </button>
  );
}