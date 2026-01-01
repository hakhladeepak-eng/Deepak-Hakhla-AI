
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="h-full flex flex-col justify-center max-w-3xl">
      <h2 className="text-neutral-500 uppercase tracking-[0.5em] text-xs mb-12">Frequent Queries</h2>
      
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="border-b border-white/5">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full py-8 flex items-center justify-between text-left group"
            >
              <span className={`text-xl md:text-2xl font-light transition-all duration-500 ${openIndex === idx ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                {faq.question}
              </span>
              <div className="relative w-4 h-4 text-neutral-600">
                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-neutral-400 leading-relaxed font-light text-lg">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
