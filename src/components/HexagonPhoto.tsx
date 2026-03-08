import { motion } from 'motion/react';

export const HexagonPhoto = ({ src, alt }: { src?: string; alt: string }) => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cyber-blue/20 clip-hexagon animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-2 bg-deep-space clip-hexagon border-2 border-cyber-blue/50 flex items-center justify-center overflow-hidden"
      >
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="text-cyber-blue/30 flex flex-col items-center">
            <span className="text-xs">[SECURE_IMAGE_LOCKED]</span>
            <div className="mt-2 w-12 h-12 border-2 border-dashed border-cyber-blue/30 rounded-full animate-spin" />
          </div>
        )}
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-lime" />
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-lime" />
      
      <style>{`
        .clip-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
};
