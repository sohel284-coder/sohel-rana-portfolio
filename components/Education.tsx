import React from 'react';
import { Section } from './Section';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="Academic background and qualifications.">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* University */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-1 h-full bg-academic-600"></div>
            <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-academic-50 text-academic-700 rounded-full flex items-center justify-center border border-academic-100">
                    <GraduationCap size={28} />
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">United International University</h3>
                        <p className="text-slate-500 text-sm">Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 mt-2 md:mt-0 w-fit">
                        <Calendar size={14} />
                        <span>2015 – 2019</span>
                    </div>
                </div>
                <p className="text-lg text-academic-800 font-semibold mb-3">Bachelor of Science in Computer Science & Engineering (CSE)</p>
                
                <div className="space-y-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                        CGPA: 3.04 / 4.00
                    </div>
                    <div className="flex gap-3 items-start text-sm text-slate-600 bg-yellow-50/50 p-3 rounded-lg border border-yellow-100">
                        <Award size={18} className="mt-0.5 text-yellow-600 flex-shrink-0" />
                        <p>Key Achievement: Awarded 50% and 25% academic scholarships multiple times based on semester results.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* College & School Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            {/* College */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-academic-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 leading-tight">Cambrian School & College</h4>
                        <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <p className="text-sm font-medium text-slate-700 mb-1">Higher Secondary School Certificate (HSC)</p>
                <p className="text-xs text-slate-500 mb-4">Science Group</p>
                
                <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-3">
                    <span className="text-slate-500 flex items-center gap-1"><Calendar size={12}/> 2011 – 2013</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">GPA: 5.00 / 5.00</span>
                </div>
            </div>

            {/* School */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-academic-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 leading-tight">Dhalla Union Council High School</h4>
                        <p className="text-xs text-slate-500">Singair, Bangladesh</p>
                    </div>
                </div>
                <p className="text-sm font-medium text-slate-700 mb-1">Secondary School Certificate (SSC)</p>
                <p className="text-xs text-slate-500 mb-4">Science Group</p>
                
                <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-3">
                    <span className="text-slate-500 flex items-center gap-1"><Calendar size={12}/> 2009 – 2011</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">GPA: 4.88 / 5.00</span>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};