import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Layout } from "./Layout";
import { profile } from "../data";
export function ThankYou() {
  const location = useLocation();
  const confirmed = location.state?.submitted === true;
  useEffect(() => {
    document.title = "Thank you | Sohel Rana";
    return () => {
      document.title = "Sohel Rana | Software Engineer";
    };
  }, []);
  return (
    <Layout>
      <section className="thank-you container">
        <p className="eyebrow">Get in touch</p>
        <h1>
          {confirmed ? "Thanks for your message." : "Thanks for stopping by."}
        </h1>
        <p>
          {confirmed
            ? "Your message was sent successfully. I appreciate you getting in touch."
            : "If you’d like to talk about a role or a project, send me a message."}
        </p>
        <div className="hero-actions">
          <Link className="button secondary" to="/">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <a className="button primary" href={`mailto:${profile.email}`}>
            <Mail size={16} /> Email me
          </a>
        </div>
      </section>
    </Layout>
  );
}
