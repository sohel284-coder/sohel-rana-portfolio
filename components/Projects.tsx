import React from 'react';
import { Section } from './Section';
import { Project } from '../types';
import { ExternalLink, Database, Cpu, FileText, CheckCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className='bg-slate-50'>
      <Section id="projects" title="Major Projects" subtitle="Enterprise-grade systems engineered for scalability and impact.">
        
        {/* Project 1 */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
          <div className="md:flex">
            <div className="p-8 md:w-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Robo2mation Document Management System (DMS)</h3>
              </div>
              <p className="text-academic-600 font-medium mb-4">Role: Backend Developer</p>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                An enterprise-grade DMS designed for high-volume document storage, retrieval, and compliance. The system features a custom metadata engine, secure role-based access control, and robust versioning to ensure data integrity across the document lifecycle.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Metadata Engine & Versioning</li>
                    <li>Maker-Checker Workflow</li>
                    <li>Activity Reporting & Audit Logs</li>
                    <li>Granular Access Control</li>
                  </ul>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Engineering Impact</h4>
                  <p className="text-sm text-blue-800">
                    Significantly improved document lifecycle efficiency, ensured audit compliance for enterprise clients, and reduced manual filing operations by over 60%.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
          <div className="md:flex">
            <div className="p-8 md:w-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Robo2mation Workflow Management System (WMS)</h3>
              </div>
              <p className="text-academic-600 font-medium mb-4">Role: Backend Developer</p>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                A comprehensive process automation platform enabling dynamic workflow creation. The system supports complex hierarchical routing, task escalation, and department-specific logic, integrated with an AI-driven summarization engine.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Dynamic Workflow Designer</li>
                    <li>Hierarchy-based Routing</li>
                    <li>AI Task Summarization</li>
                    <li>Performance Tracking Logs</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-amber-900 mb-2">Engineering Impact</h4>
                  <p className="text-sm text-amber-800">
                    Automated critical enterprise workflows, reducing turnaround time (TAT) significantly and providing real-time visibility into operational bottlenecks.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="tag">Django REST</span>
                <span className="tag">React Integration</span>
                <span className="tag">Celery</span>
                <span className="tag">Redis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
          <div className="md:flex">
            <div className="p-8 md:w-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Intelligent Document Processing (OCR + GPT)</h3>
              </div>
              <p className="text-academic-600 font-medium mb-4">Role: Software Engineer (Automation Focus)</p>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Designed a full-stack data extraction pipeline utilizing optical character recognition and large language models. The system ingests unstructured PDF/Image data, classifies documents, and generates structured JSON outputs for downstream ERP integration.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                 <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">Tech Stack</h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Tesseract OCR Engine</li>
                    <li>GPT-4 / LLM Integration</li>
                    <li>Python PDF Libraries</li>
                    <li>Async Task Queues</li>
                  </ul>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-2">Engineering Impact</h4>
                  <p className="text-sm text-emerald-800">
                    Reduced manual data entry time from hours to seconds per batch, achieving 99% accuracy in structured data generation through intelligent validation layers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Projects Grid */}
      <Section id="additional-projects" title="Additional Works" subtitle="Diverse applications across FinTech, E-commerce, and Utilities." light>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MiniProjectCard title="Nanaya.co" desc="Personality analysis & behavioral scoring system (US Product)." />
            <MiniProjectCard title="PyronConverter.com" desc="Universal unit converter for engineering & scientific metrics." />
            <MiniProjectCard title="ChangeUnit.com" desc="Advanced measurement conversion platform with API support." />
            <MiniProjectCard title="Imarat.com.bd" desc="Real-estate listing and property management portal." />
            <MiniProjectCard title="Elsa Calendar App" desc="Meeting scheduling system with timezone intelligence (Japan Client)." />
            <MiniProjectCard title="E-commerce Store" desc="Full-stack shopping platform with secure payment integration." />
        </div>
      </Section>

      {/* Academic Projects */}
      <Section id="academic-projects" title="Academic Projects" subtitle="Foundational research and system design implementations.">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-l-4 border-academic-600 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Blood Donation Management System</h3>
                <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-1 rounded uppercase mb-3 inline-block">Capstone Project</span>
                <p className="text-slate-600 text-sm mb-4">
                    Comprehensive system design focusing on Requirements Engineering. Created detailed Data Flow Diagrams (DFD) and Entity Relationship Diagrams (ERD) to model complex donor-recipient relationships.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-academic-600 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Book Shop</h3>
                <span className="text-xs font-bold bg-academic-100 text-academic-700 px-2 py-1 rounded uppercase mb-3 inline-block">4.0 GPA Project</span>
                <p className="text-slate-600 text-sm mb-4">
                    A fully functional e-commerce platform developed for the Software Engineering course. Emphasized secure user authentication, transactional integrity, and clean UI/UX principles.
                </p>
            </div>
        </div>
      </Section>
    </div>
  );
};

const MiniProjectCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
    <div className="group p-5 bg-white border border-slate-100 rounded-lg hover:border-academic-400 hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-slate-800 group-hover:text-academic-700 transition-colors">{title}</h4>
            <ExternalLink size={16} className="text-slate-400 group-hover:text-academic-500" />
        </div>
        <p className="text-sm text-slate-600">{desc}</p>
    </div>
);