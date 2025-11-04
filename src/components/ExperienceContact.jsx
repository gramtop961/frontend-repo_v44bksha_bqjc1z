import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Link as ExtLink, Copy, Code } from 'lucide-react';

const GlassCard = ({ children }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
    {children}
  </div>
);

const ExperienceContact = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tripathivinayak30@gmail.com');
    } catch (e) {
      // clipboard might fail on some browsers; do nothing silently
    }
  };

  return (
    <div className="contents">
      {/* Experience 1 - 1x1 cell */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 lg:col-span-1"
      >
        <GlassCard>
          <div className="p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-purple-300">Experience</div>
            <h4 className="mt-2 text-white text-lg font-semibold">Chapter Lead | Google Developer Group</h4>
            <p className="mt-2 text-white/80 text-sm">Led a 33-member team to serve a 1500+ student community.</p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Experience 2 - 1x1 cell */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="col-span-4 lg:col-span-1"
      >
        <GlassCard>
          <div className="p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-purple-300">Experience</div>
            <h4 className="mt-2 text-white text-lg font-semibold">Marketing Lead | Google Developer Group</h4>
            <p className="mt-2 text-white/80 text-sm">Grew event attendance by 30% through targeted campaigns.</p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Contact & Socials - 2x1 cell */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="col-span-4 lg:col-span-2"
      >
        <GlassCard>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-white text-2xl font-semibold tracking-tight">Let's build what's next.</h3>
                <p className="mt-2 text-white/70 text-sm">Open to collaborations, internships, and ambitious side projects.</p>

                <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-black/30 px-4 py-2 text-purple-200 backdrop-blur">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">tripathivinayak30@gmail.com</span>
                  <button onClick={copyEmail} className="ml-2 inline-flex items-center gap-1 rounded-full bg-purple-600/20 px-2 py-1 text-xs text-purple-200 ring-1 ring-purple-500/30 hover:bg-purple-600/30 transition">
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-purple-400/40 hover:text-purple-200 transition-colors">
                  <Github className="h-5 w-5" /> <span className="text-sm">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-purple-400/40 hover:text-purple-200 transition-colors">
                  <Linkedin className="h-5 w-5" /> <span className="text-sm">LinkedIn</span>
                </a>
                <a href="https://leetcode.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-purple-400/40 hover:text-purple-200 transition-colors">
                  <Code className="h-5 w-5" /> <span className="text-sm">LeetCode</span>
                </a>
                <a href="#" className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-purple-400/40 hover:text-purple-200 transition-colors">
                  <ExtLink className="h-5 w-5" /> <span className="text-sm">Blog</span>
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default ExperienceContact;
