import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-academic-900 to-slate-800 text-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-academic-500/30 rounded-full bg-academic-500/10 backdrop-blur-sm">
          <span className="text-academic-100 font-medium tracking-wide text-sm uppercase">
            Open for Research & Higher Study Opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight">
          Sohel Rana
        </h1>

        <h2 className="text-xl md:text-2xl text-academic-100 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Software Engineer | Python & Django Specialist | Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 italic font-light">
          "Building intelligent, scalable, and sustainable software systems for the future."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          {/* View Portfolio Button */}
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-white text-academic-900 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-8 py-3.5 bg-academic-600/20 border border-academic-500/50 text-white font-medium rounded-lg hover:bg-academic-600/30 backdrop-blur-sm transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>

          {/* Download CV Button (Updated) */}
          <a
            href="/Sohel_Rana_CV.pdf"
            download="Sohel_Rana_CV.pdf"
            className="px-8 py-3.5 bg-transparent border border-slate-500 text-slate-200 font-medium rounded-lg hover:bg-slate-800/50 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
