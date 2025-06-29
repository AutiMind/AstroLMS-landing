import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Zap,
  Globe,
  Shield,
  Smartphone,
  Cloud
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Intelligent algorithms that adapt to each learner\'s pace and style.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Real-time collaboration tools for students and educators.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into learning progress and outcomes.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Interactive Content',
      description: 'Engaging multimedia content and immersive simulations.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Multi-language support and accessibility features.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with GDPR and FERPA compliance.',
      color: 'from-pink-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Seamless experience across all devices and platforms.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Scalable cloud infrastructure with 99.9% uptime.',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
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
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern Learning
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AstroLMS combines cutting-edge technology with proven educational methodologies 
            to create the ultimate learning management experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-gray-500 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;