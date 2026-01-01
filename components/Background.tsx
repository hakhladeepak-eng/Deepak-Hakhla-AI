
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Moving Ambient Shapes */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-neutral-900 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neutral-800 blur-[150px]"
      />
      
      {/* Grid Pattern with Fade */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-60" />
    </div>
  );
};

export default Background;
