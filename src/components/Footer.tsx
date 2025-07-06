import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, X, GitBranch } from 'lucide-react';
import ContactForm from './ContactForm';
import NewsletterModal from './NewsletterModal';
import Logo from './Logo';

interface FooterLink {
  name: string;
  href: string;
  onClick?: () => void;
}

const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const footerLinks: Record<string, FooterLink[]> = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Demo', href: '#demo' },
    ],
    company: [
      { name: 'About', href: '#team' },
      { name: 'Blog', href: '#blog' }
    ],
    investors: [
      { name: 'Investment', href: '#investors' },
      { name: 'Contact', href: '#contact', onClick: () => setIsContactFormOpen(true) }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  return (
    <>
      <footer className="relative bg-gray-950 border-t border-gray-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Logo */}
                  <div className="mb-6">
                    <a href="/">
                      <Logo size="small" showText={true} />
                    </a>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Revolutionizing education through AI-powered learning management systems 
                    that adapt to every learner's unique needs and goals.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="h-4 w-4" />
                      <span>info@astrolms.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="h-4 w-4" />
                      <span>+1 269.261.0069</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>Battle Creek, MI</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Links Sections */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {Object.entries(footerLinks).map(([category, links], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-white font-semibold mb-4 capitalize">
                        {category}
                      </h3>
                      <ul className="space-y-3">
                        {links.map((link) => (
                          <li key={link.name}>
                            {link.onClick ? (
                              <button
                                onClick={link.onClick}
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                              >
                                {link.name}
                              </button>
                            ) : (
                              <a
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                              >
                                {link.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 py-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated on Our Journey
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates on product development, funding rounds, and partnership announcements.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-xl sm:rounded-r-none rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  onClick={() => setIsNewsletterOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-r-xl sm:rounded-l-none rounded-l-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 AutiMind, Inc. AstroLMS. All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: X, href: '#', label: 'X (Twitter)' },
                  { icon: GitBranch, href: 'https://github.com/cozyartz/AstroLMS', label: 'GitHub' }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />

      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </>
  );
};

export default Footer;