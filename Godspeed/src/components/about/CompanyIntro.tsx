import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companyValues } from '../../data';

const CompanyIntro: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
             At Godspeed, we empower founders to build, scale and grow their startups with cutting-edge AI-powered technology, a resourceful network, and a dedicated concierge service. Whether you're an early-stage entrepreneur or an experienced leader, we provide a 360° support system across technology, talent, and business —eliminating the chaos that often comes with startup journeys. We want the experimenter to experiment, innovate to innovate and the visionary to serve their vision, without tech, time, expertise, knowledge, high costs and lost opportunities being their hurdles anymore. Hence we are not only making next-gen engineering tools available to all, we are also working closely with select tech orgs in helping them modernize in 11x way to become effective, faster and agile.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-primary-600">500+</span>
              <span className="text-gray-600">Teams empowered by our platform</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
              alt="Godspeed Systems team" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        <div ref={ref} className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do at Godspeed Systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;