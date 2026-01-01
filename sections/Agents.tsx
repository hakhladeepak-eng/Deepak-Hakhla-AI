
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Bot, MessageSquare, Mic } from 'lucide-react';

const Agents: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-12">Intelligent Entities</h2>
      
      <div className="grid gap-16">
        {PROJECTS.agents.map((project, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-12 items-center group">
             <div className="w-full md:w-1/2 aspect-video relative overflow-hidden bg-neutral-900 border border-white/5 flex items-center justify-center">
                {/* Abstract animated representation of agent */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center"
                >
                   <div className="w-16 h-16 border border-white/40 rounded-full" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
             <div className="w-full md:w-1/2">
                <div className="flex gap-4 mb-4">
                  {idx === 0 ? <Mic className="w-4 h-4 text-neutral-600" /> : <MessageSquare className="w-4 h-4 text-neutral-600" />}
                </div>
                <h3 className="text-3xl text-white font-light mb-4">{project.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed font-light mb-6">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-neutral-500">LLM Core</span>
                  <span className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-neutral-500">FastAPI</span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
