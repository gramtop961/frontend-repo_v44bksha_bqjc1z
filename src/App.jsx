import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import ExperienceContact from './components/ExperienceContact.jsx';
import DocNav from './components/DocNav.jsx';
import SignLanguageInterpreter from './components/SignLanguageInterpreter.jsx';
import { motion } from 'framer-motion';

const App = () => {
  // Custom orb cursor (small dot + trailing orb)
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const rafRef = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });

    function animate() {
      setTrail((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.12,
        y: prev.y + (mouse.y - prev.y) * 0.12,
      }));
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mouse.x, mouse.y]);

  useEffect(() => {
    // Hide native cursor for a stronger effect
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Cosmic background layers (galaxy vibe) */}
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.18) 1px, transparent 1px),\n             radial-gradient(1px 1px at 120px 140px, rgba(255,255,255,0.12) 1px, transparent 1px),\n             radial-gradient(1px 1px at 200px 80px, rgba(255,255,255,0.14) 1px, transparent 1px),\n             radial-gradient(1px 1px at 300px 200px, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '220px 220px',
        }}
      />
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-600 blur-3xl mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600 blur-3xl mix-blend-screen" />
        <div className="absolute top-1/3 left-[20%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/40 blur-3xl mix-blend-screen" />
      </div>

      {/* Main Bento Grid */}
      <main className="relative z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <Hero />
          <Projects />
          <Skills />
          <DocNav />
          <SignLanguageInterpreter />
          <ExperienceContact />
        </div>
      </main>

      {/* Reveal footer */}
      <motion.footer
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-white/60"
      >
        Built with a Neon Noir aesthetic — glassmorphism, subtle motion, and precision typography.
      </motion.footer>

      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_8px] shadow-purple-500/60"
        style={{ left: mouse.x, top: mouse.y }}
      />
      <div
        className="pointer-events-none fixed z-40 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 ring-2 ring-purple-400/40 blur-[1px] transition-transform duration-150"
        style={{ left: trail.x, top: trail.y }}
      />
    </div>
  );
};

export default App;
