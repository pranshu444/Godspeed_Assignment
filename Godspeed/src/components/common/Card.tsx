import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick
}) => {
  const baseClasses = 'bg-white rounded-xl overflow-hidden';
  const hoverClasses = hover 
    ? 'shadow-lg hover:shadow-xl transition-shadow duration-300' 
    : 'shadow-md';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;