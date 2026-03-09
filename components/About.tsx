import React from 'react';
import { Section } from './Section';
import { Zap, Server, Brain, Cloud, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Software engineer specializing in enterprise systems, intelligent automation, and scalable backend architectures."
      light
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-justify">

          <p>
            I hold a <strong>B.Sc. in Computer Science & Engineering</strong> and bring over <strong>5 years of professional experience</strong> building enterprise software systems and scalable backend applications. My primary focus is backend engineering and intelligent automation using technologies such as <strong>Python, Django, Django REST Framework, PostgreSQL, and modern JavaScript frameworks and libraries</strong>.
          </p>

          <p>
            My professional work includes developing enterprise workflow automation platforms, document management systems, and intelligent document processing pipelines powered by OCR and GPT-based technologies. These systems automate complex business operations and are used in real production environments by organizations across sectors including banking, telecommunications, and enterprise services.
          </p>

          <p>
            I enjoy transforming complex real-world problems into reliable and scalable digital systems. My interests include system architecture, intelligent automation, distributed backend systems, and applied artificial intelligence. Through graduate study, I aim to deepen my expertise in advanced software engineering and intelligent systems while contributing to impactful and sustainable technology solutions.
          </p>

        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">
            Research & Professional Interests
          </h3>

          <div className="space-y-4">

            <InterestItem
              icon={Zap}
              title="Efficient & Scalable Software Systems"
              desc="Designing high-performance software systems that optimize computational efficiency, reliability, and scalability in modern enterprise environments."
            />

            <InterestItem
              icon={Server}
              title="Scalable Backend Architecture"
              desc="Engineering distributed backend systems, microservices, and REST API architectures capable of supporting modern enterprise workloads."
            />

            <InterestItem
              icon={Brain}
              title="Intelligent Automation & Applied AI"
              desc="Integrating OCR, NLP, GPT models, and workflow automation to reduce manual processes and improve operational efficiency."
            />

            <InterestItem
              icon={Cloud}
              title="Cloud Infrastructure & DevOps"
              desc="Designing resilient systems through containerization, CI/CD pipelines, infrastructure automation, and performance optimization."
            />

            <InterestItem
              icon={Shield}
              title="Software Reliability & Security"
              desc="Ensuring system robustness through secure API design, fault-tolerant architecture, and efficiency-driven engineering practices."
            />

          </div>
        </div>
      </div>
    </Section>
  );
};

const InterestItem: React.FC<{
  icon: React.ElementType;
  title: string;
  desc: string;
}> = ({ icon: Icon, title, desc }) => (
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