
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
};

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  once = true,
  amount = 0.3
}: ScrollAnimationProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40 };
      case 'down':
        return { opacity: 0, y: -40 };
      case 'left':
        return { opacity: 0, x: 40 };
      case 'right':
        return { opacity: 0, x: -40 };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 40 };
    }
  };
  
  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? getFinalPosition() : getInitialPosition()}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
