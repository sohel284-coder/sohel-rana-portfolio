import {
  ArrowUpRight,
  Plus,
  BookOpen,
  Mail,
  Timer,
  Workflow,
} from "lucide-react";
import { Section } from "./Section";
import { projects, contributions } from "../data";
const icons = [BookOpen, Mail, Timer];
export function Projects() {
  return (
    <Section
      id="work"
      number="02"
      title="Useful software. Real work."
      subtitle="Enterprise product contributions, followed by tools I’m building on my own."
    >
      <article className="featured-project">
        <div className="featured-main">
          <div className="project-meta">
            <span>01 / PROFESSIONAL PRODUCT</span>
            <span className="status">Ongoing contributions</span>
          </div>
          <h3>
            Robo2mation<span>↗</span>
          </h3>
          <p className="project-subtitle">
            Workflow automation & document management
          </p>
          <p>
            I contribute to the platform at DataFort Limited, helping teams
            configure business processes, route approvals, and manage their
            documents in one place.
          </p>
          <p>
            My work spans backend services, the interfaces people use every day,
            and the integrations and background tasks behind them.
          </p>
          <div className="tags">
            {[
              "Python",
              "Django / DRF",
              "PostgreSQL",
              "JavaScript",
              "Celery / Redis",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            href="https://robo2mation.com/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Visit product website <ArrowUpRight size={16} />
          </a>
        </div>
        <aside className="featured-aside">
          <Workflow size={32} />
          <p className="eyebrow">My contribution</p>
          <h4>
            Connecting the pieces
            <br />
            of everyday operations.
          </h4>
          <div>
            <span>01</span> Configurable processes
          </div>
          <div>
            <span>02</span> Documents & data
          </div>
          <div>
            <span>03</span> Integrations & access
          </div>
          <div>
            <span>04</span> AI-assisted extraction
          </div>
        </aside>
        <details className="project-details">
          <summary>
            Inside my work on Robo2mation <Plus size={18} />
          </summary>
          <div className="contribution-grid">
            {contributions.map((item) => (
              <div key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </details>
      </article>
      <div className="personal-heading">
        <h3>Personal projects</h3>
        <span>Ideas put into practice</span>
      </div>
      <div className="personal-projects">
        {projects.map((project, index) => {
          const Icon = icons[index];
          return (
            <article key={project.name} className="personal-project">
              <div className="project-top">
                <Icon size={25} />
                <span className="project-number">{project.number}</span>
              </div>
              <span className="status">{project.status}</span>
              <h3>{project.name}</h3>
              <p className="project-category">{project.category}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <details>
                <summary>
                  Project notes <Plus size={16} />
                </summary>
                <p>{project.detail}</p>
              </details>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
