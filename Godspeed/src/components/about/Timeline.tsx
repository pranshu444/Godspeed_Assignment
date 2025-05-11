import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2020',
      title: 'Founding Vision',
      description: 'Godspeed Systems was founded with a vision to transform software development with guardrails that accelerate delivery without sacrificing quality.'
    },
    {
      year: '2021',
      title: 'First Meta-Framework',
      description: 'Launched our first meta-framework, enabling developers to build backends 5x faster while maintaining enterprise-grade quality and security.'
    },
    {
      year: '2022',
      title: 'Cloud Platform Launch',
      description: 'Introduced our Unified Cloud Delivery Platform, making deployment frictionless across multiple cloud providers.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Integrated AI capabilities into our platform, enabling automated code reviews, intelligent debugging, and enhanced developer productivity.'
    },
    {
      year: '2024',
      title: 'Web Studio Release',
      description: 'Launched our AI-enabled Web Studio, bringing the power of our meta-framework to a visual development environment.'
    },
    {
      year: '2025',
      title: 'Looking Forward',
      description: 'Continuing to innovate with new tools and integrations that empower developers to build better software, faster.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-700">
            Milestones in our mission to revolutionize software development.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineItem 
                key={index}
                event={event}
                isRight={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  event: TimelineEvent;
  isRight: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isRight, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="relative">
      {/* Center dot */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white z-10"
      ></motion.div>
      
      {/* Content */}
      <div className={`flex items-center justify-between ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-5/12"></div> {/* Spacer */}
        
        <motion.div 
          initial={{ opacity: 0, x: isRight ? 30 : -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 30 : -30 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="w-5/12 bg-white p-6 rounded-xl shadow-md"
        >
          <div className="text-primary-600 font-bold text-lg mb-2">{event.year}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;