import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '' }) => (
  <section className={`py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg mx-4 md:mx-auto max-w-4xl text-center relative z-10 overflow-hidden ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;