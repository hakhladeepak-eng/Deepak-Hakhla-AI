
import React from 'react';
import { motion } from 'framer-motion';

const WebApps: React.FC = () => {
  const systems = [
    { name: "Flux CRM", type: "AI Powered SaaS", img: "https://picsum.photos/800/600?grayscale&random=1" },
    { name: "VaultOS", type: "Secure Asset Management", img: "https://picsum.photos/800/600?grayscale&random=2" }
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-12">Web Systems</h2>
      
      <div className="grid gap-12">
        {systems.map((sys, idx) => (
          <div key={idx} className="relative group cursor-pointer overflow-hidden aspect-[21/9] border border-white/5">
            <img 
              src={sys.img} 
              alt={sys.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-60" 
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">{sys.type}</span>
              <h3 className="text-4xl text-white font-extralight tracking-tight group-hover:translate-x-2 transition-transform duration-700">{sys.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebApps;
