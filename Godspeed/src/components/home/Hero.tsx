import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../common/AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-200 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm mb-6"
            >
              <Zap size={16} className="text-primary-500" />
              <span className="text-sm font-medium text-gray-800">Accelerate Your Development</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Build Better Software{' '}
              <span className="text-primary-600">10x Faster</span> With Guardrails
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-700 mb-8"
            >
              Godspeed Systems empowers developers to build production-ready backends and 
              AI workflows with confidence. Our platform accelerates delivery without 
              sacrificing quality, helping teams ship better software faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/products" 
                className="btn btn-primary"
              >
                Explore Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="btn btn-outline"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative lg:block hidden"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                alt="Godspeed platform interface" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-transparent rounded-xl"></div>
            </div>
            
            {/* Floating cards */}
            <motion.div 
              className="absolute -top-6 -left-6 p-4 bg-white rounded-lg shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-success-500"></div>
                <span className="font-medium text-sm">Deployment Successful</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-8 p-4 bg-white rounded-lg shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -2, 0] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1 
              }}
            >
              <div className="text-sm font-medium">
                <div className="mb-1 text-gray-800">Performance Metrics</div>
                <div className="flex space-x-2 items-center">
                  <div className="h-2 w-16 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-primary-500 rounded-full"></div>
                  </div>
                  <span className="text-primary-600">80%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;