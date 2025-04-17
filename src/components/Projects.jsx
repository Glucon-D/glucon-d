import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMedal } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pathgenie",
      description: "Ai Powered Carrier Guidance Platform for Underserved Students.",
      image: "https://github.com/CyberBoyAyush/react-portfolio/blob/main/src/assets/pathgenie.png?raw=true",
      tags: ["AI", "React", "Node.js", "Appwrite", "Groq", "Llama"],
      github: "https://github.com/glucon-d/pathgenie",
      demo: "https://pathgenie.ayush-sharma.in/",
      category: "ai",
      achievement: "1st Place - Hackerzstreet Hackathon (IEEE)"
    },
    {
      id: 2,
      title: "Finwise",
      description: "Ai Based Financial Advisor for Beginners.",
      image: "https://github.com/CyberBoyAyush/react-portfolio/blob/main/src/assets/finwise.png?raw=true",
      tags: ["React", "Firebase", "Gemini API", "Appwrite", "Grow API"],
      github: "https://github.com/glucon-d/finwise",
      demo: "https://finwise.ayush-sharma.in/",
      category: "web",
      achievement: "8th Positon - Hackaccino (Bennet)"
    },
    {
      id: 3,
      title: "Intellica",
      description: "Ai Based Learning Platform for Everyone.",
      image: "https://github.com/CyberBoyAyush/react-portfolio/blob/main/src/assets/intellica.png?raw=true",
      tags: ["React", "Firebase", "Charts", "Gemini API", "Appwrite"],
      github: "https://github.com/glucon-d/intellica",
      demo: "https://intellica.ayush-sharma.in/",
      category: "ai",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our <span className="text-orange-500">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Check out what we've built during our caffeine-fueled coding sessions!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={projectVariants} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 italic">
            "We don't just build projects, we build legends... at least in our own minds."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all"
      variants={variants}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-orange-500 py-1 px-3 rounded-br">
          <div className="flex items-center gap-1">
            <FaMedal />
            <span className="text-xs font-semibold">{project.achievement}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-700 text-gray-300 py-1 px-3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between gap-4 mt-auto">
          <motion.a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded flex items-center justify-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </motion.a>
          <motion.a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-500 hover:bg-orange-600 py-2 rounded flex items-center justify-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;