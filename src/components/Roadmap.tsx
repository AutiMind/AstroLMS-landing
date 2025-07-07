import { motion } from 'framer-motion';
import { CheckCircle, Clock, Target, Rocket, Globe } from 'lucide-react';

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1: Foundation',
      timeline: 'Q1 2024 - Q2 2024',
      status: 'completed',
      description: 'Core platform architecture and initial development',
      milestones: [
        { title: 'Landing Page & Brand Identity', completed: true },
        { title: 'Investor Pitch Deck', completed: true },
        { title: 'Team Assembly', completed: false },
        { title: 'Market Research & Analysis', completed: true },
        { title: 'Technical Architecture Planning', completed: true }
      ],
      color: 'from-green-500 to-emerald-500',
      icon: CheckCircle
    },
    {
      phase: 'Phase 2: Platform Development',
      timeline: 'Q3 2024 - Q2 2025',
      status: 'in-progress',
      description: 'Core LMS features and AI integration development',
      milestones: [
        { title: 'User Authentication & Management', completed: true },
        { title: 'Course Creation Framework', completed: true },
        { title: 'AI Learning Analytics Engine', completed: false },
        { title: 'Interactive Content Builder', completed: true },
        { title: 'Mobile-First Responsive Design', completed: true }
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: Clock
    },
    {
      phase: 'Phase 3: Beta Launch',
      timeline: 'Q3 2025 - Q4 2025',
      status: 'upcoming',
      description: 'Beta testing with select educational institutions',
      milestones: [
        { title: 'Beta User Onboarding System', completed: false },
        { title: 'AI-Powered Personalization', completed: true },
        { title: 'Advanced Analytics Dashboard', completed: true },
        { title: 'Integration with Popular LTI Tools', completed: false },
        { title: 'Performance Optimization', completed: false }
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Target
    },
    {
      phase: 'Phase 4: Market Launch',
      timeline: 'Q1 2026 - Q2 2026',
      status: 'planned',
      description: 'Public launch and customer acquisition',
      milestones: [
        { title: 'Production Infrastructure Scaling', completed: false },
        { title: 'Enterprise Customer Onboarding', completed: false },
        { title: 'Advanced AI Features', completed: false },
        { title: 'Multi-Language Support', completed: false },
        { title: 'API Ecosystem Launch', completed: false }
      ],
      color: 'from-orange-500 to-red-500',
      icon: Rocket
    },
    {
      phase: 'Phase 5: Scale & Expansion',
      timeline: 'Q3 2026+',
      status: 'future',
      description: 'Global expansion and advanced features',
      milestones: [
        { title: 'International Market Expansion', completed: false },
        { title: 'Advanced AI Tutoring System', completed: false },
        { title: 'VR/AR Learning Integration', completed: false },
        { title: 'Blockchain Credentialing', completed: false },
        { title: 'Enterprise White-Label Solutions', completed: false }
      ],
      color: 'from-violet-500 to-purple-500',
      icon: Globe
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 border-green-400';
      case 'in-progress': return 'text-blue-400 border-blue-400';
      case 'upcoming': return 'text-purple-400 border-purple-400';
      case 'planned': return 'text-orange-400 border-orange-400';
      case 'future': return 'text-violet-400 border-violet-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'upcoming': return 'Upcoming';
      case 'planned': return 'Planned';
      case 'future': return 'Future';
      default: return 'Unknown';
    }
  };

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            Development
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic development plan from concept to global impact
          </p>
        </motion.div>

        {/* Roadmap Phases */}
        <div className="space-y-16">
          {roadmapPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phase Card */}
                <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
                  {/* Phase Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center shadow-lg mr-6`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                        <p className="text-gray-300 text-sm">{phase.timeline}</p>
                      </div>
                    </div>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusColor(phase.status)}`}>
                      {getStatusText(phase.status)}
                    </div>
                  </div>

                  {/* Phase Description */}
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Milestones */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <motion.div
                        key={milestoneIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: milestoneIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                          milestone.completed
                            ? 'bg-green-500/10 border-green-500/30 text-green-300'
                            : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:border-blue-500/50'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                          milestone.completed
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-700 border-2 border-gray-600'
                        }`}>
                          {milestone.completed && <CheckCircle className="h-4 w-4" />}
                        </div>
                        <span className="font-medium">{milestone.title}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>
                        {Math.round((phase.milestones.filter(m => m.completed).length / phase.milestones.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${phase.color} transition-all duration-500`}
                        style={{ 
                          width: `${(phase.milestones.filter(m => m.completed).length / phase.milestones.length) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full" />
                )}
              </motion.div>
            );
          })}
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
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Development Journey</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of the revolution in educational technology. Connect with us to learn more about investment opportunities and partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://pitch.astrolms.com/pitch-deck-astrolms"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pitch Deck
              </motion.a>
              <motion.button
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;