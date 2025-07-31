import React from 'react';
import Navbar from '../components/navbar/Navbar';
import EventButton from '../components/ui/EventButton';
import Marquee from '../components/ui/Marquee';

export default function Hero() {
  const marqueeItems1 = ['EXCITING PRIZE POOL', 'INTERNATIONAL SPEAKERS', '100xFun', 'Bombastic'];
  const marqueeItems2 = ['HackBattle', 'Cicada', 'HackBattle', 'Cicada'];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000016] to-[#0a0a1f] text-white overflow-hidden">
      <Navbar />
      <main className="container mx-auto flex flex-col items-center justify-center text-center pt-32 2xl:pt-48 px-4">
        <h1 className="text-7xl sm:text-9xl font-[rugen] uppercase">
          ARCS
        </h1>
        <p className="mt-6 text-2xl sm:text-4xl font-[rugen] uppercase tracking-wider">
          Our flagship events are <span className="text-gradient">Back</span>
        </p>
        <div className="mt-12 flex font-[rugen] flex-col sm:flex-row gap-10">
          <EventButton>Hackbattle</EventButton>
          <EventButton>Cicada</EventButton>
        </div>
      </main>
      <Marquee items={marqueeItems1} rotate={-4} bottom="5%" left="0%" width="100%" />
      <Marquee items={marqueeItems2} rotate={3} bottom="4%" left="0%" width="100%" />
    </div>
  );
}