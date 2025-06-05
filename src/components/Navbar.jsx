import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSyringe,
  FaBars,
  FaTimes,
  FaLaughSquint,
  FaBolt,
  FaStar,
  FaFire,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import confetti from "canvas-confetti"; // Import confetti

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEnergyPopup, setShowEnergyPopup] = useState(false);
  const location = useLocation();

  // Enhanced energy button effects
  const [energyLevel, setEnergyLevel] = useState(0);
  const [showEnergyPulse, setShowEnergyPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Reset energy after popup is shown
  useEffect(() => {
    if (showEnergyPopup) {
      setEnergyLevel(0);
      setShowEnergyPulse(false);
    }
  }, [showEnergyPopup]);

  // Show pulsing effect when energy is maxed
  useEffect(() => {
    if (energyLevel === 3) {
      setShowEnergyPulse(true);
    }
  }, [energyLevel]);

  // Improved fade animation variants for navbar
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Improved menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Fade animation for menu items instead of y translation
  const itemVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  const incrementEnergy = () => {
    setEnergyLevel((prev) => Math.min(prev + 1, 3));
  };

  // Function to trigger confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6, x: 0.5 },
      colors: ["#f97316", "#f59e0b", "#fcd34d"],
      startVelocity: 30,
      gravity: 0.8,
      shapes: ["circle", "square"],
      scalar: 1.2,
    });
  };

  const handleGetEnergized = () => {
    // If energy is already at max, show popup and trigger confetti
    if (energyLevel === 0) {
      triggerConfetti();
      setShowEnergyPopup(true);
      setTimeout(() => {
        setShowEnergyPopup(false);
      }, 3000);
      return;
    }

    // Otherwise, increment energy level
    incrementEnergy();

    // Show visual feedback on button press
    const pulse = document.createElement("div");
    pulse.className = "absolute inset-0 bg-orange-400/30 rounded-full";
    document.getElementById("energy-button")?.appendChild(pulse);
    setTimeout(() => pulse.remove(), 300);

    // If we just reached level 3 with this click, trigger immediately
    if (energyLevel === 2) {
      setTimeout(() => {
        triggerConfetti();
        setShowEnergyPopup(true);
        setTimeout(() => {
          setShowEnergyPopup(false);
        }, 3000);
      }, 300);
    }
  };

  // Energy button gradient based on level
  const energyButtonGradient = () => {
    switch (energyLevel) {
      case 0:
        return "from-orange-500 to-orange-600";
      case 1:
        return "from-orange-500 to-yellow-500";
      case 2:
        return "from-yellow-400 to-orange-500";
      case 3:
        return "from-yellow-300 to-orange-400";
      default:
        return "from-orange-500 to-orange-600";
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "py-3 bg-gray-900/90 shadow-lg" : "py-5 bg-gray-900/70"
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

          {/* Desktop Menu with fade animations */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {["Home", "About", "Tech", "Projects", "Team"].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.button
                id="energy-button"
                className={`ml-4 relative overflow-hidden group bg-gradient-to-r ${energyButtonGradient()} text-white font-medium py-2 px-4 rounded-full text-sm flex items-center gap-1.5 shadow-md`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetEnergized}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-yellow-400/40 to-orange-500/40 opacity-0 ${
                    showEnergyPulse ? "animate-pulse-fast" : ""
                  }`}
                  animate={showEnergyPulse ? { opacity: [0, 0.6, 0] } : {}}
                  transition={
                    showEnergyPulse ? { repeat: Infinity, duration: 1.5 } : {}
                  }
                />

                <motion.span
                  animate={
                    showEnergyPulse
                      ? {
                          rotate: [-10, 10, -10],
                          transition: { repeat: Infinity, duration: 0.5 },
                        }
                      : {}
                  }
                >
                  {energyLevel >= 3 ? (
                    <FaFire className="text-yellow-300" />
                  ) : (
                    <FaBolt className="text-yellow-300" />
                  )}
                </motion.span>

                <span className="relative">
                  Get Energized
                  {energyLevel > 0 && (
                    <motion.span
                      className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-yellow-300 to-orange-400">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      </span>
                    </motion.span>
                  )}
                </span>

                {energyLevel === 3 && (
                  <motion.span
                    className="absolute top-0 right-0 -mt-1 -mr-1"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      rotate: [0, 20, 0, -20, 0],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      rotate: { repeat: Infinity, duration: 1.5 },
                    }}
                  >
                    <FaStar className="text-yellow-300 text-xs" />
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button with smoother animations */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "open" : "closed"}
                  initial={{ opacity: 0, rotate: isOpen ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 45 : -45 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <FaTimes className="text-2xl text-orange-500" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with fade animations */}
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
                    {["Home", "About", "Tech Stack", "Projects", "Team"].map(
                      (item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Link
                            to={
                              item === "Home"
                                ? "/"
                                : `/${item.toLowerCase().replace(" ", "-")}`
                            }
                            className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-300"
                          >
                            {item}
                          </Link>
                        </motion.div>
                      )
                    )}
                  </div>

                  <motion.div
                    className="pt-3 flex justify-center"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-full text-sm flex items-center shadow-md w-full justify-center gap-1"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
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

      {/* Energy Popup with improved fade animation and centered positioning */}
      <AnimatePresence>
        {showEnergyPopup && (
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-l from-amber-500 to-orange-500 text-white p-5 rounded-lg shadow-lg z-50 text-center max-w-sm"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <motion.div
              className="text-4xl mb-3 mx-auto"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaSyringe className="text-white mx-auto" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">ENERGY BOOST ACTIVATED!</h3>
            <p>Your coding powers have increased by 200%!</p>
            <p className="text-sm mt-2 text-yellow-200">
              (Effects last until the next coffee break)
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
