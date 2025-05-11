import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, getIconComponent } from '../../data';
import AnimatedText from '../common/AnimatedText';

const ProductsOverview: React.FC = () => {
  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Complete Product Suite
          </h2>
          <p className="text-lg text-gray-700">
            From streamlined development to deployment, we provide all the tools you need to accelerate your workflow while maintaining quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, i) => {
            const IconComponent = getIconComponent(product.icon);
            
            return (
              <motion.div
                key={product.id}
                custom={i}
                variants={productVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
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
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {products.slice(3, 5).map((product, i) => {
            const IconComponent = getIconComponent(product.icon);
            
            return (
              <motion.div
                key={product.id}
                custom={i + 3} // Continue index from previous map
                variants={productVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
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
          })}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="btn btn-primary"
          >
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;