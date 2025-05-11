import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features Built for Developers
          </h2>
          <p className="text-lg text-gray-700">
            Explore the capabilities that make our platform the choice of leading development teams.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              feature={feature}
              reverse={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  feature: Feature;
  reverse: boolean;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, reverse, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {feature.title}
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          {feature.description}
        </p>
      </div>
      
      <div className={`rounded-xl overflow-hidden shadow-lg ${reverse ? 'lg:order-1' : ''}`}>
        <img 
          src={feature.image} 
          alt={feature.title} 
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
};

export default ProductFeatures;