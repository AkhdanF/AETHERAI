import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Drasner',
    role: 'Eng Manager @ Netlify',
    text: 'Aether AI has completely changed how our team handles repetitive infrastructure tasks. It feels like having 10 extra engineers who never sleep.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Guillermo Rauch',
    role: 'CEO @ Vercel',
    text: 'The best developer experience is the one you don\'t have to manage. Aether AI is exactly that. Futuristic, fast, and remarkably stable.',
    avatar: 'https://i.pravatar.cc/150?u=guillermo'
  },
  {
    name: 'Hervé Renault',
    role: 'CTO @ Linear',
    text: 'We integrated Aether for our internal analytics bots and seen a 40% reduction in query wait times. The glass UI is also just gorgeous.',
    avatar: 'https://i.pravatar.cc/150?u=herve'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
       <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-purple/5 to-transparent pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Loved by the best</h2>
            <p className="text-white/40">Trusted by engineering leaders at top-tier tech companies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass p-8 rounded-3xl hover:bg-white/10 transition-colors border-white/5"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-brand-cyan/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                <p className="text-lg text-white/80 mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-white/40 font-mono">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
