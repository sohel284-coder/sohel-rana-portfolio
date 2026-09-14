import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
export function About() {
  return (
    <Section id="about" number="04" title="The thread through my work.">
      <div className="about-grid">
        <div className="about-statement">
          From business rules
          <br />
          to <span>usable information.</span>
        </div>
        <div className="about-copy">
          <p>
            I started with commercial web applications at PyronLab, working on
            both the backend and the interface, and supporting applications
            after deployment.
          </p>
          <p>
            At DataFort, that work has grown into enterprise workflows and
            document management. I work on the details that connect a business
            process: a form, an approval, an API, a document that needs to be
            found again.
          </p>
          <p>
            My growing focus is applied AI. I’m working with language models for
            document extraction and developing EduNova to explore RAG-based book
            assistance and question generation. It builds on the same
            foundation: turning information into something people can use.
          </p>
          <a className="text-link" href="#work">
            See what I’m building <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}
