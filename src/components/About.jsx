import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLightbulb,
  FaCoffee,
  FaCode,
  FaChartLine,
  FaCat,
  FaLaugh,
  FaUsers,
  FaRocket,
  FaTrophy,
  FaRegSurprise,
  FaBolt,
  FaPizzaSlice,
  FaSyringe,
  FaMagic,
  FaQuestion,
  FaBomb,
  FaLaughSquint,
} from "react-icons/fa";
import confetti from "canvas-confetti";

const About = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState(0);
  const [showEnergyBoost, setShowEnergyBoost] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

  // Track cursor position for magnetic effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Magnetic effect for the fun fact button
  useEffect(() => {
    if (!showFunFact) {
      const funFactButton = document.getElementById("fun-fact-button");
      if (funFactButton) {
        const rect = funFactButton.getBoundingClientRect();
        const buttonCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        const distanceX = mousePosition.x - buttonCenter.x;
        const distanceY = mousePosition.y - buttonCenter.y;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        // Only apply magnetic effect within a certain range
        if (distance < 300) {
          const magnetStrength = 30;
          const moveX =
            (distanceX / distance) * magnetStrength * (1 - distance / 300);
          const moveY =
            (distanceY / distance) * magnetStrength * (1 - distance / 300);
          setButtonPosition({ x: moveX, y: moveY });
        } else {
          setButtonPosition({ x: 0, y: 0 });
        }
      }
    }
  }, [mousePosition, showFunFact]);

  const containerVariants = {
    hidden: { opacity: 0.7 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0.7 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const catMemes = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // cat typing frantically
    "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif", // cat sleeping on keyboard
    "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif", // cat knocking things off desk
  ];

  const funFacts = [
    "Our team lead once debugged an entire application while sleepwalking.",
    "We've collectively consumed enough Glucon-D to fill an Olympic swimming pool.",
    "Our longest coding session lasted 72 hours - we speak in code now.",
    "We named all our bugs after Disney characters. 'Elsa' is our favorite - it just won't let it go!",
    "Our design philosophy: 'If it looks good after 3AM, it's probably terrible.'",
    "We once fixed a major bug by accidentally spilling coffee on the keyboard.",
    "Our team mascot is a rubber duck with Googly eyes named 'Quacky McDebugFace'",
  ];

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f97316", "#f59e0b", "#fcd34d"],
    });
  };

  const handleFunFactClick = () => {
    setCurrentFunFact((prev) => (prev + 1) % funFacts.length);
    setShowFunFact(true);
    setTimeout(() => setShowFunFact(false), 4000);
  };

  const handleEnergyClick = () => {
    setShowEnergyBoost(true);
    triggerConfetti();
    setTimeout(() => setShowEnergyBoost(false), 3000);

    // Track clicks for Easter egg
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setIsEasterEggActive(true);
        setTimeout(() => setIsEasterEggActive(false), 5000);
      }
      return newCount;
    });
  };

  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Animated particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-orange-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0],
              scale: [1, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}

      {/* Cat meme easter egg with enhanced animation */}
      <motion.img
        src={catMemes[Math.floor(Math.random() * catMemes.length)]}
        className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full hidden md:block"
        style={{ top: "5%", right: "5%" }}
        initial={{ opacity: 0.7, rotate: -20 }}
        animate={{
          opacity: [0, 1, 0],
          rotate: [-20, 0, 20],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 15,
        }}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        whileHover={{ scale: 1.5, rotate: 0 }}
        whileTap={{ scale: 0.9 }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0.7, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400"
            whileHover={{ scale: 1.05 }}
          >
            About <span className="text-white">Us</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're not your average coding team. We're the sugar rush in the
            hackathon world.
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🍬
            </motion.span>
          </p>

          {/* Interactive buttons row */}
          <motion.div
            className="flex justify-center gap-3 md:gap-5 mt-8 flex-wrap"
            initial={{ opacity: 0.7, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              id="fun-fact-button"
              onClick={handleFunFactClick}
              className="px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20 relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRegSurprise className="text-yellow-300" />
              <span>Random Fun Fact</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 -z-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={handleEnergyClick}
              className="px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20 relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBolt className="text-yellow-300" />
              <span>Energy Boost</span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full -z-10 opacity-0 group-hover:opacity-30"
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* <motion.button
              className="px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => triggerConfetti()}
            >
              <FaMagic className="text-yellow-200" />
              <span>Magic Moment</span>
            </motion.button> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaUsers className="mr-3 text-orange-500" />
              </motion.div>
              Our Story
            </h3>
            <p className="text-gray-300 mb-6">
              Born from the depths of midnight coding sessions and fueled by
              actual Glucon-D packets, our team came together with one mission:
              to build epic stuff while having even more epic fun.
            </p>
            <p className="text-gray-300 mb-6">
              Legend says we once coded for 48 hours straight and the only thing
              that kept us going was our namesake energy drink and the
              collective belief that sleep is for the weak. (Don't try this at
              home, kids. Sleep is actually important.)
            </p>

            <motion.div
              className="bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-orange-500/30 mb-8 shadow-lg transform hover:scale-[1.01] transition-transform"
              whileHover={{
                boxShadow: "0 0 25px rgba(249, 115, 22, 0.15)",
                borderColor: "rgba(249, 115, 22, 0.5)",
              }}
            >
              <p className="italic text-sm text-gray-400 flex items-start">
                <FaLaugh className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
                <span>
                  "One time our team lead fell asleep during a demo and
                  sleep-talked the entire API documentation. The judges were so
                  impressed they gave us extra points for 'subconscious
                  documentation'"
                </span>
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg border border-orange-500/30 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    borderColor: "rgba(249, 115, 22, 0.8)",
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <FaCode className="text-orange-500 text-2xl" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Code like nobody's watching
                  </h4>
                  <p className="text-gray-400">
                    But document it like everyone is judging your variable
                    names. (They are.)
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg border border-orange-500/30 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    borderColor: "rgba(249, 115, 22, 0.8)",
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <FaChartLine className="text-orange-500 text-2xl" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Moving fast and fixing things
                  </h4>
                  <p className="text-gray-400">
                    Usually our own bugs, if we're honest. Our record is 73 bug
                    fixes in one hour, most of which we created that same hour.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative order-1 md:order-2"
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 via-gray-800/90 to-gray-900 p-6 md:p-8 rounded-xl shadow-xl border-l-4 border-orange-500 relative z-10"
              whileHover={{ boxShadow: "0 0 40px rgba(249, 115, 22, 0.15)" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 5, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaRocket className="mr-3 text-orange-500" />
                </motion.div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
                  Our Vision & Values
                </span>
              </h3>

              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaLightbulb className="text-orange-500 text-2xl" />
                  <h4 className="text-xl font-bold">Vision</h4>
                </div>
                <motion.div
                  className="ml-9 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-lg border-l-2 border-orange-500/50"
                  whileHover={{
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    borderColor: "rgba(249, 115, 22, 0.8)",
                  }}
                >
                  <p className="text-gray-300 italic">
                    "To build software so good that even our competitors'
                    debugging consoles say 'wow'"
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaCoffee className="text-orange-500 text-2xl" />
                  <h4 className="text-xl font-bold">Motto</h4>
                </div>
                <motion.div
                  className="ml-9 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-lg border-l-2 border-orange-500/50"
                  whileHover={{
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    borderColor: "rgba(249, 115, 22, 0.8)",
                  }}
                >
                  <p className="text-gray-300 italic">
                    "When life gives you bugs, deploy them as features!"
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="pt-6 border-t border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaCat className="text-orange-500 text-2xl" />
                  <h4 className="text-xl font-bold">Team Spirit Animal</h4>
                </div>
                <motion.div
                  className="ml-9 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-lg border-l-2 border-orange-500/50"
                  whileHover={{
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    borderColor: "rgba(249, 115, 22, 0.8)",
                  }}
                >
                  <p className="text-gray-300 mb-3">
                    The cat: Sleeps 16 hours, works intensely for 15 minutes,
                    then knocks things off tables for the rest of the time.
                    Sounds like our development cycle!
                  </p>
                  <motion.div
                    className="flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <img
                      src="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif"
                      alt="Cat typing on keyboard"
                      className="h-20 rounded-lg"
                      loading="lazy"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 text-6xl hidden md:block"
                animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.5, rotate: 20 }}
              >
                🧃
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 p-6 md:p-8 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-xl border-t-4 border-orange-500 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0.7, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            boxShadow: "0 0 40px rgba(249, 115, 22, 0.2)",
            borderColor: "rgba(249, 115, 22, 0.8)",
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center">
              <FaTrophy className="text-orange-500 mr-3" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
                The Team Glucon-D Promise
              </span>
            </h3>

            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              We promise to approach every hackathon with the perfect blend of
              technical expertise, creative problem-solving, and meme
              references. If we can't solve a problem with code, we'll solve it
              with more code!
            </p>

            <div className="flex justify-center mb-6">
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-xl border border-gray-700/50 w-full max-w-xs"
                whileHover={{ scale: 1.03, rotate: 1 }}
              >
                <img
                  src="https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif"
                  alt="Cat programming meme"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm italic font-medium">
                    Our code, like this cat, seems chaotic but somehow produces
                    results.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-full font-bold inline-block shadow-lg shadow-orange-500/20 text-xl relative overflow-hidden"
                whileHover={{ boxShadow: "0 0 25px rgba(249, 115, 22, 0.4)" }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 -z-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                #CodeWithEnergy
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Fun fact popup */}
      <AnimatePresence>
        {showFunFact && (
          <motion.div
            className="fixed bottom-6 left-6 max-w-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow-xl z-50"
            initial={{ opacity: 0.7, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.7, x: -50, scale: 0.8 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FaLaughSquint className="text-2xl text-yellow-300" />
                </motion.div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Fun Fact!</h4>
                <p className="text-sm">{funFacts[currentFunFact]}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Energy boost popup */}
      <AnimatePresence>
        {showEnergyBoost && (
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-l from-amber-500 to-orange-500 text-white p-5 rounded-lg shadow-lg z-50 text-center max-w-sm"
            initial={{ opacity: 0.7, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0.7, scale: 0.5, y: 50 }}
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

      {/* Easter egg popup
      <AnimatePresence>
        {isEasterEggActive && (
          <motion.div
            className="fixed bottom-6 left-6 bg-orange-600 text-white px-6 py-5 rounded-lg shadow-lg z-50 text-center max-w-sm"
            initial={{ opacity: 0.7, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0.7, scale: 0.5, y: 50 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <motion.div
              className="text-5xl mb-4 mx-auto"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              🎉
            </motion.div>
            <h3 className="text-xl font-bold mb-3">Easter Egg Found!</h3>
            <p>
              You've discovered our secret! You're officially part of the Team
              Glucon-D fan club now!
            </p>
            <motion.div
              className="mt-4 text-sm bg-orange-700 py-2 px-4 rounded-lg inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Achievement Unlocked: Energy Enthusiast
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default About;
