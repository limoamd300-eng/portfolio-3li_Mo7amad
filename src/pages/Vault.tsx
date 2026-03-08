import { motion } from 'motion/react';
import { Cpu, Code2, Shield, Database, ExternalLink, Github, Award } from 'lucide-react';

const skills = [
  {
    name: 'C++',
    level: 95,
    description: 'High-performance systems, memory management, and low-level optimization.',
    icon: Cpu,
  },
  {
    name: 'OOP',
    level: 90,
    description: 'Clean code architecture, design patterns, and scalable software design.',
    icon: Code2,
  },
  {
    name: 'Python',
    level: 85,
    description: 'Automation, AI integration, and custom security tooling.',
    icon: Shield,
  },
  {
    name: 'Cybersecurity',
    level: 88,
    description: 'Vulnerability research, penetration testing, and secure coding practices.',
    icon: Database,
  }
];

const projects = [
  {
    title: 'Vulnerability Scanner',
    desc: 'Automated network security assessment tool built with Python and C++.',
    tags: ['Python', 'Security', 'Networking'],
    status: 'COMPLETED'
  },
  {
    title: 'Secure Auth System',
    desc: 'Multi-factor authentication system with end-to-end encryption.',
    tags: ['C++', 'Cryptography', 'OOP'],
    status: 'ACTIVE'
  },
  {
    title: 'Kernel-Level Monitor',
    desc: 'System monitoring tool for detecting unauthorized memory access.',
    tags: ['C++', 'Low-level', 'Security'],
    status: 'RESEARCH'
  }
];

const certs = [
  { name: 'Certified Security Researcher', issuer: 'Global Security Inst.', date: '2025' },
  { name: 'Advanced C++ Specialist', issuer: 'Tech Academy', date: '2024' },
  { name: 'Python for Cyber Defense', issuer: 'CyberDef Labs', date: '2024' },
];

export const Vault = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tighter mb-4">
          INTEL & <span className="text-cyber-lime">SKILLS</span>
        </h2>
        <div className="h-1 w-20 bg-cyber-lime shadow-[0_0_10px_#32FF7E]" />
      </motion.div>

      {/* Programming Expertise */}
      <section className="mb-24">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyber-blue/60 mb-10 uppercase">
          [PROGRAMMING_EXPERTISE]
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-border p-8 bg-cyber-blue/5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-blue/10 rounded-sm">
                    <skill.icon className="text-cyber-lime" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{skill.name}</h4>
                    <p className="text-xs text-cyber-blue/40 mt-1">{skill.description}</p>
                  </div>
                </div>
                <span className="text-cyber-lime font-bold">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-cyber-blue/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-cyber-lime shadow-[0_0_10px_#32FF7E]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="mb-24">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyber-blue/60 mb-10 uppercase">
          [SECURITY_ARCHIVES]
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-border p-6 bg-deep-space hover:bg-cyber-blue/5 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] px-2 py-0.5 border border-cyber-blue/30 text-cyber-blue rounded-sm">
                  {project.status}
                </div>
                <div className="flex gap-3">
                  <Github size={16} className="text-cyber-blue/40 hover:text-cyber-lime cursor-pointer" />
                  <ExternalLink size={16} className="text-cyber-blue/40 hover:text-cyber-lime cursor-pointer" />
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-cyber-lime transition-colors">{project.title}</h4>
              <p className="text-xs text-cyber-blue/60 mb-6 line-clamp-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold text-cyber-lime/70">#{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyber-blue/60 mb-10 uppercase">
          [VERIFIED_CERTIFICATIONS]
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 border border-cyber-lime/20 bg-cyber-lime/5 rounded-sm"
            >
              <div className="p-2 bg-cyber-lime/10 rounded-full shadow-[0_0_10px_rgba(50,255,126,0.2)]">
                <Award className="text-cyber-lime" size={20} />
              </div>
              <div>
                <div className="text-sm font-bold">{cert.name}</div>
                <div className="text-[10px] text-cyber-blue/60">{cert.issuer} • {cert.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
