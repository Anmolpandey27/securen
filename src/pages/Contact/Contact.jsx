import React from 'react';
import { Mail } from 'lucide-react';
import AccentButton from '../../components/AccentButton';

const Contact = () => (
  <div className="min-h-screen pt-20">
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-extrabold text-center text-slate-50">
          Get in Touch <span className="text-green-500">Securely</span>
        </h2>

        <div className="max-w-4xl p-8 mx-auto bg-slate-800 rounded-xl shadow-2xl border border-slate-700 md:p-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
              <input type="text" id="name" className="w-full p-3 mt-1 text-slate-100 bg-slate-700 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Work Email</label>
              <input type="email" id="email" className="w-full p-3 mt-1 text-slate-100 bg-slate-700 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="security@securen.com" required />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-300">Interested Service</label>
              <select id="service" className="w-full p-3 mt-1 text-slate-100 bg-slate-700 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" required>
                <option value="">Select a Service...</option>
                <option value="soc_implementation">Custom SOC Implementation</option>
                <option value="va">Vulnerability Assessment</option>
                <option value="consulting">Consulting & Strategy</option>
                <option value="training">Training Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" rows="4" className="w-full p-3 mt-1 text-slate-100 bg-slate-700 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your security challenge..."></textarea>
            </div>
            <AccentButton color="green" type="submit">
              Send Inquiry <Mail className="inline w-5 h-5 ml-2" />
            </AccentButton>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
