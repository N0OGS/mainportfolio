import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        id="scroll-progress-indicator"
        className="h-full bg-[#1A1A1A] origin-left shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
        style={{ scaleX }}
      />
    </div>
  );
};

