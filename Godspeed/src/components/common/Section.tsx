import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  backgroundImage,
  backgroundColor,
  fullHeight = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const background = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } 
    : backgroundColor 
      ? { backgroundColor } 
      : {};

  const heightClass = fullHeight ? 'min-h-screen' : '';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
      } 
    },
  };

  return (
    <section 
      id={id} 
      style={background}
      className={`py-16 sm:py-20 md:py-24 ${heightClass} ${className}`}
    >
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;