import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Product } from '../../types';
import ProductHero from './ProductHero';
import ProductFeatures from './ProductFeatures';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mock features for each product (would come from a real API in a production app)
  const features = [
    {
      title: 'Accelerate Development',
      description: 'Build production-ready applications in a fraction of the time with our intuitive tools and pre-built components. Focus on business logic instead of boilerplate code.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    },
    {
      title: 'Built-in Guardrails',
      description: 'Our platform includes guardrails that prevent common mistakes and enforce best practices, enabling junior developers to contribute with confidence.',
      image: 'https://images.pexels.com/photos/8347499/pexels-photo-8347499.jpeg',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and workflows without disruption. Our platform is designed to complement your current stack.',
      image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
    },
  ];

  return (
    <div>
      <ProductHero product={product} />
      <ProductFeatures features={features} />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Technical Specifications
            </motion.h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modern web browser</li>
                    <li>• Node.js 14+ for local development</li>
                    <li>• 4GB RAM minimum</li>
                    <li>• Internet connection for cloud features</li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Compatible With</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All major cloud providers (AWS, Azure, GCP)</li>
                    <li>• Kubernetes and Docker environments</li>
                    <li>• CI/CD pipelines (Jenkins, GitHub Actions, etc.)</li>
                    <li>• Modern front-end frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of teams already using {product.title} to accelerate their development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn bg-white text-primary-900 hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="btn border border-white text-white hover:bg-primary-800">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;