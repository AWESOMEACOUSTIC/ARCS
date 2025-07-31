import React from 'react';
import EventButton from '../components/ui/EventButton';

export default function Cicada() {
  return (
    <section id="cicada" className="min-h-screen bg-gradient-to-b from-[#1a0a2e] to-[#0a1a0a] text-white flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl sm:text-8xl font-[rugen] uppercase mb-8 text-gradient">
          Cicada
        </h2>
        <p className="text-2xl sm:text-3xl mb-12 font-[rugen] uppercase tracking-wider">
          The Ultimate Coding Challenge
        </p>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
            Test your algorithmic prowess in this intense competitive programming contest. 
            Solve complex problems, optimize your code, and climb the leaderboard!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-3xl font-bold mb-4 text-green-300">6 Hours</h3>
              <p>Intensive coding session</p>
            </div>
            <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-500/30">
              <h3 className="text-3xl font-bold mb-4 text-yellow-300">$5,000</h3>
              <p>Prize pool for top coders</p>
            </div>
            <div className="bg-red-900/30 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-3xl font-bold mb-4 text-red-300">300+</h3>
              <p>Competitive programmers</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-lg mb-8">
            <h3 className="text-3xl font-bold mb-4">Competition Features</h3>
            <ul className="text-lg space-y-2">
              <li>• Advanced algorithmic problems</li>
              <li>• Real-time leaderboard</li>
              <li>• Multiple difficulty levels</li>
              <li>• Expert problem setters</li>
              <li>• Internship opportunities</li>
            </ul>
          </div>
        </div>
        
        <EventButton onClick={() => alert('Registration opening soon!')}>
          Register for Cicada
        </EventButton>
      </div>
    </section>
  );
}
