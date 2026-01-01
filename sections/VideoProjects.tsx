
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play } from 'lucide-react';

const VideoProjects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(PROJECTS.video[0]);

  return (
    <div className="h-full flex flex-col md:flex-row gap-12 items-stretch py-12">
      {/* Left side: Navigation */}
      <div className="w-full md:w-1/3 flex flex-col justify-center space-y-6">
        <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-8">Video Insights</h2>
        {PROJECTS.video.map((v) => (
          <button
            key={v.id}
            onClick={() => setSelectedVideo(v)}
            className={`text-left group transition-all duration-500 ${selectedVideo.id === v.id ? 'translate-x-4' : 'opacity-40 hover:opacity-100'}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-1 h-8 bg-white transition-opacity duration-500 ${selectedVideo.id === v.id ? 'opacity-100' : 'opacity-0'}`} />
              <span className="text-xl lg:text-2xl text-white font-light tracking-tight">{v.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Right side: Video Player */}
      <div className="w-full md:w-2/3 relative">
        <div className="h-full aspect-video md:aspect-auto flex items-center">
           <AnimatePresence mode="wait">
             <motion.div
               key={selectedVideo.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
               className="w-full h-[300px] md:h-full bg-neutral-900 border border-white/5 relative group overflow-hidden"
             >
                <video 
                  src={selectedVideo.url} 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white fill-white" />
                   </div>
                </div>
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
                  {selectedVideo.id} // PCM_ENC_24B
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VideoProjects;
