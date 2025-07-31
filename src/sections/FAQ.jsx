import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is ARCS?",
      answer: "ARCS is the Association for Research in Computer Science, our institution's premier tech society focused on innovation and excellence."
    },
    {
      question: "How can I join ARCS?",
      answer: "You can join ARCS by participating in our events, workshops, and competitions. Keep an eye on our announcements for membership drives."
    },
    {
      question: "What events does ARCS organize?",
      answer: "We organize various events including HackBattle (our flagship hackathon), Cicada (coding competition), tech talks, and workshops."
    },
    {
      question: "Are there any prerequisites to participate?",
      answer: "No specific prerequisites! We welcome all students regardless of their current skill level. Our events are designed for various experience levels."
    },
    {
      question: "What are the benefits of joining ARCS?",
      answer: "Members get access to exclusive workshops, networking opportunities, mentorship, project collaborations, and priority registration for events."
    }
  ];

  return (
    <section id="faq" className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#2a2a3e] text-white flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:text-7xl font-[rugen] uppercase text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
                {faq.question}
              </h3>
              <p className="text-lg leading-relaxed opacity-90">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
