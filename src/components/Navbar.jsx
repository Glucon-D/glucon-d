import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSyringe, FaBars, FaTimes, FaLaughSquint } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.nav 
      className="bg-gray-900 shadow-lg px-6 py-4 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <FaSyringe className="text-orange-500 text-2xl mr-2" />
          <motion.span 
            className="text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            Glucon-D
          </motion.span>
          <FaLaughSquint className="text-orange-500 text-xl ml-1" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink text="Home" to="/" />
          <NavLink text="About" to="/about" />
          <NavLink text="Tech Stack" to="/tech" />
          <NavLink text="Projects" to="/projects" />
          <NavLink text="Team" to="/team" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? 
              <FaTimes className="text-2xl" /> : 
              <FaBars className="text-2xl" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-gray-800 mt-2 py-4 px-6 rounded-lg"
          initial="closed"
          animate="open"
          variants={menuVariants}
        >
          <div className="flex flex-col space-y-4">
            <MobileNavLink text="Home" to="/" setIsOpen={setIsOpen} />
            <MobileNavLink text="About" to="/about" setIsOpen={setIsOpen} />
            <MobileNavLink text="Tech Stack" to="/tech" setIsOpen={setIsOpen} />
            <MobileNavLink text="Projects" to="/projects" setIsOpen={setIsOpen} />
            <MobileNavLink text="Team" to="/team" setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ text, to }) => {
  return (
    <Link to={to}>
      <motion.span 
        className="text-gray-300 hover:text-orange-500 font-medium transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.span>
    </Link>
  );
};

const MobileNavLink = ({ text, to, setIsOpen }) => {
  return (
    <Link to={to} onClick={() => setIsOpen(false)}>
      <motion.span 
        className="block text-gray-300 hover:text-orange-500 font-medium transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.span>
    </Link>
  );
};

export default Navbar;