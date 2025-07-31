import React from 'react';
import Navbar from '../components/navbar/Navbar';
import EventButton from '../components/ui/EventButton';
import Marquee from '../components/ui/Marquee';
import HoverGallery from '../components/ui/HoverGallery';
export default function LandingPage() {
  const marqueeItems1 = ['EXCITING PRIZE POOL', 'INTERNATIONAL SPEAKERS', '100xFun', 'Bombastic', 'EXCITING PRIZE POOL', 'INTERNATIONAL SPEAKERS', '100xFun', 'Bombastic'];
  const marqueeItems2 = ['HackBattle', 'Cicada', 'HackBattle', 'Cicada', 'HackBattle', 'Cicada', 'HackBattle', 'Cicada', 'HackBattle', 'Cicada', 'HackBattle', 'Cicada'];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-[#000016] to-[#0a0a1f] text-white overflow-hidden">
      <Navbar />
      <main className="container mx-auto flex flex-col items-center justify-center text-center pt-32 2xl:pt-0">
        <div className="w-[30vw] relative h-[9rem] md:h-[12rem] lg:h-[14rem]">
          <HoverGallery />
        </div>
        <p className="mt-2 text-[1.4em] 2xl:text-[2em] sm:text-4xl font-[rugen] uppercase leading-[1.54em] tracking-wider">
          Our flagship events <br /> are <span className="text-gradient">Back</span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-10">
          <EventButton sectionId="hackbattle">Hackbattle</EventButton>
          <EventButton sectionId="cicada">Cicada</EventButton>
        </div>
      </main>
      <Marquee items={marqueeItems1} rotate={-4} bottom="5%" left="0%" width="100%" />
      <Marquee items={marqueeItems2} rotate={3} bottom="4%" left="0%" width="100%" reverse={true} />
    </section>
  );
}