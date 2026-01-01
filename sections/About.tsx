
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center max-w-3xl">
      <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-8">Approach</h2>
      <div className="space-y-8">
        <p className="text-3xl md:text-4xl text-white font-light leading-snug">
          I build <span className="text-neutral-500 italic">autonomous</span> systems that solve complex business bottlenecks.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed font-light">
          With a focus on premium aesthetics and deep technical logic, my work bridges the gap between sophisticated AI models and human-centric workflows. I don’t just implement tools; I design ecosystems that think, learn, and scale.
        </p>
        <div className="grid grid-cols-2 gap-12 pt-8">
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-2 font-medium">Philosophy</h4>
            <p className="text-neutral-500 text-sm leading-relaxed">Simplicity is the ultimate sophistication. Every workflow must be clean, every agent intentional.</p>
          </div>
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-2 font-medium">Expertise</h4>
            <p className="text-neutral-500 text-sm leading-relaxed">LLM Orchestration, Voice Agents, Workflow Design, and Full-Stack Systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
