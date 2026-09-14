import {
  ArrowRight,
  FileText,
  Workflow,
  Braces,
  Check,
  ArrowDown,
  MapPin,
} from "lucide-react";
import { CVLink } from "./CVLink";
export function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow entrance">
            Sohel Rana <span className="dot" /> Software Engineer
          </p>
          <h1 className="entrance">
            Business software,
            <br />
            from workflows
            <br />
            to <span>applied AI.</span>
          </h1>
          <p className="hero-intro entrance">
            I’m Sohel, a software engineer based in Dhaka. I build business
            applications with Python and Django—from approval workflows and
            document tools to the APIs and interfaces behind them.
          </p>
          <p className="hero-follow entrance">
            More recently, I’ve been working with language models to turn
            documents into usable data.
          </p>
          <div className="hero-actions entrance">
            <a className="button primary" href="#work">
              View my work <ArrowRight size={17} />
            </a>
            <CVLink />
          </div>
          <a className="quiet-link entrance" href="#contact">
            Have a role or project in mind? Let’s talk <ArrowRight size={14} />
          </a>
        </div>
        <figure className="workflow-figure entrance">
          <div className="diagram-heading">
            <span className="eyebrow">From input to action</span>
            <span className="diagram-index">01 — 03</span>
          </div>
          <div
            className="workflow-art"
            role="img"
            aria-label="Illustrative workflow: documents and emails move through rules, APIs, and AI assistance into reviewable records."
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="flow-node input-node">
              <span className="node-icon">
                <FileText size={22} />
              </span>
              <div>
                <small>01 / INPUT</small>
                <strong>Documents & emails</strong>
              </div>
              <span className="paper-lines">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="connector first">
              <ArrowDown size={18} />
            </div>
            <div className="flow-node process-node">
              <span className="node-icon">
                <Workflow size={24} />
              </span>
              <div>
                <small>02 / PROCESS</small>
                <strong>Make information useful</strong>
              </div>
              <div className="process-tags">
                <span>Rules</span>
                <span>APIs</span>
                <span>AI assistance</span>
              </div>
            </div>
            <div className="connector second">
              <ArrowDown size={18} />
            </div>
            <div className="flow-node output-node">
              <span className="node-icon">
                <Braces size={23} />
              </span>
              <div>
                <small>03 / OUTPUT</small>
                <strong>Reviewable records</strong>
              </div>
              <Check size={18} className="output-check" />
            </div>
          </div>
          <figcaption>
            <span className="tiny-dot" /> A sketch of the problems I work on.
          </figcaption>
        </figure>
      </div>
      <div className="hero-foot">
        <span>
          <MapPin size={14} /> Dhaka, Bangladesh
        </span>
        <span>5+ years building professional software</span>
        <a href="#skills">
          Explore my skills <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
