import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative col-span-4 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
      {/* 3D Spline Background (full-bleed cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1020]/40 to-[#0b1020]/80" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-purple-500/10" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 flex h-full flex-col justify-end">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow"
          style={{ letterSpacing: '-0.02em' }}
        >
          VINAYAK TRIPATHI
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-white/80"
        >
          AIML student specializing in building intelligent, cross-platform applications. Proven tech
          community leader with a passion for turning complex problems into elegant solutions with
          Python and Flutter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center gap-3"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_20px_4px] shadow-purple-500/60" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-purple-300/90">
            Cyber-Minimalist Portfolio
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
