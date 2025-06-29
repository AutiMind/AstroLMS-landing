import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Globe2, DollarSign } from 'lucide-react';
import ContactForm from './ContactForm';

const InvestorSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const opportunities = [
    {
      icon: TrendingUp,
      title: '$350B Market Size',
      description: 'Global LMS market growing at 19.6% CAGR',
      stat: '2024-2030'
    },
    {
      icon: Target,
      title: 'AI-First Approach',
      description: 'Next-generation LMS with built-in AI capabilities',
      stat: 'First Mover'
    },
    {
      icon: Globe2,
      title: 'Scalable SaaS',
      description: 'Cloud-native architecture for global deployment',
      stat: 'Unlimited Scale'
    },
    {
      icon: DollarSign,
      title: 'Revenue Potential',
      description: 'Projected $100M ARR by year 4',
      stat: '400% Growth'
    }
  ];

  return (
    <>
      <section id="investors" className="py-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/20 to-blue-900/20"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(17, 24, 39, 0.2), rgba(30, 58, 138, 0.2))',
                'linear-gradient(45deg, rgba(30, 58, 138, 0.2), rgba(17, 24, 39, 0.2))',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Opportunity
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us in revolutionizing education technology and capturing a massive, 
              rapidly growing market with exponential potential.
            </p>
          </motion.div>

          {/* Opportunity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500 transition-all duration-300">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <opportunity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{opportunity.title}</h3>
                  <p className="text-gray-400 mb-3">{opportunity.description}</p>
                  <div className="text-blue-400 font-semibold text-lg">{opportunity.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Why Invest in AstroLMS?
                </h3>
                <div className="space-y-4">
                  {[
                    'AI-first approach to learning management systems',
                    'Experienced team with proven EdTech track record',
                    'Scalable SaaS model with high retention potential',
                    'Clear competitive advantage in emerging market',
                    'Path to profitability within 24 months'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="mb-8">
                  <div className="text-5xl font-bold text-white mb-2">$5M</div>
                  <div className="text-blue-400 text-xl">Series A Target</div>
                </div>
                <motion.button
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Investor Meeting
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default InvestorSection;