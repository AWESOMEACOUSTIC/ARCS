import React from 'react';
import heroImage from '../assets/images/maskedImage.png'; 

const HeroSection = () => {
  return (
    <section className="bg-[#0D0F19] text-white py-16">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:space-x-12">
        {/* Text Column */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left font-[rugen]">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            TWO CREATIVE EVENTS
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            FOR THE NEXT WAVE
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            OF LOCAL TALENT
          </h1>
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
