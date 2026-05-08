import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Model Definition',
    desc: 'Describe your agent\'s personality, task scope, and available tools in natural language or YAML.',
    tags: ['Config', 'LLM']
  },
  {
    id: '02',
    title: 'Neural Integration',
    desc: 'Aether automatically connects necessary APIs, databases, and authentication layers.',
    tags: ['APIs', 'Auth']
  },
  {
    id: '03',
    title: 'Autonomous Testing',
    desc: 'The engine spawns a shadow environment to stress-test workflows before production.',
    tags: ['CI/CD', 'QA']
  },
  {
    id: '04',
    title: 'Global Deployment',
    desc: 'Push to edge locations worldwide with single-digit millisecond latency for user responses.',
    tags: ['Edge', 'Live']
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-purple font-display font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            From idea to autonomous <br />
            <span className="text-gradient">in under 5 minutes</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-32">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full md:text-right hidden md:block">
                  {idx % 2 === 0 ? (
                    <div className="pr-12">
                      <span className="text-7xl font-display font-bold text-white/5">{step.id}</span>
                      <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                      <p className="text-white/40">{step.desc}</p>
                    </div>
                  ) : null}
                </div>

                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-purple bg-bg-dark flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    <Circle className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="md:pl-12">
                     <span className="text-5xl md:text-7xl font-display font-bold text-white/5 md:hidden">{step.id}</span>
                     {idx % 2 !== 0 ? (
                        <div className="hidden md:block">
                          <h3 className="text-2xl font-display font-bold mb-4 text-left">{step.title}</h3>
                          <p className="text-white/40 text-left">{step.desc}</p>
                        </div>
                     ) : (
                       <div className="md:hidden">
                         <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                         <p className="text-white/40">{step.desc}</p>
                       </div>
                     )}
                     
                     <div className={`mt-6 flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {step.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
