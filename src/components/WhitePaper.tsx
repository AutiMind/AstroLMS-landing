import { motion } from 'framer-motion';
import { FileText, Download, Network, Blocks, Rocket, CheckCircle } from 'lucide-react';

const WhitePaper = () => {

  const keyConcepts = [
    {
      icon: Network,
      title: 'Decentralized Architecture',
      description: 'Breaking free from traditional centralized LMS limitations with distributed, blockchain-inspired infrastructure that ensures data ownership and seamless scalability.',
      highlights: ['Data Sovereignty', 'Global Accessibility', 'Zero Vendor Lock-in']
    },
    {
      icon: Blocks,
      title: 'Modular Framework',
      description: 'Component-based learning ecosystem where institutions can plug-and-play features, creating customized educational experiences without technical complexity.',
      highlights: ['Flexible Integration', 'Custom Workflows', 'Rapid Deployment']
    },
    {
      icon: Rocket,
      title: 'Future of Work Ready',
      description: 'Designed for the evolving workplace with AI-driven skill mapping, micro-learning paths, and real-time competency tracking for continuous professional development.',
      highlights: ['AI Skill Matching', 'Micro-Learning', 'Career Pathways']
    }
  ];

  const handleViewWhitePaper = () => {
    window.open('/whitepaper', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-medium">White Paper Available</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">AstroLMS:</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              A Decentralized, Modular
            </span>
            <span className="block text-gray-300 text-3xl md:text-4xl mt-2">
              Learning Management Platform
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Discover how we're revolutionizing education technology with blockchain-inspired architecture, 
            modular design, and AI-driven personalization for the future of work and learning.
          </motion.p>
        </motion.div>

        {/* Key Concepts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {keyConcepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 h-full">
                <div className="flex flex-col h-full">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                    <concept.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{concept.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{concept.description}</p>
                  
                  <div className="space-y-3">
                    {concept.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-gray-900/90 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
                >
                  <Download className="h-12 w-12 text-white" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Read the Complete White Paper
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Download our comprehensive analysis of the future of learning management systems, 
                  including architecture, market analysis, and implementation roadmap.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Comprehensive insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Technical architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Market analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Implementation roadmap</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.button
                  onClick={handleViewWhitePaper}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Read White Paper</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhitePaper;