import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Coins, DollarSign } from 'lucide-react';
import ContactForm from './ContactForm';

const InvestorSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const opportunities = [
    {
      icon: TrendingUp,
      title: '$350B Market Size',
      description: 'Global LMS market growing at 19.6% CAGR with AI education reaching $32B by 2032',
      stat: '17% AI Growth'
    },
    {
      icon: Brain,
      title: 'AI Premium Valuation',
      description: 'AI companies receive 60% higher valuations than traditional SaaS platforms',
      stat: '60% Premium'
    },
    {
      icon: Coins,
      title: 'Peak AI Investment',
      description: '42% of US VC funding ($80.7B) went to AI startups in 2024',
      stat: '$80.7B Funding'
    },
    {
      icon: DollarSign,
      title: 'Perfect Market Timing',
      description: 'Series A average $12M in 2024, with AI EdTech companies raising $15M+',
      stat: '$15M+ Rounds'
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
              Join us in capitalizing on the $80.7B AI investment surge. AstroLMS combines 
              AI-first learning with perfect market timing—positioned to capture the 
              $350B LMS market during peak AI adoption and funding cycle.
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
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <opportunity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{opportunity.title}</h3>
                  <p className="text-gray-400 mb-3 flex-grow">{opportunity.description}</p>
                  <div className="text-blue-400 font-semibold text-lg mt-auto">{opportunity.stat}</div>
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
                  Why AstroLMS is the Future of EdTech?
                </h3>
                <div className="space-y-4">
                  {[
                    'Market Timing: 42% of US VC funding ($80.7B) flowing to AI startups',
                    'AI Premium: 60% higher valuations than traditional SaaS companies',
                    'Series A Benchmark: Average $12M rounds, AI EdTech raising $15M+',
                    'Massive TAM: $350B LMS market + $32B AI education by 2032',
                    'Experienced team with proven track record and deep market knowledge',
                    'First-mover advantage in AI-native LMS during peak investment cycle'
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
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">$12-18M</div>
                  <div className="text-blue-400 text-xl font-semibold">Series A Target</div>
                  <div className="text-gray-400 text-sm mt-2">Based on AI premium valuations<br/>& current market benchmarks</div>
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