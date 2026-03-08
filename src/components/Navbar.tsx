import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Terminal, Fingerprint, Lock, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'COMMAND_CENTER', path: '/', icon: Terminal },
    { name: 'THE_VAULT', path: '/vault', icon: Lock },
    { name: 'ENCRYPTION_POINT', path: '/contact', icon: Fingerprint },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-deep-space/80 backdrop-blur-md border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <ShieldCheck className="text-cyber-lime group-hover:scale-110 transition-transform" size={24} />
          <span className="font-bold tracking-tighter text-lg hidden sm:block">
            ALI_OMAR<span className="text-cyber-lime">.SYS</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 flex items-center gap-2 text-xs font-medium transition-colors ${
                  isActive ? 'text-cyber-lime' : 'text-cyber-blue/60 hover:text-cyber-blue'
                }`}
              >
                <Icon size={14} />
                <span className="hidden md:block">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-lime shadow-[0_0_10px_#32FF7E]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[10px] text-cyber-blue/40">
            <Cpu size={12} />
            <span>CPU_LOAD: 12%</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse shadow-[0_0_5px_#32FF7E]" />
        </div>
      </div>
    </nav>
  );
};
