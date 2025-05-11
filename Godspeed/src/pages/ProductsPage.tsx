import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';
import ProductCard from '../components/products/ProductCard';

const ProductsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 mb-8"
            >
              A comprehensive suite of tools designed to accelerate software development while maintaining high-quality standards.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seamless Integration
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                All our products are designed to work together seamlessly, creating a powerful development ecosystem. You can start with one product and add others as your needs evolve.
              </p>
              <button className="btn btn-primary">
                Explore Integrations
                <ArrowRight size={18} className="ml-2" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg" 
                alt="Integrated development ecosystem" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;