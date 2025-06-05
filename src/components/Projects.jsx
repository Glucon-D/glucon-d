import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMedal,
  FaReact,
  FaCode,
  FaStar,
  FaTrophy,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiFirebase,
  SiAppwrite,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pathgenie",
      description:
        "Ai Powered Carrier Guidance Platform for Underserved Students.",
      image:
        "https://github.com/CyberBoyAyush/react-portfolio/blob/main/src/assets/pathgenie.png?raw=true",
      tags: ["AI", "React", "Node.js", "Appwrite", "Groq", "Llama"],
      github: "https://github.com/glucon-d/pathgenie",
      demo: "https://pathgenie.ayush-sharma.in/",
      category: "ai",
      achievement: "1st Place - Hackerzstreet Hackathon (IEEE)",
    },
    {
      id: 2,
      title: "Finwise",
      description: "Ai Based Financial Advisor for Beginners.",
      image:
        "https://github.com/CyberBoyAyush/react-portfolio/blob/main/src/assets/finwise.png?raw=true",
      tags: ["React", "Firebase", "Gemini API", "Appwrite", "Grow API"],
      github: "https://github.com/glucon-d/finwise",
      demo: "https://finwise.ayush-sharma.in/",
      category: "web",
      achievement: "8th Position - Hackaccino (Bennet)",
    },
    {
      id: 3,
      title: "Intellica",
      description: "Ai Based Learning Platform for Everyone.",
      image:
        "https://github.com/CyberBoyAyush/react-portfolio/blob/main/src/assets/intellica.png?raw=true",
      tags: ["React", "Firebase", "Charts", "Gemini API", "Appwrite"],
      github: "https://github.com/glucon-d/intellica",
      demo: "https://intellica.ayush-sharma.in/",
      category: "ai",
      achievement: "5th Place - Built Fest (CyberSpace)",
    },
  ];

  // Background floating icons - reduced number for better performance
  const floatingIcons = [
    { icon: <FaReact />, className: "text-blue-400", size: 24, delay: 0 },
    { icon: <SiTailwindcss />, className: "text-cyan-400", size: 28, delay: 1 },
    { icon: <SiFramer />, className: "text-purple-400", size: 24, delay: 3 },
    { icon: <SiFirebase />, className: "text-yellow-500", size: 26, delay: 2 },
    { icon: <FaCode />, className: "text-green-400", size: 24, delay: 1.5 },
    { icon: <FaStar />, className: "text-yellow-300", size: 16, delay: 0.5 },
  ];

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.4,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0.3 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-900">
      <section className="bg-gradient-to-b pt-28 from-gray-950/90 via-gray-900 to-gray-800 text-white py-20 relative overflow-hidden rounded-3xl">
        {/* Floating background elements - simplified for better performance */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient blobs - fewer with optimized animations */}
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-orange-500 rounded-full filter blur-[100px] opacity-10"></div>
          <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-orange-500 rounded-full filter blur-[120px] opacity-10"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmgxOHYtNkgzNnptMCAxMnY2aDE4di02SDM2em0wIDEydjZoMTh2LTZIMzZ6bS0xOCAwaDE4di02SDE4djZ6bTAgMTJoMTh2LTZIMTh2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>

          {/* Floating icons - optimized animations */}
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              className={`absolute ${icon.className} hidden lg:block`}
              style={{
                fontSize: icon.size,
                top: `${10 + ((index * 10) % 80)}%`,
                left: `${5 + ((index * 12) % 90)}%`,
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0.2,
              }}
              animate={{
                y: [0, index % 2 === 0 ? -10 : -5, 0],
                x: [0, index % 2 === 0 ? 8 : -8, 0],
                rotate: [0, index % 2 === 0 ? 15 : -15, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: icon.delay,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              {icon.icon}
            </motion.div>
          ))}

          {/* Moving React icons - simplified */}
          <motion.div
            className="absolute text-blue-400 text-5xl opacity-10 hidden lg:block"
            style={{ left: "10%", top: "20%" }}
            animate={{
              rotate: 360,
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <FaReact />
          </motion.div>

          <motion.div
            className="absolute text-blue-400 text-4xl opacity-10 hidden lg:block"
            style={{ right: "15%", bottom: "30%" }}
            animate={{
              rotate: -360,
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            }}
          >
            <FaReact />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0.3, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Our <span className="text-orange-500">Projects</span>
              <motion.div
                className="absolute -top-6 -right-6 text-orange-500 opacity-20 text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket />
              </motion.div>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Check out what we've built during our caffeine-fueled coding
              sessions!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={projectVariants}
              />
            ))}
          </motion.div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-r from-gray-800/50 via-gray-800 to-gray-800/50 p-6 rounded-xl border border-gray-700 inline-block max-w-2xl mx-auto shadow-lg"
              whileHover={{
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.2)",
                scale: 1.02,
                borderColor: "#f97316",
              }}
            >
              <FaTrophy className="text-orange-500 text-3xl mx-auto mb-4" />
              <p className="text-gray-300 italic text-lg">
                "We don't just build projects, we craft digital experiences that
                solve real problems...with a healthy dose of memes and inside
                jokes."
              </p>
              <div className="w-16 h-0.5 bg-orange-500 mx-auto my-4"></div>
              <p className="text-gray-400 text-sm">
                Team Glucon-D — Powered by caffeine, driven by passion
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden h-full border-2 border-gray-700 hover:border-orange-500 shadow-xl transition-all duration-500"
      variants={variants}
      initial={{ opacity: 0.3, y: 0 }} // Start fully visible
      whileHover={{
        y: -12,
        boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.4)",
      }}
    >
      {/* Simplified glowing effect for better performance */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-500/0 to-orange-400/0 opacity-0 group-hover:opacity-20 z-0 transition-opacity duration-700"></div>

      {/* Glass card content */}
      <div className="backdrop-blur-sm bg-gradient-to-b from-gray-800/95 to-gray-900/95 h-full flex flex-col">
        <div className="relative h-60 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

          {project.achievement && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-4 rounded-full shadow-lg">
              <div className="flex items-center gap-1.5">
                <FaMedal className="text-yellow-300" />
                <span className="text-xs font-bold text-white">
                  {project.achievement}
                </span>
              </div>
            </div>
          )}

          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 p-2 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-white" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500/90 backdrop-blur-sm hover:bg-orange-600 p-2 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt className="text-white" />
            </motion.a>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">
              {project.title}
            </h3>
            <motion.div
              className="flex items-center px-2.5 py-1 bg-gray-700/70 rounded-full text-xs font-medium text-gray-200"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f97316",
                color: "white",
              }}
            >
              {project.category === "ai" ? (
                <>
                  <FaRocket className="mr-1 text-orange-400" /> AI Project
                </>
              ) : (
                <>
                  <FaLaptopCode className="mr-1 text-blue-400" /> Web App
                </>
              )}
            </motion.div>
          </div>

          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="text-xs bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 py-1 px-3 rounded-full shadow-sm"
                whileHover={{ scale: 1.1, y: -2, color: "#f97316" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex justify-between gap-4 mt-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub /> View Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt /> Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
