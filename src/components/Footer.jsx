import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaSyringe, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLaughSquint,
  FaCode
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, href: 'https://github.com/cyberboyayush', name: 'GitHub' },
    { icon: <FaTwitter />, href: 'https://twitter.com/cyberboyayush', name: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com/cyberboyayush', name: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/cyberboyayush', name: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:hello@ayush-sharma.in', name: 'Email' }
  ];

  const quickLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/tech", text: "Tech Stack" },
    { to: "/projects", text: "Projects" },
    { to: "/team", text: "Meet The Team" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Brand and social links */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center mb-4">
              <FaSyringe className="text-orange-500 text-2xl mr-2" />
              <span className="text-white font-bold text-xl">Glucon-D</span>
              <FaLaughSquint className="text-orange-500 text-xl ml-1" />
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              We're just a bunch of talented devs who believe the best code is written after midnight.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500"
                  whileHover={{ y: -5, scale: 1.2 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links and Contact combined */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 md:w-2/3 md:justify-end">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                      <FaCode className="text-xs text-orange-500" /> {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaGithub className="text-orange-500 mr-2" />
                  <a href="https://github.com/cyberboyayush" className="text-gray-400 hover:text-white text-sm">
                    @cyberboyayush
                  </a>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-orange-500 mr-2" />
                  <a href="mailto:hello@ayush-sharma.in" className="text-gray-400 hover:text-white text-sm">
                    hello@ayush-sharma.in
                  </a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-2" />
                  <span className="text-gray-400 text-sm">
                    Somewhere in a hackathon
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter compact */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500">Newsletter</h3>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-1 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-sm w-32 md:w-auto"
                />
                <motion.button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md text-sm"
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-400 mb-2 md:mb-0">
            © {currentYear} Team Glucon-D. Built with ⚡ and ☕
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link>
          </div>
        </div>
      </div>

      <motion.div 
        className="bg-orange-500 text-center py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs font-medium">
          Currently accepting hackathon invitations and energy drink sponsorships! 🚀
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
