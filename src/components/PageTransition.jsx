import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  const isServer = typeof window === 'undefined';
  return (
    <motion.div
      initial={isServer ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
