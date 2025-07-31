import React, { useRef, useEffect } from 'react';
import ARCS from '../../assets/svg/ARCS.svg';
import ARCS1 from '../../assets/svg/ARCS-1.svg';
import ARCS2 from '../../assets/svg/ARCS-2.svg';
import ARCS3 from '../../assets/svg/ARCS-3.svg';
import ARCS4 from '../../assets/svg/ARCS-4.svg';
import ARCS5 from '../../assets/svg/ARCS-5.svg';
import { gsap } from 'gsap';

const HoverGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = Array.from(containerRef.current.querySelectorAll('img'));
    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0.18, ease: 'power1.inOut' } });

    images.forEach((img, i) => {
      tl.to(img, { autoAlpha: 1 })      // fade in
        .to(img, { autoAlpha: 0, delay: 0.1 }); // hold then fade out
    });

    return () => tl.kill();
  }, []);

  const imageUrls = [
    ARCS,
    ARCS1,
    ARCS2,
    ARCS3,
    ARCS4,
    ARCS5,
  ];

  return (
    <div ref={containerRef} className="flex justify-center items-center w-full min-h-screen overflow-hidden">
      {imageUrls.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`talk-${idx + 1}`}
          className="absolute top-0 left-0 w-full h-full object-contain opacity-0"
        />
      ))}
    </div>
  );
};

export default HoverGallery;
