import React, { useRef } from 'react';
import SponsorGrid from '../components/ui/SponsorGrid';
import SectionTitle from '../components/ui/SectionTitle';
import { sponsorsData } from '../data/sponsorsData';

const SponsorsSection = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="sponsors"
      ref={containerRef}
      className="relative w-full h-[50vw] bg-[#01061B] text-white overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <SectionTitle>
          Our Previous <br /> Sponsors
        </SectionTitle>
      </div>

      <SponsorGrid sponsors={sponsorsData} />
    </section>
  );
};

export default SponsorsSection;
