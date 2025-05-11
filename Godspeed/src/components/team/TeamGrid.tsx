import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data';
import { Twitter, Linkedin, Github } from 'lucide-react';

const TeamGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700">
            The talented people behind Godspeed Systems who are passionate about empowering developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    social: {
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-3">{member.role}</p>
        
        <p className="text-gray-600 mb-5">{member.bio}</p>
        
        <div className="flex space-x-4">
          {member.social.twitter && (
            <a 
              href={member.social.twitter}
              className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s Twitter profile`}
            >
              <Twitter size={20} />
            </a>
          )}
          
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin}
              className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin size={20} />
            </a>
          )}
          
          {member.social.github && (
            <a 
              href={member.social.github}
              className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s GitHub profile`}
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamGrid;