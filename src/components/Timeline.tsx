import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Lightbulb, Rocket, Target } from 'lucide-react';
import ContactForm from './ContactForm';

const Timeline = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const timelineEvents = [
    {
      year: '2023',
      title: 'AutiMind Founded',
      description: 'AutiMind, Inc. was established with a vision to transform digital learning through innovative educational technology.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500',
      position: 'left'
    },
    {
      year: '2024',
      title: 'Strategic Pivot',
      description: 'Reactivated our vision under AstroLMS, focusing on AI-powered learning management systems with Web3 integration.',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      position: 'right'
    },
    {
      year: '2025',
      title: 'Beta Launch',
      description: 'Preparing for our beta launch in Q4 2025, bringing next-generation LMS capabilities to market.',
      icon: Rocket,
      color: 'from-blue-500 to-purple-500',
      position: 'left'
    },
    {
      year: 'Future',
      title: 'Global Impact',
      description: 'Expanding our platform to empower educational institutions worldwide with cutting-edge learning technology.',
      icon: Calendar,
      color: 'from-cyan-500 to-blue-500',
      position: 'right'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From inception to innovation - tracking our evolution in transforming digital education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30 hidden lg:block"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    event.position === 'left' 
                      ? 'lg:justify-start lg:pr-8' 
                      : 'lg:justify-end lg:pl-8'
                  } justify-center`}
                >
                  <div className={`w-full max-w-lg ${
                    event.position === 'right' ? 'lg:text-right' : 'lg:text-left'
                  } text-center lg:text-left`}>
                    <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group relative">
                      {/* Timeline Icon */}
                      <div className={`absolute ${
                        event.position === 'left' 
                          ? 'lg:-right-12 lg:top-8' 
                          : 'lg:-left-12 lg:top-8'
                      } top-8 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0 w-16 h-16 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Year Badge */}
                      <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        {event.year}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {event.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Be Part of Our Journey</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us as we revolutionize education technology and create the future of learning management systems.
            </p>
            <motion.button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Vision
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};

export default Timeline;