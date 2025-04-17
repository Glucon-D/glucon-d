import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[5%] w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1.5, 1, 1.5], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 py-12 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <motion.h2 
              className="text-orange-500 text-2xl font-bold mb-3"
              variants={itemVariants}
            >
              When coffee fails, reach for
            </motion.h2>

            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 relative"
              variants={itemVariants}
            >
              Team Glucon-D
              <motion.span 
                animate={floatingAnimation} 
                className="absolute -top-8 -right-8 text-4xl"
              >
                🥴
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-gray-300 text-xl mb-8 max-w-lg"
              variants={itemVariants}
            >
              We're like that sugar rush at 3 AM – <span className="text-orange-400 font-semibold">unexpectedly effective</span> and slightly concerning! Our code has more electrolytes than your average sports drink and twice the bugs!
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link to="/projects">
                <motion.button 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket /> View Our Happy Accidents
                </motion.button>
              </Link>
              <Link to="/team">
                <motion.button 
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 border border-orange-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBolt /> Meet The Sleep-Deprived
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 flex justify-center relative"
            variants={itemVariants}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <motion.img 
                    src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif" 
                    alt="Funny cat gif" 
                    className="w-full h-full object-cover"
                    animate={floatingAnimation}
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating tech icons */}
            <motion.div 
              className="absolute -top-5 right-20 text-4xl"
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              🚀
            </motion.div>
            <motion.div 
              className="absolute bottom-10 right-0 text-4xl"
              animate={{ 
                y: [0, 10, 0], 
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: 0.5 
              }}
            >
              💻
            </motion.div>
            <motion.div 
              className="absolute bottom-20 left-10 text-4xl"
              animate={{ 
                y: [0, 15, 0], 
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              🏆
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 text-orange-500">
            <FaFire className="text-xl" />
            <p className="font-semibold text-lg">Converting pizza into bugs since 2025</p>
            <FaFire className="text-xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;