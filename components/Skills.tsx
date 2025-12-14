import React from 'react';
import { Section } from './Section';
import { SkillCategory } from '../types';
import { Server, Brain, Layout, Settings, Shield, Terminal } from 'lucide-react';

const skillData: SkillCategory[] = [
  {
    title: "Backend Engineering",
    icon: Server,
    skills: ["Python", "Django", "FastAPI", "Django REST Framework (DRF)", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Celery", "WebSockets", "System Design"]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vue.js", "Redux", "Context API", "jQuery", "Bootstrap", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: ["Tesseract OCR", "OpenAI GPT API Integration", "Intelligent Document Processing", "Automated Workflows"]
  },
  {
    title: "DevOps & Systems",
    icon: Settings,
    skills: ["Docker", "GitHub Actions (CI/CD)", "Linux Administration", "Nginx", "Gunicorn", "AWS (Basic)", "DigitalOcean"]
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["VAPT Remediation", "LDAP/SSO Integration", "Secure API Design", "OAuth 2.0", "JWT Authentication", "Role-Based Access Control"]
  },
  {
    title: "Tools & Collaboration",
    icon: Terminal,
    skills: ["Git/GitHub", "Postman", "Jira", "VS Code", "Agile/Scrum", "Swagger/OpenAPI"]
  }
];

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Proficiency" subtitle="A comprehensive toolkit for building modern, scalable software solutions.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillData.map((category, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
              <category.icon className="text-academic-600 w-6 h-6" />
              <h3 className="font-bold text-slate-800 text-lg">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1 bg-slate-50 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};