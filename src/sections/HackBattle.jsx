import React from 'react';
import EventButton from '../components/ui/EventButton';

export default function HackBattle() {
  return (
    <section id="hackbattle" className="min-h-screen bg-gradient-to-b from-[#000016] to-[#1a0a2e] text-white flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl sm:text-8xl font-[rugen] uppercase mb-8 text-gradient">
          HackBattle
        </h2>
        <p className="text-2xl sm:text-3xl mb-12 font-[rugen] uppercase tracking-wider">
          The Ultimate Coding Showdown
        </p>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
            Join the most intense 48-hour hackathon where innovation meets competition. 
            Build groundbreaking solutions, compete with the best minds, and win amazing prizes!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-500/30">
              <h3 className="text-3xl font-bold mb-4 text-pink-300">48 Hours</h3>
              <p>Non-stop coding marathon</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">$10,000</h3>
              <p>Prize pool for winners</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">500+</h3>
              <p>Participants expected</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg mb-8">
            <h3 className="text-3xl font-bold mb-4">Event Highlights</h3>
            <ul className="text-lg space-y-2">
              <li>• Industry mentors and judges</li>
              <li>• Workshops and tech talks</li>
              <li>• Networking opportunities</li>
              <li>• Free food and swag</li>
              <li>• Job placement opportunities</li>
            </ul>
          </div>
        </div>
        
        <EventButton onClick={() => alert('Registration coming soon!')}>
          Register for HackBattle
        </EventButton>
      </div>
    </section>
  );
}
