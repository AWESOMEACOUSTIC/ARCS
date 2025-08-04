import React from 'react';
import SponsorCircle from './SponsorCircle';

export default function SponsorGrid({ sponsors }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      {sponsors.map((sponsor, index) => (
        <SponsorCircle
          key={index}
          src={sponsor.src}
          alt={sponsor.alt}
          pos={sponsor.pos}
          index={index}
        />
      ))}
    </div>
  );
}
