
import React from 'react';
import { motion } from 'framer-motion';
import { SectionId, NavItem } from '../types';
import { NAVIGATION_ITEMS } from '../constants';

interface NavigationProps {
  activeId: SectionId;
  onSelect: (id: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeId, onSelect }) => {
  return (
    <nav className="hidden md:flex w-24 lg:w-32 h-screen flex-col items-center justify-center border-r border-white/5 bg-black/50 backdrop-blur-sm z-50">
      <div className="flex flex-col gap-2">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="group relative flex items-center justify-center w-full py-3 px-6 cursor-pointer"
            aria-label={`Go to ${item.label}`}
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div 
                className={`w-1 h-1 rounded-full transition-all duration-500 ${activeId === item.id ? 'bg-white scale-[2.5]' : 'bg-neutral-600 group-hover:bg-neutral-400'}`}
              />
              <motion.span 
                initial={false}
                animate={{ 
                  opacity: activeId === item.id ? 1 : 0, 
                  x: activeId === item.id ? 0 : -5 
                }}
                className="absolute left-10 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-medium text-white pointer-events-none origin-left"
              >
                {item.label}
              </motion.span>
              <span className="hidden group-hover:block absolute left-10 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 pointer-events-none">
                {activeId !== item.id && item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
