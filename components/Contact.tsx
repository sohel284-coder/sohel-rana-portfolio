import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { CVLink } from "./CVLink";
import { profile } from "../data";
export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "failure"
  >("idle");
  const submitting = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const body = new FormData(form);
    submitting.current = true;
    setStatus("pending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://formspree.io/f/mvgeyzpn", {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("failure");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
    }
  }
  return (
    <Section
      id="contact"
      number="05"
      title="Let’s talk about what’s next."
      className="contact-section"
    >
      <div className="contact-grid">
        <div className="contact-copy">
          <p>
            If you’d like to talk about a role or a project, send me a message.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={20} />
          </a>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
          <CVLink />
          <p className="contact-location">Based in Dhaka, Bangladesh.</p>
        </div>
        <form onSubmit={submit} aria-busy={status === "pending"}>
          <fieldset disabled={status === "pending" || status === "success"}>
            <legend className="sr-only">Send a message</legend>
            <div className="form-pair">
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              required
              placeholder="What would you like to discuss?"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell me a little about the role or project…"
            />
            <input
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="honeypot"
              aria-hidden="true"
            />
            <button className="button primary" type="submit">
              {status === "pending"
                ? "Sending…"
                : status === "success"
                  ? "Message sent"
                  : "Send message"}
              <ArrowRight size={17} />
            </button>
          </fieldset>
          <div className="form-status" aria-live="polite" aria-atomic="true">
            {status === "pending" && <p>Sending your message…</p>}
            {status === "success" && (
              <p className="success">
                <CheckCircle size={18} /> Your message was sent. Thank you for
                getting in touch.{" "}
                <Link to="/thank-you" state={{ submitted: true }}>
                  Continue <ArrowRight size={14} />
                </Link>
              </p>
            )}
          </div>
          {status === "failure" && (
            <p className="form-error" role="alert">
              I couldn’t confirm your message was sent. Your text is still here;
              please try again or email me directly.
            </p>
          )}
          <p className="form-note">
            Sent through Formspree. You can also email me directly.
          </p>
        </form>
      </div>
    </Section>
  );
}
