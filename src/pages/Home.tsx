import { motion } from 'motion/react';
import { EncryptionText } from '../components/EncryptionText';
import { HexagonPhoto } from '../components/HexagonPhoto';
import { ShieldCheck, Terminal, Cpu, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

const metrics = [
  { label: 'BUGS_FOUND', value: '100+', icon: ShieldCheck, color: 'text-cyber-lime' },
  { label: 'ACTIVE_RESEARCH', value: '5', icon: Terminal, color: 'text-cyber-blue' },
  { label: 'SECURITY_LEVEL', value: 'ELITE', icon: Lock, color: 'text-cyber-lime' },
  { label: 'SYSTEM_STATUS', value: 'SECURE', icon: Cpu, color: 'text-cyber-blue' },
];

const typingPhrases = [
  "Mastering C++ & OOP",
  "Python Security Scripting",
  "Defending Digital Frontiers",
  "Security Researcher",
  "Software Developer"
];

export const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-lime/10 border border-cyber-lime/20 text-cyber-lime text-[10px] font-bold tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime animate-ping" />
            ACCESS_GRANTED: SYSTEM_ADMIN
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            SYSTEM: <br />
            <EncryptionText text="ALI OMAR" className="glow-lime" />
          </h1>
          
          <div className="h-8 mb-8">
            <span className="text-cyber-blue font-mono text-xl md:text-2xl">
              &gt; {displayText}
              <span className="animate-pulse">_</span>
            </span>
          </div>

          <p className="text-cyber-blue/60 max-w-lg mb-10 leading-relaxed text-sm md:text-base">
            Cybersecurity Programmer and Software Developer focused on building high-performance, secure systems. 
            Specializing in memory-safe C++ architectures and automated security tooling with Python.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-cyber-lime text-deep-space font-bold rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(50,255,126,0.3)]">
              INITIATE_PROTOCOL
            </button>
            <button className="px-8 py-3 border border-cyber-blue text-cyber-blue font-bold rounded-sm hover:bg-cyber-blue/10 transition-colors">
              VIEW_ARCHIVES
            </button>
          </div>
        </motion.div>

        <div className="relative order-first lg:order-last">
          <HexagonPhoto alt="Ali Omar" />
          
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyber-blue/5 rounded-full blur-[100px] -z-10" />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-24">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="cyber-border p-6 bg-cyber-blue/5 group hover:bg-cyber-blue/10 transition-all cursor-default"
          >
            <metric.icon className={`${metric.color} mb-4 group-hover:scale-110 transition-transform`} size={24} />
            <div className="text-[10px] text-cyber-blue/40 font-bold tracking-widest mb-1">[{metric.label}]</div>
            <div className="text-2xl font-bold tracking-tight">{metric.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
