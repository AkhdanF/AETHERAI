import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers, MousePointer2, Settings, Terminal } from 'lucide-react';

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section id="showcase" ref={containerRef} className="py-24 relative bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
            >
              Unified control for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22D3EE] to-white">every process.</span>
            </motion.h2>
            
            <div className="space-y-10">
              {[
                { 
                  icon: Terminal, 
                  color: 'text-brand-purple',
                  title: 'Autonomous DevX',
                  desc: 'Deploy full-stack applications with integrated AI agents that manage CI/CD pipelines automatically.'
                },
                { 
                  icon: Layers, 
                  color: 'text-brand-cyan',
                  title: 'Multi-modal Training',
                  desc: 'Train your custom models on proprietary data with high-performance compute clusters.'
                }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.title} 
                  className="flex gap-6"
                >
                  <div className={`shrink-0 w-14 h-14 rounded-2xl glass flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            style={{ rotate, scale }}
            className="relative"
          >
            <div className="glass rounded-[40px] p-4 lg:p-8 border-white/20 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
              <div className="bg-bg-dark rounded-[24px] overflow-hidden border border-white/10 aspect-video relative">
                <img 
                  src="https://picsum.photos/seed/showcase/1200/800" 
                  alt="Aether Interface" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Tooltips */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/4 glass-dark p-4 rounded-xl border-brand-cyan shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <MousePointer2 className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-mono">NODE-A: ACTIVE</span>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-1/4 right-1/4 glass-dark p-4 rounded-xl border-brand-purple shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="w-4 h-4 text-brand-purple" />
                    <span className="text-xs font-mono">SYNCING... 89%</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Visual Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/20 blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/20 blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
