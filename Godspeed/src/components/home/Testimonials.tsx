import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-primary-200 max-w-2xl">
                Hear from the teams that have transformed their development process with Godspeed Systems.
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full border border-primary-700 hover:bg-primary-800 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full border border-primary-700 hover:bg-primary-800 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-800 rounded-2xl p-8 md:p-12 shadow-xl relative"
              >
                <Quote className="text-primary-600 opacity-20 absolute top-6 left-6 w-16 h-16" />
                
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl italic mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[currentIndex].author.image} 
                        alt={testimonials[currentIndex].author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonials[currentIndex].author.name}
                      </div>
                      <div className="text-primary-300">
                        {testimonials[currentIndex].author.role}, {testimonials[currentIndex].author.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-white' : 'bg-primary-700 hover:bg-primary-600'
                } transition-colors duration-200`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;