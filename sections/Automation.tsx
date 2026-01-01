
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { GitBranch, Zap } from 'lucide-react';

const Automation: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-12">Workflow Logic</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.automation.map((item, i) => (
          <div key={i} className="p-10 border border-white/5 bg-neutral-900/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Zap className="w-6 h-6 text-neutral-600 mb-6 group-hover:text-white transition-colors duration-500" />
            <h3 className="text-2xl text-white font-light mb-4">{item.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/10" />
              <GitBranch className="w-4 h-4 text-neutral-700" />
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border border-white/5 bg-white/[0.01] rounded-sm">
        <p className="text-neutral-400 text-sm font-light text-center">
          "The efficiency of a system is defined by the transitions between its automated parts."
        </p>
      </div>
    </div>
  );
};

export default Automation;
