import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Zap, Database, Globe } from 'lucide-react';

const TechShowcase = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI algorithms for personalized learning paths, intelligent content recommendations, and automated assessment.',
      features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Globe,
      title: 'Web3 Integration',
      description: 'Blockchain-based credentials, decentralized learning networks, and secure digital certificates.',
      features: ['Blockchain Certificates', 'Smart Contracts', 'Decentralized Storage'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Cloud,
      title: 'Modular Cloud',
      description: 'Scalable cloud infrastructure with microservices architecture for flexible deployment and management.',
      features: ['Auto-scaling', 'Microservices', 'Global CDN'],
      color: 'from-green-500 to-teal-500',
      delay: 0.4
    }
  ];

  const supportingTech = [
    { icon: Shield, name: 'Enterprise Security', color: 'text-red-400' },
    { icon: Zap, name: 'Real-time Analytics', color: 'text-yellow-400' },
    { icon: Database, name: 'Big Data Processing', color: 'text-blue-400' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-24 h-24 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform leverages the latest advancements in AI, Web3, and cloud computing 
            to deliver unparalleled learning experiences
          </p>
        </motion.div>

        {/* Main Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: tech.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: tech.delay + 0.1 * featureIndex }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Enhanced with
            <span className="text-blue-400"> Advanced Capabilities</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {supportingTech.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-3 bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 hover:border-gray-600 transition-all duration-300"
                >
                  <IconComponent className={`h-5 w-5 ${item.color}`} />
                  <span className="text-gray-300 font-medium">{item.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Built for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Scale & Performance</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Our architecture is designed to handle millions of learners while maintaining 
              lightning-fast performance and 99.9% uptime reliability.
            </p>
            
            {/* Architecture Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-600/20 rounded-2xl p-6 border border-blue-500/30">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">UI</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Frontend Layer</h4>
                <p className="text-gray-400 text-sm">React, Next.js, PWA</p>
              </div>
              
              <div className="bg-purple-600/20 rounded-2xl p-6 border border-purple-500/30">
                <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">API</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Service Layer</h4>
                <p className="text-gray-400 text-sm">Node.js, GraphQL, REST</p>
              </div>
              
              <div className="bg-green-600/20 rounded-2xl p-6 border border-green-500/30">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">DB</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Data Layer</h4>
                <p className="text-gray-400 text-sm">PostgreSQL, Redis, S3</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechShowcase;