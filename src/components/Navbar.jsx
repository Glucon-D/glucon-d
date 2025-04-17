import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSyringe, FaBars, FaTimes, FaLaughSquint, FaBolt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEnergyPopup, setShowEnergyPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3, 
        when: "afterChildren" 
      }
    },
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 }
  };

  const logoVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  };

  const handleGetEnergized = () => {
    setShowEnergyPopup(true);
    // Auto close after 3 seconds
    setTimeout(() => {
      setShowEnergyPopup(false);
    }, 3000);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-3 bg-gray-900/90 shadow-lg' : 'py-5 bg-gray-900/70'
        }`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link to="/" className="flex items-center group">
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              className="flex items-center"
            >
              <FaSyringe className="text-orange-500 text-2xl mr-2 group-hover:text-orange-400 transition-colors" />
              <span className="text-white font-bold text-xl group-hover:text-orange-200 transition-colors">
                Glucon-D
              </span>
              <FaLaughSquint className="text-orange-500 text-xl ml-1 group-hover:text-orange-400 transition-colors" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">About</Link>
            <Link to="/tech" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Tech Stack</Link>
            <Link to="/projects" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Projects</Link>
            <Link to="/team" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Team</Link>
            
            <motion.button 
              className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2 px-4 rounded-full text-sm flex items-center gap-1 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetEnergized}
            >
              <FaBolt className="text-yellow-300" /> Get Energized
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0, rotate: isOpen ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 45 : -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? 
                    <FaTimes className="text-2xl text-orange-500" /> : 
                    <FaBars className="text-2xl" />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="container mx-auto px-6">
                <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/95 backdrop-blur-lg mt-2 py-4 px-4 rounded-xl border border-gray-700/30 shadow-xl divide-y divide-gray-700/30">
                  <div className="flex flex-col space-y-1 pb-3">
                    <Link to="/" className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/about" className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-300">About</Link>
                    <Link to="/tech" className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-300">Tech Stack</Link>
                    <Link to="/projects" className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-300">Projects</Link>
                    <Link to="/team" className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-300">Team</Link>
                  </div>
                  
                  <motion.div 
                    className="pt-3 flex justify-center"
                    variants={itemVariants}
                  >
                    <motion.button 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-full text-sm flex items-center shadow-md w-full justify-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleGetEnergized}
                    >
                      <FaBolt className="text-yellow-300" /> Get Energized
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Energy Popup */}
      <AnimatePresence>
        {showEnergyPopup && (
          <motion.div
            className="fixed bottom-6 right-6 bg-orange-500 text-white py-3 px-5 rounded-lg shadow-xl z-50 flex items-center gap-3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              <FaBolt size={20} className="text-yellow-300" />
            </motion.div>
            <div>
              <p className="font-bold">Energy Boost Applied!</p>
              <p className="text-sm">You'll now code 2x faster for 4 hours</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;