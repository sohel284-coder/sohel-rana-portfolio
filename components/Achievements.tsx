import React from 'react';
import { Section } from './Section';
import { Award, BookOpen, Star, Users } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Certificates, Awards & Activities" subtitle="Academic recognition, professional learning, and university involvement." light>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                    <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Certificate</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">Python and Django for Web and API Development</strong>
                        <p className="text-sm text-slate-600">CDIP</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 text-yellow-700 rounded-full">
                    <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Scholarships</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-yellow-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">Merit-Based Academic Scholarships</strong>
                        <p className="text-sm text-slate-600">Received multiple merit-based academic scholarships during undergraduate study.</p>
                    </div>
                </li>
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-yellow-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">Government Talent-Pool Scholarships</strong>
                        <p className="text-sm text-slate-600">Received government talent-pool scholarships during academic study.</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-full">
                    <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Extra-Curricular</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-emerald-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">UIU Literature and Writers' Forum</strong>
                        <p className="text-sm text-slate-600">Active member supporting literary events, academic discussions, and student collaboration.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </Section>
  );
};
