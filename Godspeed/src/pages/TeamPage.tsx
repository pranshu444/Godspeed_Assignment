import React from 'react';
import { motion } from 'framer-motion';
import TeamGrid from '../components/team/TeamGrid';

const TeamPage: React.FC = () => {
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
              Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 mb-8"
            >
              Meet the passionate people behind Godspeed Systems. Our diverse team of experts is united by a shared vision: empowering developers to build better software, faster.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <TeamGrid />
      
      {/* Join Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for talented people who are passionate about building great developer tools. Check out our open positions and join us in our mission.
            </p>
            <a 
              href="/careers" 
              className="btn btn-primary"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;