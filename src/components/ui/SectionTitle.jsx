import React from 'react';

export default function SectionTitle({ children, className = '', centered = true }) {
  const baseClasses = "text-4xl md:text-6xl font-[rugen] uppercase mb-12";
  const centeredClasses = centered ? "text-center" : "";
  const combinedClasses = `${baseClasses} ${centeredClasses} ${className}`.trim();

  return (
    <h2 className={combinedClasses}>
      {children}
    </h2>
  );
}
