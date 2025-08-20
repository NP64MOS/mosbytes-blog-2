import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '' }) => (
  <section className={`py-16 bg-gray-50 rounded-2xl shadow-md mx-4 md:mx-auto max-w-4xl text-center transition hover:shadow-lg relative z-10 cursor-pointer ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;