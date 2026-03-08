import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AliOmarBot } from './components/AliOmarBot';
import { Home } from './pages/Home';
import { Vault } from './pages/Vault';
import { EncryptionPoint } from './pages/EncryptionPoint';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-deep-space overflow-x-hidden selection:bg-cyber-lime selection:text-deep-space">
        {/* Background Effects */}
        <div className="fixed inset-0 grid-background pointer-events-none opacity-20" />
        <div className="scanline" />
        
        {/* Ambient Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-lime/5 rounded-full blur-[120px] pointer-events-none" />

        <Navbar />
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/vault" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Vault />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <EncryptionPoint />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <AliOmarBot />
      </div>
    </Router>
  );
}
