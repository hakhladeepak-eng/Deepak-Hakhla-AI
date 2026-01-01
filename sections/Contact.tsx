
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Send, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="max-w-4xl">
        <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-8">Engagement</h2>
        <h1 className="text-5xl md:text-7xl text-white font-extralight tracking-tight mb-12">
          Ready to automate <br />
          <span className="text-neutral-600 italic">your future?</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-24">
          <button className="flex items-center justify-center gap-4 py-6 px-12 bg-white text-black hover:bg-neutral-200 transition-colors duration-500">
            <Calendar className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest font-semibold">Book a Discovery Call</span>
          </button>
          <button className="flex items-center justify-center gap-4 py-6 px-12 border border-white/10 text-white hover:bg-white/5 transition-colors duration-500">
            <Send className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest font-medium">Send an Email</span>
          </button>
        </div>

        {/* Footer */}
        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-8">
              <a href="#" className="text-neutral-600 hover:text-white transition-colors duration-500">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors duration-500">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center gap-2 group transition-colors">
                 <img src="https://cdn.worldvectorlogo.com/logos/upwork.svg" className="h-3 grayscale opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
           </div>
           <p className="text-[10px] text-neutral-700 uppercase tracking-[0.3em]">
             &copy; {new Date().getFullYear()} Deepak Hakhla — AI Systems Designer
           </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
