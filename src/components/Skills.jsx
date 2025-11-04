import React from 'react';
import { motion } from 'framer-motion';

const chip = 'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur hover:border-purple-400/40 hover:text-purple-200 transition-colors';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="col-span-4 lg:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
    >
      <div className="p-6 sm:p-8">
        <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">Top Skills</h3>
        <p className="mt-1 text-white/70 text-sm">A snapshot of tools I use to ship fast with quality.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="text-purple-300 mb-2 text-sm uppercase tracking-widest">Languages</div>
            <div className="flex flex-wrap gap-2">
              <span className={chip}>Python</span>
              <span className={chip}>Java</span>
              <span className={chip}>Dart</span>
              <span className={chip}>C++</span>
            </div>
          </div>
          <div>
            <div className="text-purple-300 mb-2 text-sm uppercase tracking-widest">Frameworks</div>
            <div className="flex flex-wrap gap-2">
              <span className={chip}>Flutter</span>
              <span className={chip}>Pandas</span>
              <span className={chip}>Keras</span>
            </div>
          </div>
          <div>
            <div className="text-purple-300 mb-2 text-sm uppercase tracking-widest">Tools</div>
            <div className="flex flex-wrap gap-2">
              <span className={chip}>Git</span>
              <span className={chip}>Firebase</span>
              <span className={chip}>Docker</span>
            </div>
          </div>
          <div>
            <div className="text-purple-300 mb-2 text-sm uppercase tracking-widest">Databases</div>
            <div className="flex flex-wrap gap-2">
              <span className={chip}>MongoDB</span>
              <span className={chip}>Firestore</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
