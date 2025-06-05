import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaRocket,
  FaBolt,
  FaFire,
  FaCode,
  FaCoffee,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiAppwrite,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Tech icons that will float in the background
  const techIcons = [
    {
      icon: <FaReact />,
      color: "text-blue-400",
      size: "text-2xl md:text-3xl",
      position: "top-[15%] left-[10%]",
      animationDuration: 6,
    },
    {
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
      size: "text-3xl md:text-4xl",
      position: "top-[25%] right-[15%]",
      animationDuration: 8,
    },
    {
      icon: <SiNextdotjs />,
      color: "text-white",
      size: "text-2xl md:text-3xl",
      position: "bottom-[20%] left-[15%]",
      animationDuration: 7,
    },
    {
      icon: <SiAppwrite />,
      color: "text-red-400",
      size: "text-2xl md:text-3xl",
      position: "bottom-[30%] right-[10%]",
      animationDuration: 9,
    },
    {
      icon: <SiFramer />,
      color: "text-purple-400",
      size: "text-3xl md:text-4xl",
      position: "top-[40%] left-[20%]",
      animationDuration: 10,
    },
    {
      icon: <FaCode />,
      color: "text-green-400",
      size: "text-2xl md:text-3xl",
      position: "top-[45%] right-[20%]",
      animationDuration: 7.5,
    },
    {
      icon: <FaCoffee />,
      color: "text-yellow-400",
      size: "text-2xl md:text-3xl",
      position: "bottom-[15%] right-[25%]",
      animationDuration: 8.5,
    },
  ];

  return (
    <section className="relative pt-14 md:pt-24 min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white flex items-center justify-center overflow-hidden w-full">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-48 h-48 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-60 h-60 bg-gradient-to-br from-orange-300 to-orange-600 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.15, 0.1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-40 h-40 bg-gradient-to-tr from-orange-300 to-orange-400 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[15%] w-36 h-36 bg-gradient-to-tl from-orange-500 to-yellow-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmgxOHYtNkgzNnptMCAxMnY2aDE4di02SDM2em0wIDEydjZoMTh2LTZIMzZ6bS0xOCAwaDE4di02SDE4djZ6bTAgMTJoMTh2LTZIMTh2NnptMC0xOGgxOHYtNkgxOHY2em0wLTEyaDE4di02SDE4djZ6bTAtMTJoMTh2LTZIMTh2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        {/* Floating Tech Icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className={`absolute ${tech.position} ${tech.color} ${tech.size} opacity-30 hidden md:block`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, tech.animationDuration % 2 === 0 ? 360 : -360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: tech.animationDuration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 z-10 w-full overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 w-full">
          <div className="flex-1 w-full px-1 sm:px-2">
            <motion.h2
              className="text-orange-500 text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3"
              variants={itemVariants}
            >
              When coffee fails, reach for
            </motion.h2>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 relative pr-5"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500">
                Team Glucon-D
              </span>
              <motion.span
                animate={floatingAnimation}
                className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 md:-top-8 md:-right-8 text-xl sm:text-2xl md:text-3xl"
              >
                🥴
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-lg"
              variants={itemVariants}
            >
              We're like that sugar rush at 3 AM –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 font-semibold">
                unexpectedly effective
              </span>{" "}
              and slightly concerning! Our code has more electrolytes than your
              average sports drink and twice the bugs!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <Link to="/projects">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full flex items-center gap-1 sm:gap-2 transition-all shadow-lg shadow-orange-500/20"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="animate-pulse" /> View Projects
                </motion.button>
              </Link>
              <Link to="/team">
                <motion.button
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full flex items-center gap-1 sm:gap-2 border border-orange-500 transition-all shadow-lg shadow-orange-500/10"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBolt className="text-orange-400" /> Meet Team
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex-1 flex justify-center relative mt-4 sm:mt-6 md:mt-0 w-full max-h-[400px] md:max-h-full"
            variants={itemVariants}
          >
            <div className="w-56 h-56 xs:w-64 xs:h-64 sm:w-68 sm:h-68 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-xl shadow-orange-500/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ boxShadow: "0 0 25px rgba(249, 115, 22, 0.4)" }}
              >
                <motion.div
                  className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
                    alt="Funny cat gif"
                    className="w-full h-full object-cover object-center scale-125"
                    animate={floatingAnimation}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                  />
                </motion.div>
              </motion.div>

              {/* Animated orbital ring */}
              <motion.div
                className="absolute inset-[-10px] border-2 border-dashed border-orange-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Floating tech icons - better positioned for all screens */}
            <motion.div
              className="absolute -top-4 sm:-top-5 right-5 sm:right-10 md:right-16 text-lg sm:text-xl md:text-3xl hidden sm:block"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              🚀
            </motion.div>
            <motion.div
              className="absolute bottom-5 sm:bottom-10 right-0 text-lg sm:text-xl md:text-3xl hidden sm:block"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              💻
            </motion.div>
            <motion.div
              className="absolute bottom-10 sm:bottom-16 left-0 sm:left-4 text-lg sm:text-xl md:text-3xl hidden sm:block"
              animate={{
                y: [0, 15, 0],
                rotate: [0, 15, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              🏆
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-4 sm:mt-6 md:mt-8 text-center"
          variants={itemVariants}
        >
          <motion.div
            className=" items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/20 to-orange-500/10 backdrop-blur-sm py-2 px-4 rounded-full inline-flex mx-auto"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FaFire className="text-sm sm:text-lg md:text-xl text-orange-500" />
            <p className="font-semibold text-sm sm:text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
              Converting pizza into bugs since 2025
            </p>
            <FaFire className="text-sm sm:text-lg md:text-xl text-orange-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
