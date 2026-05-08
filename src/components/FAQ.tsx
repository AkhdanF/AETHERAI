import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How does the autonomous engine work?',
    a: 'We use a proprietary neural infrastructure that allows agents to spawn virtual containers at the edge, execute complex logic, and sync state back to your primary database in real-time.'
  },
  {
    q: 'Can I integrate my own custom LLM models?',
    a: 'Yes, our Enterprise plan supports local fine-tuning and hosting of your proprietary models (Llama 3, Mistral, etc.) directly on our high-performance A100/H100 clusters.'
  },
  {
    q: 'What is the maximum token limit for context?',
    a: 'Standard plans support up to 128k context windows. Pro and Enterprise users can leverage our RAG-enhanced memory system for virtually unlimited relevant context.'
  },
  {
    q: 'Is my data encrypted during processing?',
    a: 'Absolutely. We use end-to-end AES-256 encryption at rest and TLS 1.3 in transit. We are SOC2 Type II and GDPR compliant.'
  }
];

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-display font-medium group-hover:text-brand-cyan transition-colors">{q}</span>
        <div className="shrink-0 ml-4">
           {isOpen ? <Minus className="w-5 h-5 text-brand-cyan" /> : <Plus className="w-5 h-5 text-white/40" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-8"
          >
            <p className="text-white/50 leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 relative bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="glass rounded-[32px] p-8 md:p-12 border-white/5 shadow-2xl">
           {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
}
