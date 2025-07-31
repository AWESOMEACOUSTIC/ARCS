import React from 'react';


export default function NavLink({ href = '#', children, block = false }) {
  const base = 'relative inline-block';
  const display = block ? 'block w-full text-center my-2' : '';
  return (
    <a href={href} className={`${base} ${display} px-4 py-2`}>      
      <div className="absolute inset-0 w-full h-full stroke-white" />
      <span className="relative text-white uppercase tracking-wide">
        {children}
      </span>
    </a>
  );
}