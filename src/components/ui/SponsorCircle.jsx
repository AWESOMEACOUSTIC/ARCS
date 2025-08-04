import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SponsorCircle({ src, alt, pos, index }) {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      gsap.to(circle, {
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1 + Math.random(),
        delay: Math.random() * 0.5
      });
    }
  }, []);

  return (
    <div
      ref={circleRef}
      className="sponsor-circle absolute w-24 h-24 md:w-32 md:h-32 bg-[#474C78]/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
      style={{
        ...pos,
        boxShadow: '0 10px 15px rgba(159,157,255,0.289)'
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-12 h-12 md:w-22 md:h-22 object-contain"
      />
    </div>
  );
}
