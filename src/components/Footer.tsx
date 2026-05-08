import { Cpu, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 relative overflow-hidden bg-bg-dark">
      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative glass rounded-[40px] p-12 md:p-24 overflow-hidden flex flex-col items-center text-center border-white/10">
          <div className="glow-orb w-[400px] h-[400px] bg-brand-purple/40 -top-20 -left-20 -z-10" />
          <div className="glow-orb w-[400px] h-[400px] bg-brand-cyan/30 -bottom-20 -right-20 -z-10" />
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter"> Ready to build the <br /> <span className="text-gradient">autonomous tomorrow?</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto mb-10 text-lg">Join 10,000+ developers forging the next generation of intelligent software.</p>
          
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
            />
            <button className="px-8 py-4 bg-[#7C3AED] text-white rounded-xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">AETHER AI</span>
          </div>
          <p className="text-zinc-600 text-sm max-w-sm mb-8">The first neural-native development platform built for scale, speed, and absolute intelligence.</p>
          <div className="flex gap-4">
             {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
             ))}
          </div>
        </div>
        
        <div>
           <h4 className="font-display font-bold mb-6 text-sm">Product</h4>
           <ul className="space-y-4">
              {['Pricing', 'Features', 'Showcase', 'Integrations'].map(l => (
                <li key={l}><a href="#" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">{l}</a></li>
              ))}
           </ul>
        </div>

        <div>
           <h4 className="font-display font-bold mb-6 text-sm">Company</h4>
           <ul className="space-y-4">
              {['About', 'Careers', 'Privacy', 'Terms'].map(l => (
                <li key={l}><a href="#" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">{l}</a></li>
              ))}
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/20 font-mono">© 2026 AETHER AI SYSTEMS INC. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 items-center">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-[10px]">ALL SYSTEMS OPERATIONAL</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
