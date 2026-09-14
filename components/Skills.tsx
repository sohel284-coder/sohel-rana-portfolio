import {
  ArrowUpRight,
  Code2,
  Database,
  ScanText,
  ShieldCheck,
  Plus,
} from "lucide-react";
import { Section } from "./Section";
import { skills } from "../data";

const supportingIcons = [Code2, Database, ScanText, ShieldCheck];

export function Skills() {
  const [backend, ...supporting] = skills;
  return (
    <Section
      id="skills"
      number="01"
      title="Python at the core. Full-stack in practice."
      subtitle="I work across the backend, interface, and deployment, with a growing focus on applied AI."
    >
      <div className="skills-overview">
        <div className="skills-foundation">
          <p className="eyebrow">{backend.title}</p>
          <h3>
            Python.
            <br />
            Django.
            <br />
            <span>APIs that connect the work.</span>
          </h3>
          <p>
            I build backend services for business applications, from
            configurable workflows to document management and third-party
            integrations.
          </p>
          <p className="foundation-framework">
            Django REST Framework · REST APIs
          </p>
          <a href="#work" className="text-link">
            See it in my work <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="skills-supporting">
          {supporting.map((skill, index) => {
            const Icon = supportingIcons[index];
            return (
              <div className="skill-capability" key={skill.title}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <h3>{skill.title}</h3>
                  <p className="capability-tools">{skill.text}</p>
                  <p className="capability-context">{skill.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <details className="skills-details">
        <summary>
          More tools & technologies <Plus size={18} aria-hidden="true" />
        </summary>
        <div className="skills-detail-list">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.more}</p>
            </div>
          ))}
          <div>
            <h3>Development tools</h3>
            <p>
              Git · Postman · PyCharm · VS Code · Claude Code · Codex · OpenCode
            </p>
          </div>
        </div>
      </details>
    </Section>
  );
}
