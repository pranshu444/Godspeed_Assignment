import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap,
  ShieldCheck,
  Rocket,
  Gauge,
  Cloud,
  Code,
  Puzzle,
  GitMerge
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary-600" />,
      title: 'Lightning Fast Development',
      description: 'Build and deploy applications up to 10x faster with our meta-framework and intuitive tools.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      title: 'Built-in Guardrails',
      description: 'Ensure quality and follow best practices with guardrails that prevent common mistakes.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary-600" />,
      title: 'Simplified Deployment',
      description: 'Deploy to any cloud with a frictionless experience that works across environments.'
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary-600" />,
      title: 'Performance Optimized',
      description: 'Get high-performance applications out of the box with optimized infrastructure.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary-600" />,
      title: 'Cloud Agnostic',
      description: 'Avoid vendor lock-in with a platform that works across all major cloud providers.'
    },
    {
      icon: <Code className="w-6 h-6 text-primary-600" />,
      title: 'Developer First',
      description: 'Built by developers for developers, with an experience that feels natural and efficient.'
    },
    {
      icon: <Puzzle className="w-6 h-6 text-primary-600" />,
      title: 'Modular Architecture',
      description: 'Pick and choose the components you need for your specific use case.'
    },
    {
      icon: <GitMerge className="w-6 h-6 text-primary-600" />,
      title: 'Seamless Integration',
      description: 'Integrate with your existing tools and workflows without disruption.'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built With Developers in Mind
          </h2>
          <p className="text-lg text-gray-700">
            Our platform provides everything you need to build, deploy, and scale your applications efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;