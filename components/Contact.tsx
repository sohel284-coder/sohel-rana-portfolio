import React, { useState } from 'react';
import { Section } from './Section';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const redirect_url = import.meta.env.VITE_BASE_URL + '/thank-you';
  console.log(redirect_url)

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Available for research collaborations and software engineering roles."
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="bg-academic-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              Contact Information
            </h3>

            <p className="text-academic-100 mb-8 leading-relaxed">
              I am currently open to discussing Higher Study opportunities (Masters)
              and Software Engineering roles.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:srana.cse151@gmail.com"
                className="flex items-center gap-3 hover:text-academic-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">srana.cse151@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-academic-200 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-academic-200 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub Profile</span>
              </a>
            </div>
          </div>

          <p className="text-xs text-academic-300 opacity-60 mt-12">
            &copy; {new Date().getFullYear()} Sohel Rana
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:w-3/5 relative">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Send a Message
          </h3>

          {/* SUCCESS ANIMATION */}
          {success && (
            <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-10 animate-fadeIn">
              <CheckCircle className="w-16 h-16 text-green-600 mb-4 animate-scaleIn" />
              <p className="text-lg font-semibold text-slate-800">
                Message Sent Successfully!
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Thank you for reaching out. I’ll reply soon.
              </p>
            </div>
          )}

          {/* FORMSpree FORM */}
          <form
            action="https://formspree.io/f/mvgeyzpn"
            method="POST"
            className="space-y-6"
            onSubmit={() => {
              setTimeout(() => setSuccess(true), 300);
              setTimeout(() => setSuccess(false), 6000);
            }}
          >
            <input type="hidden" name="_redirect" value={redirect_url} />
            <div className="grid grid-cols-2 gap-6">
              <input
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-academic-500 outline-none"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-academic-500 outline-none"
              />
            </div>

            <input
              name="subject"
              required
              placeholder="Subject"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-academic-500 outline-none"
            />

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-academic-500 outline-none"
            />

            {/* Anti-spam honeypot (Formspree feature) */}
            <input type="text" name="_gotcha" className="hidden" />

            <button
              type="submit"
              className="w-full py-3 bg-academic-800 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-academic-900 transition-colors"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};
