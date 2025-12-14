import React from 'react';
import { Section } from './Section';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" subtitle="A track record of engineering excellence in enterprise environments." light>
      <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-academic-200 space-y-12">
        
        {/* Role 1: Innoweb */}
        <div className="relative">
          <div className="absolute -left-[41px] bg-academic-600 p-2 rounded-full text-white ring-4 ring-white">
            <Briefcase size={16} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <span className="text-sm font-semibold text-academic-600 uppercase tracking-wider">Current Role</span>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-1 mb-2">
                <h3 className="text-xl font-bold text-slate-900">Senior Developer (Full-Stack)</h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap mt-2 md:mt-0 w-fit">Dec 2022 – Present</span>
            </div>
            <p className="text-slate-600 font-medium mb-4">Innoweb Ltd. (Product: robo2mation.com) • Dhaka, Bangladesh</p>
            
            <ul className="list-disc ml-5 space-y-3 text-slate-700 text-sm leading-relaxed">
              <li>
                <strong className="text-slate-900">Full-Stack Development:</strong> Developed core backend and frontend features for the Workflow Automation and Document Management Systems (DMS) using Django REST Framework and modern JavaScript/UI tools.
              </li>
              <li>
                <strong className="text-slate-900">Intelligent Automation:</strong> Built advanced document-processing pipelines integrating Tesseract OCR, GPT-based automation, and WeasyPrint PDF generation.
              </li>
              <li>
                <strong className="text-slate-900">Business Impact:</strong> Delivered major client-specific features by converting complex business workflows into scalable, secure software solutions; contributed to the mobile app (Flutter) for extended platform reach.
              </li>
              <li>
                <strong className="text-slate-900">System Integration & Security:</strong> Integrated large enterprise systems (banking & telecom) using secure LDAP/SSO and API-based communication; strengthened security by resolving VAPT findings and optimizing PostgreSQL schemas.
              </li>
              <li>
                <strong className="text-slate-900">DevOps & Quality:</strong> Collaborated with DevOps on Docker deployments, CI/CD (GitHub Actions), and production stability; worked with SQA to enhance testing quality and ensure reliable releases.
              </li>
              <li>
                <strong className="text-slate-900">Mentorship & Leadership:</strong> Mentored junior developers, provided rigorous code reviews, and guided best practices in API design and secure development.
              </li>
            </ul>
          </div>
        </div>

        {/* Role 2: PyronLab */}
        <div className="relative">
          <div className="absolute -left-[41px] bg-slate-400 p-2 rounded-full text-white ring-4 ring-white">
            <Briefcase size={16} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Previous Role</span>
             <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-1 mb-2">
                <h3 className="text-xl font-bold text-slate-900">Junior Software Engineer</h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap mt-2 md:mt-0 w-fit">Oct 2020 – Nov 2022</span>
            </div>
            <p className="text-slate-600 font-medium mb-4">PyronLab • Dhaka, Bangladesh</p>
            
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm leading-relaxed">
              <li>Contributed to full-stack development for social platforms, real-estate portals, and utilities.</li>
              <li>Developed and maintained REST APIs and interactive frontends using Django, jQuery, and HTML/CSS.</li>
              <li>Optimized application performance through debugging and refactoring in a rapid development environment.</li>
              <li>Collaborated effectively within an Agile startup team on high-impact features.</li>
            </ul>
          </div>
        </div>

      </div>
    </Section>
  );
};