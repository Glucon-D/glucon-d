import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMedal, FaCode, FaLaughSquint, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "AICodeBuddy",
      description: "An AI-powered code assistant that helps you debug your code while also roasting your coding style. Because sometimes tough love is what you need.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070",
      tags: ["AI", "React", "Node.js"],
      github: "https://github.com/glucond-team/aicodebuddy",
      demo: "https://aicodebuddy.demo.glucond.dev",
      category: "ai",
      achievement: "1st Place - CodeFest 2024"
    },
    {
      id: 2,
      title: "MemeGenerator 3000",
      description: "The ultimate meme creation platform that uses AI to generate memes based on your mood and the latest internet trends. Perfect for when your code isn't working.",
      image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=1973",
      tags: ["NextJS", "Firebase", "Gemini API"],
      github: "https://github.com/glucond-team/memegen3000",
      demo: "https://meme3000.demo.glucond.dev",
      category: "web",
      achievement: "Most Creative Project - HackFest 2024"
    },
    {
      id: 3,
      title: "SnackTracker",
      description: "An app that tracks the team's snack consumption during hackathons. Includes a dashboard showing the correlation between energy drink intake and bugs fixed.",
      image: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?q=80&w=1974",
      tags: ["React Native", "Firebase", "Charts"],
      github: "https://github.com/glucond-team/snacktracker",
      demo: "https://snacktracker.demo.glucond.dev",
      category: "mobile",
      achievement: "Runner Up - FoodTech Hackathon"
    },
    {
      id: 4,
      title: "BugSquasher",
      description: "A game where you literally squash bugs in your code. Every time you fix a real bug, you get to play a round of bug squashing. Gamification at its finest!",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070",
      tags: ["React", "Phaser.js", "VSCode Extension"],
      github: "https://github.com/glucond-team/bugsquasher",
      demo: "https://marketplace.visualstudio.com/items?itemName=glucond.bugsquasher",
      category: "game",
      achievement: "Most Entertaining Hack - VSCode Hackathon"
    },
    {
      id: 5,
      title: "CoffeeRun",
      description: "An app that calculates whose turn it is to get coffee for the team. Uses complex algorithms based on who's been slacking off the most during the hackathon.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974",
      tags: ["React", "Appwrite", "Tailwind"],
      github: "https://github.com/glucond-team/coffeerun",
      demo: "https://coffeerun.demo.glucond.dev",
      category: "web",
      achievement: "Best Team Tool - Internal Hackathon"
    },
    {
      id: 6,
      title: "SleepDeficit",
      description: "A smart alarm that tracks your sleep during hackathons and calculates how much caffeine you need to function based on your sleep deficit. Built by sleep-deprived devs.",
      image: "https://images.unsplash.com/photo-1572715555777-1d08ba884ca6?q=80&w=2067",
      tags: ["React Native", "Health API", "Machine Learning"],
      github: "https://github.com/glucond-team/sleepdeficit",
      demo: "https://apps.apple.com/app/sleepdeficit",
      category: "mobile",
      achievement: "Health Innovation Award - MedTech Hackathon"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <CategoryButton 
              label="All" 
              icon={<FaFilter />} 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            />
            <CategoryButton 
              label="Web" 
              icon={<FaCode />} 
              active={filter === 'web'} 
              onClick={() => setFilter('web')}
            />
            <CategoryButton 
              label="Mobile" 
              icon={<FaCode />} 
              active={filter === 'mobile'} 
              onClick={() => setFilter('mobile')}
            />
            <CategoryButton 
              label="AI" 
              icon={<FaCode />} 
              active={filter === 'ai'} 
              onClick={() => setFilter('ai')}
            />
            <CategoryButton 
              label="Games" 
              icon={<FaLaughSquint />} 
              active={filter === 'game'} 
              onClick={() => setFilter('game')}
            />
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={projectVariants} />
            ))}
          </AnimatePresence>
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

const CategoryButton = ({ label, icon, active, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all ${
        active 
          ? 'bg-orange-500 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {label}
    </motion.button>
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