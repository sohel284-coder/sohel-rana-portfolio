import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-academic-950 text-slate-300 py-10 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
            <p className="mb-2 text-white font-serif text-xl tracking-wide">Sohel Rana</p>
            <p className="text-base font-light text-academic-100">Full Stack Software Engineer | Python & Django Developer</p>
            <div className="mt-6 text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Sohel Rana. Designed for Academic & Professional Portfolio.
            </div>
        </div>
    </footer>
  );
};