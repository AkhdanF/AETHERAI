import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Orbit } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7C3AED] rounded-full blur-[150px] opacity-20 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#22D3EE] rounded-full blur-[150px] opacity-10 -z-10" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:32px_32px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
          <span>NEW: Generative Workflows 2.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-8"
        >
          Automate the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-white">
            Unthinkable.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Aether AI transforms complex workflows into simple, automated experiences. 
          The ultimate productivity engine for modern engineering teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-20"
        >
          <button className="h-14 px-8 bg-[#7C3AED] text-white rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(124,58,237,0.3)]">
            Launch Dashboard
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[800, 700, 600, 800].map((bg, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#09090B] bg-zinc-${bg} ${i === 3 ? 'flex items-center justify-center text-[10px] font-bold' : ''}`}>
                  {i === 3 ? '+2k' : ''}
                </div>
              ))}
            </div>
            <span className="text-xs text-zinc-500 font-medium whitespace-nowrap">Trusted by 12,000+ engineers</span>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto group"
        >
          <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] -z-10 rounded-[40px] group-hover:bg-brand-purple/30 transition-colors duration-500" />
          <div className="glass rounded-3xl p-2 md:p-4 shadow-2xl border-white/20 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/aether-ai-dashboard/1600/900" 
              alt="Aether AI Dashboard Mockup" 
              className="w-full rounded-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-dark p-6 rounded-2xl border-white/20 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-mono text-white/80">AI ENGINE ONLINE</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Proof */}
      <div className="mt-20 w-full max-w-7xl mx-auto px-6">
        <p className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-10">TRUSTED BY INDUSTRY TITANS</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
          {['Vercel', 'Notion', 'Linear', 'Github', 'Raycast'].map((brand) => (
            <span key={brand} className="text-2xl font-display font-bold">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
