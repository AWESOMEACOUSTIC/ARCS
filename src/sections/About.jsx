import React from 'react';
import arcsImage from '../assets/images/arcs-image.png';

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#01061B] text-white py-10">
      <div className="animated-gradient relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden font-serif text-white md:hidden">
        <div className="absolute inset-y-0 left-0">
          <img src="Ellipse 5.svg" alt="Left decoration" />
        </div>
        <div className="absolute inset-y-0 right-0">
          <img src="Ellipse 6.svg" alt="Right decoration" />
        </div>

        <div className="order-1 w-full items-center justify-center p-4">
          <img
            src={arcsImage}
            alt="Image for mobile and iPad"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex-2 relative order-2 flex-col p-2">
          <div className="flex flex-col">
            <h1 className="mb-6 text-nowrap font-rugen text-3xl font-bold">
              WHAT IS ARCS?
            </h1>

            <div className="mb-8 max-w-[100%] font-source-serif text-lg leading-relaxed">
              <p>
                {`Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society.`}
              </p>
              <p>
                {`Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.`}
              </p>
            </div>

            <div className="mb-6 max-w-full text-lg leading-relaxed">
              <p>
                {`ARCS'25 is the ultimate celebration of technology's transformative power, uniting visionaries, pioneers, and enthusiasts alike.`}
              </p>
              <p>
                {`This grand event fosters a dynamic platform for innovation to flourish.`}
              </p>
            </div>
          </div>
          <div className="flex justify-center p-6">
            <img src="arrow2.svg" className="animated-arrow" alt="Arrow" />
          </div>
        </div>
      </div>

      <div className="container mx-auto hidden px-6 md:flex md:flex-row md:items-center md:space-x-12">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-[rugen]">What is ARCS?</h2>
          <p className="mt-12 text-lg text-gray-300 font-[switzer-regular]">
            Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society. Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.          </p>
          <p className="mt-5 text-lg text-gray-300 font-[switzer-regular]">
            ARCS'24 is the ultimate celebration of technology's transformative power. This grand event unites visionaries, pioneers, and enthusiasts alike, fostering a dynamic platform for innovation to flourish.
          </p>
        </div>
        <div className="w-full h-full md:w-1/2 overflow-hidden">
          <div className="w-full h-80 md:h-full relative">
            <img
              src={arcsImage}
              alt="ARCS Event"
              className="w-full h-full object-cover mix-blend-color-dodge 
              shadow-[inset_15px_4px_70px_rgba(1,6,27,1)]
              [clip-path:path('M17%_0_L100%_0_L100%_100%_L17%_100%_C0_50%_17%_0_17%_0_Z')]
              [-webkit-clip-path:path('M17%_0_L100%_0_L100%_100%_L17%_100%_C0_50%_17%_0_17%_0_Z')]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
