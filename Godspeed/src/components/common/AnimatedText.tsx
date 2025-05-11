import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'heading' | 'paragraph';
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  type = 'heading',
  delay = 0,
  once = true
}) => {
  // Split text into words for heading animation
  const words = text.split(' ');

  // Split text into lines for paragraph animation
  const lines = text.split('. ');

  // Animation variants for words
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + delay,
        duration: 0.5,
      },
    }),
  };

  // Animation variants for paragraph lines
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + delay,
        duration: 0.6,
      },
    }),
  };

  return (
    <>
      {type === 'heading' ? (
        <div className={`flex flex-wrap ${className}`}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-2 inline-block"
              custom={i}
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ) : (
        <div className={className}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once }}
              className={`${i < lines.length - 1 ? 'mb-2' : ''}`}
            >
              {line}{i < lines.length - 1 ? '.' : ''}
            </motion.p>
          ))}
        </div>
      )}
    </>
  );
};

export default AnimatedText;