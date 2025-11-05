
import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
}

const Quote: React.FC<QuoteProps> = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-sky-400 p-4 my-6 bg-sky-900/20 rounded-r-lg neon-shadow-blue">
      <p className="text-xl italic font-medium text-sky-200">
        {children}
      </p>
    </blockquote>
  );
};

export default Quote;
