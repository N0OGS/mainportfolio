import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 28,
  duration = 0.65,
  id
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom refined cubic-bezier for smooth deceleration
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
