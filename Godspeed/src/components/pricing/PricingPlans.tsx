import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data';

const PricingPlans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Team
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Choose the plan that fits your needs and scale as you grow.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white shadow-md rounded-full p-1 flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  !isAnnual 
                    ? 'bg-primary-500 text-white' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isAnnual 
                    ? 'bg-primary-500 text-white' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Annual <span className="text-xs opacity-75">(Save 20%)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.isFeatured ? 'border-2 border-primary-500' : ''
              }`}
            >
              {plan.isFeatured && (
                <div className="bg-primary-500 text-white py-2 px-4 text-center font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mt-4 mb-6">
                  <div className="flex items-end mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price === 'Custom' ? 'Custom' : isAnnual ? plan.price : `${parseInt(plan.price.slice(1)) * 1.2}`}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600 ml-2">/mo</span>
                    )}
                  </div>
                  {plan.price !== 'Custom' && isAnnual && (
                    <div className="text-sm text-primary-600">
                      Billed annually
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 ${
                    plan.isFeatured 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 text-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="/contact" className="text-primary-600 font-medium hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;