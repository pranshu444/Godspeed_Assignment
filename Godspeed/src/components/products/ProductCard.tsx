import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { getIconComponent } from '../../data';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const IconComponent = getIconComponent(product.icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{product.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-primary-600" />
        </div>
        
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.map((feature, i) => (
              <li key={i} className="text-gray-600 text-sm flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          to={`/products/${product.id}`} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
        >
          Learn more
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;