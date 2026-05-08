import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'Perfect for individual builders and solo developers.',
    features: ['1 Agent instance', 'Standard latency', 'Basic analytics', 'Community support'],
    cta: 'Start for Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    desc: 'For growing teams scaling their AI infrastructure.',
    features: ['10 Agent instances', 'Ultra-low latency', 'Advanced dashboard', 'Priority support', 'Custom domain'],
    cta: 'Get Pro Access',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Mission-critical agents for global businesses.',
    features: ['Unlimited instances', 'Dedicated compute', 'SSO & IAM integration', '24/7 dedicated support', 'Custom LLM fine-tuning'],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Scalable Pricing</h2>
          <p className="text-white/40">Choose the plan that fits your ambition.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                'relative p-10 rounded-[32px] border transition-all duration-500 overflow-hidden group',
                plan.popular 
                  ? 'bg-white/5 border-brand-purple shadow-[0_0_40px_rgba(124,58,237,0.1)] scale-105 z-10' 
                  : 'bg-transparent border-white/10'
              )}
            >
              {plan.popular && (
                 <div className="absolute top-0 right-0 px-6 py-2 bg-brand-purple text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                    Most Popular
                 </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  {plan.period && <span className="text-white/40 font-mono italic">{plan.period}</span>}
                </div>
                <p className="mt-4 text-sm text-white/50">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                       <Check className="w-3 h-3 text-brand-cyan" />
                    </div>
                    <span className="text-sm text-white/70">{f}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                'w-full py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg',
                plan.popular 
                  ? 'bg-brand-purple text-white shadow-brand-purple/20' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              )}>
                {plan.cta}
              </button>
              
              {/* Background Glow */}
              <div className={cn(
                'absolute -bottom-20 -right-20 w-40 h-40 blur-[100px] -z-10 transition-opacity opacity-0 group-hover:opacity-100',
                plan.popular ? 'bg-brand-purple' : 'bg-brand-cyan'
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
