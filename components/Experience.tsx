import { Section } from "./Section";
export function Experience() {
  return (
    <Section
      id="experience"
      number="03"
      title="A career built in production."
      subtitle="From commercial web applications to enterprise workflows and document systems."
    >
      <div className="timeline">
        <article className="career">
          <div className="career-date">
            December 2022 — Present<span>Dhaka, Bangladesh</span>
          </div>
          <div className="career-content">
            <h3>DataFort Limited</h3>
            <div className="role-progression">
              <div>
                <strong>Software Engineer</strong>
                <span>July 2024 — Present</span>
              </div>
              <div>
                <strong>Mid-Level Software Engineer</strong>
                <span>December 2022 — July 2024</span>
              </div>
            </div>
            <p>
              I build and maintain full-stack features for Robo2mation, working
              across workflow execution, document management, APIs, and
              enterprise integrations.
            </p>
            <ul>
              <li>
                Deliver configurable application features with Django and
                JavaScript/jQuery.
              </li>
              <li>
                Support secure access, production troubleshooting, and
                deployment and migration work with DevOps.
              </li>
              <li>
                Contribute to AI-assisted document processing and Flutter/Dart
                mobile features.
              </li>
            </ul>
            <p className="career-note">
              This work previously sat under Innoweb within the same group.
            </p>
          </div>
        </article>
        <article className="career">
          <div className="career-date">
            October 2020 — November 2022<span>Dhaka, Bangladesh</span>
          </div>
          <div className="career-content">
            <h3>PyronLab</h3>
            <div className="role-progression">
              <div>
                <strong>Junior Software Engineer</strong>
              </div>
            </div>
            <p>
              I developed and maintained commercial applications across
              nanaya.co, Imarat.com.bd, PyronConverter, and ChangeUnit.
            </p>
            <ul>
              <li>
                Worked on backend business logic, REST APIs, and frontend
                interfaces with Django, JavaScript, jQuery, and Vue.js.
              </li>
              <li>
                Supported deployments on DigitalOcean with Linux, Nginx, and
                Gunicorn, alongside production fixes and refactoring.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}
