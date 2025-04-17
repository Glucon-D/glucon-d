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
  FaLaughSquint
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/team-glucond', name: 'GitHub' },
    { icon: <FaTwitter />, href: 'https://twitter.com/teamglucond', name: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com/teamglucond', name: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/teamglucond', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <FaSyringe className="text-orange-500 text-2xl mr-2" />
              <span className="text-white font-bold text-xl">Glucon-D</span>
              <FaLaughSquint className="text-orange-500 text-xl ml-1" />
            </Link>
            <p className="text-gray-400 mb-6">
              We're just a bunch of talented devs who believe the best code is written after midnight, fueled by energy drinks and questionable life choices.
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
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/tech" text="Tech Stack" />
              <FooterLink to="/projects" text="Projects" />
              <FooterLink to="/team" text="Meet The Team" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-2" />
                <a href="mailto:hello@teamglucond.dev" className="text-gray-400 hover:text-white">
                  hello@teamglucond.dev
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                <span className="text-gray-400">
                  Somewhere in a hackathon, probably
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400 italic">
                "If you need us, we're either coding, sleeping, or trying to figure out why our code isn't working."
              </p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get updates on our latest wins, fails, and meme-worthy moments.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
                required
              />
              <motion.button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We promise not to spam you. Only occasional memes and project updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Team Glucon-D. All rights reserved. Built with ⚡ and ☕
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>

      <motion.div 
        className="bg-orange-500 text-center py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm font-medium">
          Currently accepting hackathon invitations and energy drink sponsorships! 🚀
        </p>
      </motion.div>
    </footer>
  );
};

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-white transition-colors duration-300">
      {text}
    </Link>
  </li>
);

export default Footer;
