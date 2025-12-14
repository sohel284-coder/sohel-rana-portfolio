import React from 'react';
import { Section } from './Section';
import { BookOpen, Code, Globe, Zap, Server, Brain, Cloud, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Bridging the gap between theoretical computer science and industrial application." light>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-justify">
          <p>
            I hold a <strong>B.Sc. in Computer Science & Engineering</strong> and bring over <strong>4 years of professional experience</strong> as a Full Stack Software Engineer. I specialize in building scalable backend systems, intelligent automation pipelines, and secure enterprise platforms using technologies such as <strong>Python, Django, Django REST Framework, FastAPI, PostgreSQL, and modern JavaScript frameworks and library</strong>.
          </p>
          <p>
            My professional work spans across workflow automation, document intelligence, AI-assisted processing, distributed systems, and DevOps engineering. I have contributed to large-scale products including enterprise Document Management Systems (DMS), Workflow Management Systems (WMS), and OCR–GPT driven Intelligent Document Processing pipelines—systems used to automate complex business operations for banks, telecom companies, and international clients.
          </p>
          <p>
            What motivates me most is the opportunity to transform real-world problems into efficient digital ecosystems. I enjoy designing reliable software architectures, optimizing algorithms, and integrating AI where it meaningfully enhances productivity and decision-making. Through graduate study, I hope to strengthen my expertise in advanced software engineering, automation, and system design, and contribute to building intelligent, impactful, and sustainable technology solutions.
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">Research & Professional Interests</h3>
          <div className="space-y-4">
            <InterestItem
              icon={Zap}
              title="Sustainable Software Systems"
              desc="Designing and optimizing software to improve computational efficiency, reduce unnecessary processing, and support energy-aware, sustainable digital transformation."
            />
            <InterestItem
              icon={Server}
              title="Scalable Software Systems"
              desc="Engineering high-performance backend architectures, distributed systems, and cloud-native services that support modern enterprise workloads."
            />
            <InterestItem
              icon={Brain}
              title="Intelligent Automation & Applied AI"
              desc="Integrating OCR, NLP, GPT models, and workflow optimization techniques to automate complex processes and reduce operational redundancy."
            />
            <InterestItem
              icon={Cloud}
              title="Cloud & DevOps Engineering"
              desc="Designing resilient systems through containerization, CI/CD pipelines, infrastructure automation, and performance tuning."
            />
            <InterestItem
              icon={Shield}
              title="Software Reliability & System Optimization"
              desc="Ensuring system robustness through secure API design, fault-tolerant engineering, and efficiency-driven development practices."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const InterestItem: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors group">
    <div className="mt-1 p-2 bg-academic-100 text-academic-800 rounded-md group-hover:bg-academic-200 transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600 leading-snug mt-1">{desc}</p>
    </div>
  </div>
);