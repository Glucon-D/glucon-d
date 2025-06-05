import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaFire,
  FaRocket,
  FaDatabase,
  FaCodeBranch,
  FaRobot,
  FaCode,
  FaCoffee,
  FaLaptop,
  FaServer,
  FaGlobe,
  FaMobile,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiAppwrite,
  SiFirebase,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const techVariants = {
    hidden: { y: 20, opacity: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const techStack = [
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-400" />,
      description:
        "Our bread and butter for building interactive UIs. We're so good at React that even our components have components.",
      color: "blue",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
      description:
        "Because who has time to write CSS nowadays? We just string together 27 utility classes and call it a day!",
      color: "cyan",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl text-white" />,
      description:
        "When regular React just isn't fancy enough. We use Next.js to server-render our memes for optimal SEO performance.",
      color: "gray",
    },
    {
      name: "Gemini",
      icon: <FaRobot className="text-5xl text-purple-400" />,
      description:
        "Our AI assistant that helps us write code, debug issues, and occasionally roasts our poor variable naming choices.",
      color: "purple",
    },
    {
      name: "Groq",
      icon: <FaRocket className="text-5xl text-green-400" />,
      description:
        "For when we need those blazing fast AI responses. So fast it answers our questions before we even ask them!",
      color: "green",
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite className="text-5xl text-red-400" />,
      description:
        "Our backend-as-a-service that lets us focus on the fun parts of development. Authentication made so simple, even our PM could do it!",
      color: "red",
    },
    {
      name: "Firebase",
      icon: <FaFire className="text-5xl text-yellow-400" />,
      description:
        "For when we need to store data and don't want to deal with SQL. Also great for when we need to set our budgets on fire!",
      color: "yellow",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-5xl text-purple-400" />,
      description:
        "Because static websites are so 2010. We make things bounce, flip, and spin until our users are thoroughly impressed (or dizzy).",
      color: "purple",
    },
  ];

  // Floating rectangle icons in background
  const floatingRects = [
    { icon: <FaCode />, color: "text-blue-400", delay: 0 },
    { icon: <SiGithub />, color: "text-gray-400", delay: 1 },
    { icon: <FaServer />, color: "text-green-400", delay: 2 },
    { icon: <FaGlobe />, color: "text-purple-400", delay: 3 },
    { icon: <SiVercel />, color: "text-white", delay: 4 },
    { icon: <FaMobile />, color: "text-yellow-400", delay: 5 },
    { icon: <FaLaptop />, color: "text-red-400", delay: 6 },
    { icon: <SiFirebase />, color: "text-orange-400", delay: 7 },
  ];

  const renderTechCard = (tech, index) => {
    const bgColorClass = `bg-${tech.color}-900/20`;
    const borderColorClass = `border-${tech.color}-500`;

    return (
      <motion.div
        key={tech.name}
        className={`p-6 rounded-xl border-2 ${borderColorClass} ${bgColorClass} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
        variants={techVariants}
        whileHover={{ y: -8, scale: 1.03 }}
      >
        {/* Subtle gradient hover effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${tech.color}-500/10 to-${tech.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          layoutId={`gradient-${tech.name}`}
        />

        {/* Shine effect on hover */}
        <motion.div
          className="absolute -inset-full h-[200%] w-[200%] opacity-0 group-hover:opacity-10 z-0 bg-gradient-to-tr from-white via-white to-transparent -rotate-45 group-hover:animate-shine"
          transition={{ duration: 0.4 }}
        />

        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            className="mb-6 transform transition-all duration-300 group-hover:scale-110"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.6 }}
          >
            {tech.icon}
          </motion.div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
            {tech.name}
          </h3>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-4 group-hover:w-24 transition-all duration-300"></div>

          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {tech.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500 rounded-full filter blur-[150px] opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-blue-500 rounded-full filter blur-[120px] opacity-5 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-green-500 rounded-full filter blur-[130px] opacity-5"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating rectangular tech icons */}
      {floatingRects.map((rect, index) => (
        <motion.div
          key={index}
          className={`absolute hidden md:flex items-center justify-center ${rect.color} opacity-20`}
          style={{
            top: `${10 + ((index * 10) % 80)}%`,
            left: `${5 + ((index * 12) % 90)}%`,
            zIndex: 0,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0.8,
            rotate: Math.random() * 20 - 10,
          }}
          animate={{
            x: [0, index % 2 === 0 ? 20 : -20, 0],
            y: [0, index % 3 === 0 ? 30 : -30, 0],
            opacity: [0.05, 0.08, 0.05],
            rotate: [
              Math.random() * 20 - 10,
              Math.random() * 20 - 10,
              Math.random() * 20 - 10,
            ],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: rect.delay,
            ease: [0.4, 0.0, 0.2, 1], // Smoother easing curve
          }}
        >
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-3 rounded-lg border border-gray-700 shadow-lg">
            <div className="text-2xl">{rect.icon}</div>
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0.8, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Our <span className="text-orange-500">Tech Stack</span>
            {/* Decorative elements around heading */}
            <motion.div
              className="absolute -top-6 -right-6 text-orange-500 opacity-20 text-2xl"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <FaCodeBranch />
            </motion.div>
          </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our weapons of choice for turning caffeine and Glucon-D into
            award-winning code.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techStack.map(renderTechCard)}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-800/80 to-gray-800/50 backdrop-blur-sm inline-block py-3 px-6 rounded-full border border-gray-700/50 shadow-lg">
            <div className="flex items-center gap-2">
              <FaCodeBranch className="text-orange-500" />
              <p className="font-medium">Always exploring new technologies!</p>
            </div>
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-5"
            variants={containerVariants}
          >
            {["#ReactJS", "#TailwindCSS", "#NextJS", "#AI", "#Firebase"].map(
              (tag, index) => (
                <motion.div
                  key={tag}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-800/60 p-3 rounded-full border border-gray-700/50 shadow-md hover:shadow-orange-500/10 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0.8, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="font-mono text-sm px-3">{tag}</span>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
