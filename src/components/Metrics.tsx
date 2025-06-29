import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Rocket } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      icon: Users,
      value: '$80.7B',
      label: 'AI VC Funding',
      description: '42% of US venture capital in 2024',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      value: '60%',
      label: 'AI Premium',
      description: 'Higher valuations vs traditional SaaS',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      value: '$32B',
      label: 'AI Education',
      description: 'Market size by 2032 (17% CAGR)',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Rocket,
      value: '$15M+',
      label: 'Series A Range',
      description: 'AI EdTech funding benchmarks',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Market
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Opportunity
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI companies are commanding premium valuations during the largest AI investment 
            cycle in history—positioning AstroLMS for optimal funding conditions.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {metric.value}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {metric.label}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">$12M</div>
                <div className="text-gray-400">Series A Average 2024</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Q4 2025</div>
                <div className="text-gray-400">Beta Launch Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">$350B</div>
                <div className="text-gray-400">Total LMS Market</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;