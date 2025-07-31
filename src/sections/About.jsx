import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#1a1a2e] text-white flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-7xl font-[rugen] uppercase mb-8">About ARCS</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl mb-6 leading-relaxed">
            ARCS (Association for Research in Computer Science) is the premier tech society of our institution, 
            dedicated to fostering innovation and excellence in computer science.
          </p>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            We organize cutting-edge events, workshops, and competitions that challenge minds and create 
            the next generation of tech leaders. Join us in our mission to revolutionize the digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-purple-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p>Pushing boundaries with cutting-edge technology and creative solutions.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p>Building a strong network of passionate tech enthusiasts and professionals.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p>Striving for the highest standards in everything we do and learn.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
