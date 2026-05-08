import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, BarChart3, Globe, Code2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const features = [
  {
    title: 'Precision Automation',
    description: 'Our neural networks handle the grunt work so you can focus on the big picture.',
    icon: Cpu,
    className: 'md:col-span-2 md:row-span-2 bg-linear-to-br from-brand-purple/20 to-transparent',
    img: 'https://picsum.photos/seed/ai-cpu/800/600'
  },
  {
    title: 'Lightning Metrics',
    description: 'Instant data processing at the edge.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-1 bg-white/5',
  },
  {
    title: 'Smart Analytics',
    description: 'Gain deep insights from your complex data sets.',
    icon: BarChart3,
    className: 'md:col-span-1 md:row-span-2 bg-linear-to-br from-brand-cyan/20 to-transparent',
    img: 'https://picsum.photos/seed/analytics/400/600'
  },
  {
    title: 'Secure by Design',
    description: 'Enterprise-grade encryption for all your autonomous agent deployments.',
    icon: Shield,
    className: 'md:col-span-1 md:row-span-1 bg-white/5',
  },
  {
    title: 'Global Sync',
    description: 'Real-time collaborative AI canvas for teams of any size across the globe.',
    icon: Globe,
    className: 'md:col-span-2 md:row-span-1 bg-white/5 flex flex-row items-center gap-6',
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            Smarter infrastructure, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">Built for the AI era</span>
          </motion.h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Everything you need to ship autonomous agents and intelligent workflows at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                'group relative rounded-2xl p-8 overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-[#0c0c0e]',
                feature.className
              )}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[240px]">{feature.description}</p>
                </div>
              </div>

              {feature.img && (
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                   <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                   />
                </div>
              )}
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
