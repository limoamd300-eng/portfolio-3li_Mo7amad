import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-cyber-blue/10 bg-deep-space/50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-cyber-lime" size={20} />
          <span className="text-[10px] font-bold tracking-[0.3em] text-cyber-blue/60 uppercase">
            © 2026 Ali Omar - Secure Connection Established.
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-cyber-blue/40">
          <span className="hover:text-cyber-lime cursor-pointer transition-colors">PRIVACY_PROTOCOL</span>
          <span className="hover:text-cyber-lime cursor-pointer transition-colors">SYSTEM_LOGS</span>
          <span className="text-cyber-lime/50">ENCRYPTION: AES-256</span>
        </div>
      </div>
    </footer>
  );
};
