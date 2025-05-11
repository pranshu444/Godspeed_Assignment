import React from 'react';
import { motion } from 'framer-motion';
import CompanyIntro from '../components/about/CompanyIntro';
import Timeline from '../components/about/Timeline';
import Stats from '../components/home/Stats';

const AboutPage: React.FC = () => {
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
              About Godspeed Systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 mb-8"
            >
              We're on a mission to transform how software is built by empowering developers with tools that accelerate delivery without sacrificing quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <CompanyIntro />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Company Timeline */}
      <Timeline />
    </div>
  );
};

export default AboutPage;