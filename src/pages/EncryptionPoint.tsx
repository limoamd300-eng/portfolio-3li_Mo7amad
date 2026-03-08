import { motion } from 'motion/react';
import { Send, Shield, Lock, Mail, MapPin, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';

export const EncryptionPoint = () => {
  const [formState, setFormState] = useState({
    identifier: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate encryption and sending
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormState({ identifier: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tighter mb-4">
          CONTACT & <span className="text-cyber-lime">LOGS</span>
        </h2>
        <div className="h-1 w-20 bg-cyber-lime shadow-[0_0_10px_#32FF7E]" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xs font-bold tracking-[0.3em] text-cyber-blue/60 mb-10 uppercase">
            [SECURE_ACCESS_CHANNELS]
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-sm group-hover:border-cyber-lime transition-colors">
                <Mail className="text-cyber-lime" size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-cyber-blue/40 tracking-widest mb-1 uppercase">Email_Protocol</div>
                <div className="text-lg font-bold">ali.omar@secure.sys</div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-sm group-hover:border-cyber-lime transition-colors">
                <Phone className="text-cyber-lime" size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-cyber-blue/40 tracking-widest mb-1 uppercase">Voice_Link</div>
                <div className="text-lg font-bold">+1 (555) 010-OMAR</div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-sm group-hover:border-cyber-lime transition-colors">
                <MapPin className="text-cyber-lime" size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-cyber-blue/40 tracking-widest mb-1 uppercase">Base_Location</div>
                <div className="text-lg font-bold">Global / Remote Operations</div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 cyber-border bg-cyber-blue/5">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-cyber-lime" size={20} />
              <span className="text-sm font-bold tracking-widest">ENCRYPTION_STATUS: ACTIVE</span>
            </div>
            <p className="text-xs text-cyber-blue/60 leading-relaxed">
              All communications are processed through a 256-bit AES encrypted tunnel. 
              Your data is handled with the highest security protocols.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="cyber-border p-8 bg-deep-space relative"
        >
          <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] text-cyber-blue/30">
            <Lock size={10} />
            <span>SECURE_FORM_v2</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyber-blue/60 tracking-widest uppercase">[Enter_Identifier]</label>
                <input
                  required
                  type="text"
                  value={formState.identifier}
                  onChange={(e) => setFormState({...formState, identifier: e.target.value})}
                  placeholder="User_Name"
                  className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyber-lime transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyber-blue/60 tracking-widest uppercase">[Input_Email]</label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="user@domain.com"
                  className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyber-lime transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-cyber-blue/60 tracking-widest uppercase">[Subject_Header]</label>
              <input
                required
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                placeholder="Collaboration_Request"
                className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyber-lime transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-cyber-blue/60 tracking-widest uppercase">[Input_Message]</label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                placeholder="Type_Your_Message_Here..."
                className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyber-lime transition-colors resize-none"
              />
            </div>

            <button
              disabled={isSending || isSent}
              className={`w-full py-4 font-bold tracking-widest flex items-center justify-center gap-3 transition-all ${
                isSent 
                  ? 'bg-cyber-lime text-deep-space' 
                  : 'bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 hover:border-cyber-lime hover:text-cyber-lime'
              }`}
            >
              {isSending ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ENCRYPTING...
                </>
              ) : isSent ? (
                <>
                  <Shield size={18} />
                  MESSAGE_TRANSMITTED
                </>
              ) : (
                <>
                  <Send size={18} />
                  TRANSMIT_DATA
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
