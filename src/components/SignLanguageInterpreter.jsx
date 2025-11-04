import React from 'react';
import { motion } from 'framer-motion';
import { Hand, Camera, Brain, ExternalLink } from 'lucide-react';

const SignLanguageInterpreter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="col-span-4 lg:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
    >
      <div className="relative p-6 sm:p-8">
        {/* Ambient gradient */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-14 -left-10 h-56 w-56 rounded-full bg-emerald-500/40 blur-3xl mix-blend-screen" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/30 blur-3xl mix-blend-screen" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-black/30 px-3 py-1 text-xs text-purple-200 backdrop-blur">
              <Hand className="h-3.5 w-3.5" />
              <span>Project</span>
            </div>
            <h3 className="mt-3 text-white text-2xl sm:text-3xl font-semibold tracking-tight">Sign Language Interpreter</h3>
            <p className="mt-2 text-white/80 text-sm sm:text-base">
              Real-time ASL/ISL recognition using computer vision and deep learning. Converts gestures into text and
              speech, improving accessibility in classrooms and public services.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90"><Camera className="h-3.5 w-3.5"/> OpenCV</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90"><Brain className="h-3.5 w-3.5"/> MediaPipe</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">Keras (CNN)</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">Python</span>
            </div>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-600/20 px-4 py-2 text-sm text-emerald-100 hover:bg-emerald-600/30 transition"
            >
              See demo <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Visual */}
          <div className="relative w-full md:w-1/2 h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.16),transparent_45%)] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SignLanguageInterpreter;
