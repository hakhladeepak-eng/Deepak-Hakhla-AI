
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from './types';
import { NAVIGATION_ITEMS } from './constants';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import CurrentWork from './sections/CurrentWork';
import Agents from './sections/Agents';
import Automation from './sections/Automation';
import WebApps from './sections/WebApps';
import VideoProjects from './sections/VideoProjects';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Hero);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollThreshold = 300; // "Little long scroll" threshold
  const cooldownPeriod = 1200; // Prevent rapid section jumping

  const handleSectionChange = (newId: SectionId) => {
    setActiveSection(newId);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < cooldownPeriod) return;

      scrollAccumulator.current += e.deltaY;

      if (Math.abs(scrollAccumulator.current) >= scrollThreshold) {
        const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.id === activeSection);
        
        if (scrollAccumulator.current > 0 && currentIndex < NAVIGATION_ITEMS.length - 1) {
          // Scroll Down -> Next Section
          handleSectionChange(NAVIGATION_ITEMS[currentIndex + 1].id);
          lastScrollTime.current = now;
          scrollAccumulator.current = 0;
        } else if (scrollAccumulator.current < 0 && currentIndex > 0) {
          // Scroll Up -> Previous Section
          handleSectionChange(NAVIGATION_ITEMS[currentIndex - 1].id);
          lastScrollTime.current = now;
          scrollAccumulator.current = 0;
        } else {
          // Reset if we hit boundaries
          scrollAccumulator.current = 0;
        }
      }

      // Reset accumulator after a period of inactivity to ensure intent
      const timeoutId = (window as any)._scrollReset;
      if (timeoutId) clearTimeout(timeoutId);
      (window as any)._scrollReset = setTimeout(() => {
        scrollAccumulator.current = 0;
      }, 150);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if ((window as any)._scrollReset) clearTimeout((window as any)._scrollReset);
    };
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.Hero: return <Hero key="hero" onAction={() => setActiveSection(SectionId.Contact)} />;
      case SectionId.About: return <About key="about" />;
      case SectionId.CurrentWork: return <CurrentWork key="work" />;
      case SectionId.Agents: return <Agents key="agents" />;
      case SectionId.Automation: return <Automation key="automation" />;
      case SectionId.Web: return <WebApps key="web" />;
      case SectionId.Video: return <VideoProjects key="video" />;
      case SectionId.FAQ: return <FAQ key="faq" />;
      case SectionId.Contact: return <Contact key="contact" />;
      default: return null;
    }
  };

  return (
    <div className="relative h-screen w-full flex bg-black overflow-hidden selection:bg-white selection:text-black">
      <Background />
      
      {/* Sidebar Navigation */}
      <Navigation 
        activeId={activeSection} 
        onSelect={handleSectionChange} 
      />

      {/* Main Content Area */}
      <main className="flex-grow h-screen relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full h-full flex items-center justify-center p-8 md:p-16 lg:p-24 overflow-y-auto no-scrollbar"
          >
            <div className="max-w-6xl w-full h-full">
               {renderSection()}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default App;
