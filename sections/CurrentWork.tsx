
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Briefcase } from 'lucide-react';

const CurrentWork: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-12">Currently Building</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Freelance Item */}
        <div className="group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="w-5 h-5 text-neutral-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Freelance</span>
          </div>
          <h3 className="text-2xl text-white font-light mb-4">Independent Consultant</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            Working with global clients on Upwork and private platforms to architect high-performance AI solutions. Focus on automation strategy and direct workflow implementation.
          </p>
          <div className="flex items-center gap-3">
             <img src="https://cdn.worldvectorlogo.com/logos/upwork.svg" alt="Upwork" className="h-4 grayscale opacity-40 group-hover:opacity-100 transition-opacity" />
             <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Global Reach</span>
          </div>
        </div>

        {/* Agency Item */}
        <div className="group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700">
          <div className="flex items-center gap-4 mb-6">
            <Globe className="w-5 h-5 text-neutral-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Agency</span>
          </div>
          <h3 className="text-2xl text-white font-light mb-4">Owlflow AI</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            Dedicated focus on Enterprise AI automation. We build the pipelines that allow companies to automate 80% of repetitive decision-making tasks.
          </p>
          <div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-500">
             <span className="text-[10px] uppercase tracking-widest">Visit Studio</span>
             <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWork;
