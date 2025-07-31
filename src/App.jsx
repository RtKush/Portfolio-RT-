import React, { useState, useEffect, useCallback } from 'react';
import {
  LazyMotion, domAnimation, m, AnimatePresence, useScroll, useSpring
} from 'framer-motion';

import Header   from './components/Header';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import BackToTop from './components/BackToTop';




/* -------------------------------------------------------------
   1.  THE APP
------------------------------------------------------------- */
function App() {
  /* ---------------- theme ---------------- */
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark'
                 : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  /* ---------------- first-load splash ---------------- */
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(id);
  }, []);

  /* ---------------- scroll progress bar ---------------- */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  /* ---------------- toggle theme ---------------- */
  const toggleTheme = useCallback(() => setDarkMode(d => !d), []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-gray-900 text-gray-100 font-sans antialiased transition-colors duration-300 relative overflow-x-hidden">
        {/* decorative CSS particles */}
        <GlobalParticles />

        {/* --------------- LOADING --------------- */}
        <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

        {/* --------------- MAIN --------------- */}
        <AnimatePresence>
          {!loading && (
            <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
              <Section delay={0.2}><Header darkMode={darkMode} toggleTheme={toggleTheme} /></Section>
              <Section delay={0.3}><Hero /></Section>
              <Section><About /></Section>
              <Section><Skills /></Section>
              <Section><Projects /></Section>
              <Section><Contact /></Section>
              <Section><Footer /></Section>
              <BackToTop />
            </m.main>
          )}
        </AnimatePresence>

        {/* scroll progress bar */}
        <m.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform-gpu z-50 origin-left" />

        {/* page-transition veil (opens on first load) */}
        <m.div initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.8, delay: 2 }} className="fixed inset-0 bg-gradient-to-b from-cyan-500 to-purple-500 z-40 origin-top" />
      </div>
    </LazyMotion>
  );
}

export default App;

/* -------------------------------------------------------------
   2.  SMALL HELPERS
------------------------------------------------------------- */
function Section({ children, delay = 0 }) {
  return (
    <m.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </m.section>
  );
}

/* ---- Decorative particles turned into pure CSS ---- */
function GlobalParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <span className="global-particle gp-0" />
      <span className="global-particle gp-1" />
      <span className="global-particle gp-2" />
      <span className="global-particle gp-3" />
      <span className="global-particle gp-4" />
      <span className="global-particle gp-5" />
      <span className="global-particle gp-6" />
      <span className="global-particle gp-7" />
      <span className="global-particle gp-8" />
      <span className="global-particle gp-9" />
    </div>
  );
}


const bootLines = [
  "> Initializing RT Kush Portfolio Systems...",
  "> Establishing secure environment...",
  "> System startup successful.",
];

function LoadingScreen() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev < bootLines.length - 1 ? prev + 1 : prev));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <m.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-green-400 font-mono"
    >
      {/* Background Scanlines + Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,255,0,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-5 animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,255,0,0.04)_4px)] pointer-events-none" />

      {/* Glitch Logo */}
      <m.div
        animate={{ scale: [1, 1.1, 1], x: [0, -1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl font-extrabold tracking-wider relative z-10 glitch mb-12"
      >
        <span className="relative z-10">[ RT ]</span>
        <span className="absolute top-0 left-0 text-pink-500 opacity-50 blur-sm z-0">[ RT ]</span>
      </m.div>

      {/* Boot Lines Terminal */}
      <div className="text-sm text-green-300 bg-black bg-opacity-40 p-4 rounded-lg w-[80%] max-w-md border border-green-600 shadow-md">
        {bootLines.slice(0, lineIndex + 1).map((line, i) => (
          <div key={i} className="tracking-wide">
            {line}
            {i === lineIndex && <span className="animate-pulse">▋</span>}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 w-[60%] h-1 bg-green-900 rounded-full overflow-hidden">
        <m.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-green-400 to-lime-500 animate-pulse"
        />
      </div>
    </m.div>
  );
}


