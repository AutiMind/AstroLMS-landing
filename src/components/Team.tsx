import { motion } from 'framer-motion';
import { Linkedin, X, Mail, GitHub } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Amy Cozart-Lundin, M.Ed.',
      role: 'CEO & Co-Founder',
      bio: 'Amy is an accomplished instructional designer and learning strategist with over a decade of experience in corporate learning and development. She specializes in building engaging, compliance-driven training programs and brings a strong background in digital course design, educational technology, and learner experience optimization.',
      image: '/C3FE986E-EA23-4996-A5D2-8CEEF3C2C4FB_4_5005_c.jpeg',
      social: {
        linkedin: 'https://www.linkedin.com/in/amycozartlundin/',
        twitter: '#',
        email: 'amy@autimind.com',
        github: 'https://github.com/grammar-nerd'
      }
    },
    {
      name: 'Andrea Cozart-Lundin',
      role: 'CTO & Co-Founder',
      bio: 'Andrea is a full-stack web developer with expertise in modern frameworks like Next.js and deep experience in building scalable SaaS platforms. She is passionate about leveraging emerging technologies, including Web3 and AI, to create innovative, user-centric digital solutions for education and beyond.',
      image: '/EDC62A9B-0B28-4CA3-9EF0-002FEF14DEC0_1_105_c.jpeg',
      social: {
        linkedin: 'https://www.linkedin.com/in/andrea-cozart-lundin/',
        twitter: '#',
        email: 'andrea@autimind.com',
        github: 'https://github.com/cozyartz'
      }
    }
  ];

  return (
    <section id="team" className="py-24 relative">
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
            Meet Our
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Founding Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining deep expertise in instructional design and cutting-edge web development 
            to revolutionize learning management systems.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                </div>

                {/* Member Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-left">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.social.linkedin}
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub className="h-5 w-5 text-gray-400 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="h-5 w-5 text-gray-400 hover:text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;