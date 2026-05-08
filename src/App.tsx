import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import Showcase from './components/Showcase';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <SmoothScroll>
      <div className="relative selection:bg-brand-purple selection:text-white">
        {/* Dynamic Cursor Glow */}
        <motion.div
           style={{
             left: cursorX,
             top: cursorY,
             translateX: '-50%',
             translateY: '-50%',
           }}
           className="fixed w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none z-30 opacity-50"
        />

        <Navbar />
        
        <main>
          <Hero />
          <BentoFeatures />
          <Showcase />
          <Workflow />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>

        <Footer />

        {/* Floating Status Bar - Immersive UI specific */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 h-12 px-6 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-6 shadow-2xl z-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">System Optimal</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Latency</span>
            <span className="text-[10px] font-mono text-zinc-300">14ms</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Region</span>
            <span className="text-[10px] font-mono text-zinc-300">US-EAST-1</span>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}
