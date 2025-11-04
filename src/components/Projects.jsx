import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function useTilt() {
  const ref = useRef(null);
  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * 8; // tilt left/right
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }
  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  }
  return { ref, onMouseMove, onMouseLeave };
}

const ProjectCard = ({ title, tags, gradient }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt();
  return (
    <motion.div
      variants={reveal}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative h-56 sm:h-64 md:h-72 w-full transition-transform duration-200 will-change-transform"
      >
        {/* Simulated video/image with animated gradient */}
        <div className={`absolute inset-0 ${gradient} opacity-90 transition-transform duration-500 group-hover:scale-110`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.18),transparent_45%)] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-purple-500/20 group-hover:ring-purple-400/40 transition-colors duration-300" />

        {/* Glow on hover */}
        <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          background: 'radial-gradient(30rem 30rem at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.15), transparent 60%)'
        }} />

        {/* Title */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <h3 className="text-white text-lg sm:text-xl font-semibold drop-shadow">{title}</h3>
          <p className="text-white/70 text-xs sm:text-sm">Hover to see tech stack</p>
        </div>

        {/* Tags on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full border border-purple-400/30 bg-black/40 px-4 py-2 text-purple-200 backdrop-blur">
            {tags.join(' • ')}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="contents">
      {/* Project 1 - 1x1 cell */}
      <div className="col-span-4 lg:col-span-1">
        <ProjectCard
          title="DocNav"
          tags={["Flutter", "Firebase", "Keras"]}
          gradient="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500"
        />
      </div>

      {/* Project 2 - 1x1 cell */}
      <div className="col-span-4 lg:col-span-1">
        <ProjectCard
          title="Sign Language Interpreter"
          tags={["Python", "OpenCV", "MediaPipe", "Keras (CNN)"]}
          gradient="bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600"
        />
      </div>
    </div>
  );
};

export default Projects;
