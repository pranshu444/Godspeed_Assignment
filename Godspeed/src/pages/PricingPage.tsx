import React from 'react';
import { motion } from 'framer-motion';
import PricingPlans from '../components/pricing/PricingPlans';
import FAQ from '../components/pricing/FAQ';

const PricingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 mb-8"
            >
              Choose the plan that fits your needs and scale as you grow. All plans include core features with pricing that grows with you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlans />
      
      {/* FAQs */}
      <FAQ />
      
      {/* Enterprise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-primary-600 text-white">
                <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
                <p className="mb-6">
                  Need a custom solution for your organization? We offer tailored plans for enterprise clients with specific requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-200 mr-2">•</span>
                    Custom implementation and onboarding
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-200 mr-2">•</span>
                    Dedicated support team
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-200 mr-2">•</span>
                    Enhanced security features
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-200 mr-2">•</span>
                    Custom integrations
                  </li>
                </ul>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Talk to our Enterprise Sales Team
                </h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with our enterprise sales team to discuss your organization's specific needs and requirements.
                </p>
                <a 
                  href="/contact" 
                  className="btn btn-primary inline-block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;