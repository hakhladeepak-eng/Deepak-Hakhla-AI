
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <div className="h-full flex flex-col justify-center max-w-4xl">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-4 font-light">The AI Architect</h2>
        <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-white mb-8 leading-tight">
          Deepak <br />
          <span className="opacity-80">Hakhla.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-12">
          Specializing in AI automation, intelligent agents, and scalable web ecosystems that define the future of work.
        </p>

        <button
          onClick={onAction}
          className="group relative flex items-center gap-4 py-4 px-8 border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-700 ease-[0.19,1,0.22,1]"
        >
          <span className="text-sm uppercase tracking-widest font-medium">Work with me</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
