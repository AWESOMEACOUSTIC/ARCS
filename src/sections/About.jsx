import React from 'react';
import arcsImage from '../assets/images/arcs-image.png'; 

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#01061B] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:space-x-12">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-[rugen]">What is ARCS?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society. Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            ARCS'24 is the ultimate celebration of technology's transformative power. This grand event unites visionaries, pioneers, and enthusiasts alike, fostering a dynamic platform for innovation to flourish.
          </p>
        </div>
        <div className="w-full h-full md:w-1/2 overflow-hidden">
          <div className="w-full h-80 md:h-full relative">
            <img
              src={arcsImage}
              alt="ARCS Event"
              className="w-full h-full object-cover mix-blend-color-dodge"
              style={{
                clipPath: 'path("M17% 0 L100% 0 L100% 100% L17% 100% C0 50% 17% 0 17% 0 Z")',
                boxShadow: 'inset 15px 4px 70px rgba(1,6,27,1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
