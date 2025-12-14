import React from 'react';
import { CheckCircle, ArrowLeft, Mail } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center">

        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />

        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-4">
          Thank You!
        </h1>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Your message has been sent successfully.
          I truly appreciate you taking the time to reach out.
        </p>

        <p className="text-sm text-slate-500 mb-8">
          I will review your message and respond as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>

          <a
            href="mailto:srana.cse151@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-academic-800 text-white rounded-lg hover:bg-academic-900 transition"
          >
            <Mail size={16} />
            Email Me Directly
          </a>
        </div>

      </div>
    </section>
  );
};
