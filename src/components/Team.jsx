import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaGithub, FaTwitter, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const coreTeam = [
    {
      name: "Ayush",
      role: "Team Lead & Frontend Wizard",
      image: "https://i.pravatar.cc/300?img=11",
      bio: "Turns caffeine into code faster than you can say 'React re-render'. Has strong opinions about tabs vs spaces.",
      quote: "Why debug when you can just add more features?",
      github: "https://github.com/ayush",
      twitter: "https://twitter.com/ayush",
      linkedin: "https://linkedin.com/in/ayush",
      devto: "https://dev.to/ayush",
      skills: ["React", "NextJS", "Tailwind", "Procrastination"]
    },
    {
      name: "Rahul",
      role: "Backend Ninja & API Whisperer",
      image: "https://i.pravatar.cc/300?img=12",
      bio: "Can solve complex backend issues while sleeping. Never met a database he couldn't optimize.",
      quote: "It's not a bug, it's an undocumented feature!",
      github: "https://github.com/rahul",
      twitter: "https://twitter.com/rahul",
      linkedin: "https://linkedin.com/in/rahul",
      devto: "https://dev.to/rahul",
      skills: ["Node.js", "Firebase", "MongoDB", "Making coffee"]
    }
  ];

  const teamMembers = [
    {
      name: "Priya",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Makes our apps look prettier than a sunset. Believes every pixel matters.",
      quote: "Design is intelligence made visible.",
      github: "https://github.com/priya",
      skills: ["Figma", "Illustrator", "CSS Wizardry"]
    },
    {
      name: "Vikram",
      role: "AI Specialist",
      image: "https://i.pravatar.cc/300?img=15",
      bio: "Teaches AI to make memes. Occasionally argues with chatbots and wins.",
      quote: "AI is just spicy if-else statements.",
      twitter: "https://twitter.com/vikram",
      skills: ["Python", "TensorFlow", "Gemini", "Groq"]
    },
    {
      name: "Neha",
      role: "Mobile Dev & Bug Hunter",
      image: "https://i.pravatar.cc/300?img=23",
      bio: "Could find a needle in a haystack, especially if the needle is a race condition.",
      quote: "It works on my machine... so we're shipping my machine!",
      linkedin: "https://linkedin.com/in/neha",
      skills: ["React Native", "Flutter", "Debugging"]
    },
    {
      name: "Arjun",
      role: "DevOps & Infrastructure",
      image: "https://i.pravatar.cc/300?img=19",
      bio: "Believes Docker solves everything. Has nightmares about unoptimized CI/CD pipelines.",
      quote: "I automate stuff so I can be lazy efficiently.",
      github: "https://github.com/arjun",
      skills: ["Docker", "Kubernetes", "AWS", "Meme Creation"]
    }
  ];

  const renderSocialLinks = (member) => {
    return (
      <div className="flex gap-3 mt-3">
        {member.github && (
          <motion.a 
            href={member.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={20} />
          </motion.a>
        )}
        {member.twitter && (
          <motion.a 
            href={member.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-blue-400"
          >
            <FaTwitter size={20} />
          </motion.a>
        )}
        {member.linkedin && (
          <motion.a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-blue-600"
          >
            <FaLinkedin size={20} />
          </motion.a>
        )}
        {member.devto && (
          <motion.a 
            href={member.devto} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-white"
          >
            <SiDevdotto size={20} />
          </motion.a>
        )}
      </div>
    );
  };

  const renderMemberCard = (member, isCore = false) => {
    return (
      <motion.div 
        className={`bg-gray-800 rounded-lg overflow-hidden border border-gray-700 ${isCore ? 'border-orange-500' : ''}`}
        variants={itemVariants}
        whileHover={{ y: -5 }}
      >
        <div className="relative">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-64 object-cover object-center"
          />
          {isCore && (
            <div className="absolute top-3 right-3">
              <FaCrown className="text-yellow-400 text-2xl" />
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-orange-500 mb-3">{member.role}</p>
          
          <p className="text-gray-300 mb-4">{member.bio}</p>
          
          <div className="bg-gray-900 p-4 rounded-lg mb-4">
            <p className="italic text-gray-400 font-light">"{member.quote}"</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {member.skills.map((skill, index) => (
              <span key={index} className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full flex items-center gap-1">
                <FaLaptopCode className="text-orange-400" /> {skill}
              </span>
            ))}
          </div>
          
          {renderSocialLinks(member)}
        </div>
      </motion.div>
    );
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
            Meet The <span className="text-orange-500">Team</span>
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            The brilliant minds behind Team Glucon-D who turn caffeine, inside jokes, and occasional sleep into award-winning code.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex items-center justify-center mb-10 gap-2">
            <FaCrown className="text-yellow-400 text-2xl" />
            <h3 className="text-2xl font-bold">Core Team</h3>
            <FaCrown className="text-yellow-400 text-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreTeam.map(member => renderMemberCard(member, true))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold">Team Members</h3>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map(member => renderMemberCard(member))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center bg-gray-800 p-8 rounded-lg border-t-2 border-orange-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to Join Us?</h3>
          <p className="text-gray-300 mb-6">
            If you can code while sleep-deprived and still make decent jokes, you might be a good fit.
            Our interview process includes a meme-creation challenge and a "how long can you stay awake" contest.
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now (if you dare)
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
