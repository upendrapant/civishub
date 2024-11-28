import { motion } from 'framer-motion';
import React from 'react';

export function CompanyValue({ title, description, index }: { title: string; description: string; index: number }): React.ReactElement {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg border border-blue-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

