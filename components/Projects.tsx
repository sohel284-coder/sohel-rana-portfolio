import React from 'react';
import { Section } from './Section';
import { ExternalLink, Database, Cpu, FileText } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="bg-slate-50">

      <Section
        id="projects"
        title="Major Projects"
        subtitle="Enterprise-grade systems engineered for scalability, automation, and real-world operational impact."
      >

        {/* Project 1 */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
          <div className="md:flex">
            <div className="p-8 md:w-full">

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                  <Database size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Robo2mation Document Management System (DMS)
                </h3>
              </div>

              <p className="text-academic-600 font-medium mb-4">
                Role: Backend Developer
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Enterprise-grade document management platform designed for high-volume
                document storage, retrieval, and regulatory compliance. The system
                includes a custom metadata engine, document version control, and
                granular role-based access management to ensure secure document
                lifecycle handling.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Key Features
                  </h4>

                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Custom Metadata Engine</li>
                    <li>Document Version Control</li>
                    <li>Maker-Checker Approval Workflow</li>
                    <li>Granular Access Control</li>
                    <li>Audit Logs & Activity Reporting</li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Engineering Impact
                  </h4>

                  <p className="text-sm text-blue-800">
                    Improved enterprise document lifecycle efficiency and reduced
                    manual filing operations by over 60%, while ensuring audit
                    compliance for regulated organizations.
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-2">
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">RBAC Security</span>
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

                <h3 className="text-2xl font-bold text-slate-900">
                  Robo2mation Workflow Management System (WMS)
                </h3>
              </div>

              <p className="text-academic-600 font-medium mb-4">
                Role: Backend Developer
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Enterprise workflow automation platform enabling organizations
                to build and manage dynamic business processes. The system supports
                hierarchical task routing, approval pipelines, real-time activity
                tracking, and AI-powered task summarization.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Key Features
                  </h4>

                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Dynamic Workflow Designer</li>
                    <li>Hierarchical Task Routing</li>
                    <li>AI-based Task Summarization</li>
                    <li>Operational Performance Tracking</li>
                  </ul>
                </div>

                <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    Engineering Impact
                  </h4>

                  <p className="text-sm text-amber-800">
                    Automated complex internal workflows and significantly
                    reduced process turnaround time (TAT) while improving
                    operational transparency across departments.
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-2">
                <span className="tag">Django REST</span>
                <span className="tag">Celery</span>
                <span className="tag">Redis</span>
                <span className="tag">React Integration</span>
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

                <h3 className="text-2xl font-bold text-slate-900">
                  Intelligent Document Processing (OCR + GPT)
                </h3>
              </div>

              <p className="text-academic-600 font-medium mb-4">
                Role: Software Engineer (Automation Focus)
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Designed an AI-powered document processing pipeline combining
                OCR technology and GPT-based language models to extract
                structured information from unstructured PDFs and images.
                The system converts raw document inputs into validated JSON
                outputs ready for ERP and workflow integration.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Tech Stack
                  </h4>

                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Tesseract OCR Engine</li>
                    <li>OpenAI GPT / LLM APIs</li>
                    <li>Python PDF Processing</li>
                    <li>Async Task Queues</li>
                  </ul>
                </div>

                <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-2">
                    Engineering Impact
                  </h4>

                  <p className="text-sm text-emerald-800">
                    Reduced manual document processing time from hours to
                    seconds while achieving high accuracy through automated
                    validation and AI-assisted data extraction.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </Section>

    </div>
  );
};