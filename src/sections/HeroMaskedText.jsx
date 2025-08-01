import React from 'react';
import heroImage from '../assets/images/maskedImage.png'; 

const HeroSection = () => {
  const heroTextLines = [
    "TWO CREATIVE",
    "EVENTS FOR THE", 
    "NEXT WAVE OF",
    "LOCAL TALENT"
  ];

  return (
    <section className="bg-[#01061B] text-white py-16">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:space-x-12">
        {/* Text Column */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left font-[rugen]">
          {heroTextLines.map((line, index) => (
            <h1 key={index} className="text-4xl md:text-5xl text-center font-extrabold leading-tight">
              {line}
            </h1>
          ))}
        </div>

        {/* Image Column */}
        <div className="w-full h-100 md:w-1/2 overflow-hidden">
          <img
            src={heroImage}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
