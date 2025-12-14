import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = "", children, light = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 ${light ? 'bg-white' : 'bg-slate-50'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="w-24 h-1 bg-academic-600 mx-auto rounded-full mb-4"></div>
            )}
            {subtitle && (
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};