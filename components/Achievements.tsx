import React from 'react';
import { Section } from './Section';
import { Award, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Honors & Achievements" subtitle="Recognition of academic excellence and technical capability." light>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                        <strong className="block text-slate-800">University Merit Scholarships</strong>
                        <p className="text-sm text-slate-600">Awarded 50% & 25% tuition waivers for maintaining outstanding academic standing.</p>
                    </div>
                </li>
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-yellow-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">Talent-Pool Government Scholarship</strong>
                        <p className="text-sm text-slate-600">Recognized for excellence in secondary and higher secondary board examinations.</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                    <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Academic & Technical</h3>
            </div>
             <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">Perfect Score (4.0/4.0)</strong>
                        <p className="text-sm text-slate-600">Achieved maximum grade in the Software Engineering Design Project course.</p>
                    </div>
                </li>
                <li className="flex gap-3 items-start">
                    <Star size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                    <div>
                        <strong className="block text-slate-800">CDIP Certification</strong>
                        <p className="text-sm text-slate-600">Certified Professional in Python & Django Web Development.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </Section>
  );
};