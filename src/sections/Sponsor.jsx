import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import echo3D from '../assets/svg/echo3D.svg';
import axure from '../assets/svg/axure.svg';
import interlock from '../assets/svg/interlock.svg';
import fashionfactory from '../assets/svg/fashionfactory.svg';
import capsule from '../assets/svg/capsule.svg';
import galaxyDreams from '../assets/svg/galaxy_cinema_yellow.svg';
import boltshift from '../assets/svg/boltshift.svg';
import featherdev from '../assets/svg/featherdev.svg';

const sponsors = [
  { src: echo3D,         alt: 'echo3D',           pos: { top: '5%',  left: '20%' } },
  { src: axure,          alt: 'Axure',            pos: { top: '5%',  left: '50%' } },
  { src: interlock,      alt: 'Interlock',        pos: { top: '5%',  left: '80%' } },
  { src: fashionfactory, alt: 'Fashion Factory',  pos: { top: '40%', left: '4%' } },
  { src: capsule,        alt: 'Capsule',          pos: { top: '40%', left: '90%' } },
  { src: galaxyDreams,   alt: 'Galaxy Cinema',    pos: { bottom: '9%', left: '17%' } },
  { src: boltshift,      alt: 'Boltshift',        pos: { bottom: '12%', left: '56%' } },
  { src: featherdev,     alt: 'Feather Dev',      pos: { bottom: '13%', left: '80%' } },
];

const SponsorsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const circles = gsap.utils.toArray('.sponsor-circle');
    circles.forEach((circle) => {
      gsap.to(circle, {
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1 + Math.random(),
        delay: Math.random() * 0.5
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[50vw] bg-[#01061B] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <h2 className="text-4xl text-center md:text-6xl font-[rugen] uppercase mb-12">
        Our Previous <br /> Sponsors
      </h2>

      {sponsors.map(({ src, alt, pos }, i) => (
        <div
          key={i}
          className="sponsor-circle absolute w-24 h-24 md:w-32 md:h-32 bg-[#474C78]/90 rounded-full flex items-center justify-center"
          style={{
            ...pos,
            boxShadow: '0 10px 15px rgba(159,157,255,0.289)'
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-12 h-12 md:w-22 md:h-22"
          />
        </div>
      ))}
    </section>
  );
};

export default SponsorsSection;
