import React from 'react';

export default function Marquee({ items = ['DEFAULT', 'TEXT'], rotate = 0, bottom = '0%', left = '0%', width = '40vw' }) {
  return (
    <div
      className="bg-violet-900 absolute flex items-center justify-center"
      style={{
        bottom,
        left,
        width,
        height: '2rem',
        transform: `rotate(${rotate}deg)`,
        background: 'linear-gradient(90deg, #9F9DFF 0%, #682FED 34%, #9F9DFF 71%, #9070F8 100%)',
      }}
    >
      <div className="flex items-center justify-center animate-marquee whitespace-nowrap text-white uppercase">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="px-4 text-xl font-[rugen]">{item}</span>
        ))}
      </div>
    </div>
  );
}