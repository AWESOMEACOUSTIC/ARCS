import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#2a2a3e] to-[#000016] text-white flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-7xl font-[rugen] uppercase mb-16">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl mb-12 opacity-90">
            Ready to join the future of tech? Get in touch with us!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-purple-900/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Contact Info</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="opacity-90">arcs@institution.edu</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="opacity-90">Computer Science Department<br/>Main Campus Building</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Follow Us</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-lg">Social Media</h4>
                  <p className="opacity-90">@arcs_official</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Discord</h4>
                  <p className="opacity-90">ARCS Community Server</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">GitHub</h4>
                  <p className="opacity-90">github.com/arcs-official</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6">Join our community and be part of the next big thing in tech!</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Join ARCS Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
