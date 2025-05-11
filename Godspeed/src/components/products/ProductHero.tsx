import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { getIconComponent } from '../../data';

interface ProductHeroProps {
  product: Product;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  const IconComponent = getIconComponent(product.icon);
  
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-primary-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-primary-600 font-medium">Godspeed Product</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {product.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              {product.description}
            </p>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                  >
                    <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-primary-600 font-medium text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Get Started
              </button>
              <button className="btn btn-outline">
                View Documentation
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;