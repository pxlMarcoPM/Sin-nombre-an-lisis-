
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-4">
        {title}
      </h2>
      <div className="space-y-4 text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default Section;
