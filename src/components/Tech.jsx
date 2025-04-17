import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaFire, 
  FaRocket, 
  FaDatabase,
  FaCodeBranch,
  FaRobot
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiNextdotjs, SiAppwrite } from 'react-icons/si';

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const techVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const techStack = [
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-400" />,
      description: "Our bread and butter for building interactive UIs. We're so good at React that even our components have components.",
      color: "blue"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
      description: "Because who has time to write CSS nowadays? We just string together 27 utility classes and call it a day!",
      color: "cyan"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl text-white" />,
      description: "When regular React just isn't fancy enough. We use Next.js to server-render our memes for optimal SEO performance.",
      color: "gray"
    },
    {
      name: "Gemini",
      icon: <FaRobot className="text-5xl text-purple-400" />,
      description: "Our AI assistant that helps us write code, debug issues, and occasionally roasts our poor variable naming choices.",
      color: "purple"
    },
    {
      name: "Groq",
      icon: <FaRocket className="text-5xl text-green-400" />,
      description: "For when we need those blazing fast AI responses. So fast it answers our questions before we even ask them!",
      color: "green"
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite className="text-5xl text-red-400" />,
      description: "Our backend-as-a-service that lets us focus on the fun parts of development. Authentication made so simple, even our PM could do it!",
      color: "red"
    },
    {
      name: "Firebase",
      icon: <FaFire className="text-5xl text-yellow-400" />,
      description: "For when we need to store data and don't want to deal with SQL. Also great for when we need to set our budgets on fire!",
      color: "yellow"
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-5xl text-purple-400" />,
      description: "Because static websites are so 2010. We make things bounce, flip, and spin until our users are thoroughly impressed (or dizzy).",
      color: "purple"
    },
  ];

  const renderTechCard = (tech, index) => {
    const bgColorClass = `bg-${tech.color}-900/20`;
    const borderColorClass = `border-${tech.color}-500`;
    
    return (
      <motion.div
        key={tech.name}
        className={`p-6 rounded-lg border ${borderColorClass} ${bgColorClass} backdrop-blur-sm hover:shadow-xl transition-all`}
        variants={techVariants}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {tech.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
          <p className="text-gray-400">{tech.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-[150px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            Our <span className="text-orange-500">Tech Stack</span>
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our weapons of choice for turning caffeine and Glucon-D into award-winning code.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techStack.map(renderTechCard)}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gray-800 inline-block py-3 px-6 rounded-full">
            <div className="flex items-center gap-2">
              <FaCodeBranch className="text-orange-500" />
              <p className="font-medium">Always exploring new technologies!</p>
            </div>
          </div>

          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-5"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gray-800 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm px-3">#ReactJS</span>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm px-3">#TailwindCSS</span>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm px-3">#NextJS</span>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm px-3">#AI</span>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm px-3">#Firebase</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;