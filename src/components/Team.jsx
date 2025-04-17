import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaGithub, FaTwitter, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

const Team = () => {
  const [showPopup, setShowPopup] = useState(false);

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
      name: "Ayush Sharma",
      role: "Team Lead & CodingPaglu",
      image: "https://avatars.githubusercontent.com/u/69210117?v=4",
      bio: "Writes Code In HTML",
      quote: "Why debug when you can just add more features?",
      github: "https://github.com/cyberboyayush",
      twitter: "https://twitter.com/cyberboyayush",
      linkedin: "https://linkedin.com/in/cyberboyayush",
      skills: ["React", "NextJS", "Tailwind", "Procrastination", "Gemini", "Appwrite"]
    },
    {
      name: "Vranda Garg",
      role: "Co Team Lead & NinniPaglu",
      image: "https://avatars.githubusercontent.com/u/166229165?v=4",
      bio: "She can sleep 14 hours a day.",
      quote: "It's not a bug, it's an undocumented feature!",
      github: "https://github.com/vrandaagarg",
      twitter: "https://twitter.com/vrandaagarg",
      linkedin: "https://linkedin.com/in/vrandaagarg",
      skills: ["Node.js", "Firebase", "React", "Making coffee"]
    }
  ];

  const teamMembers = [
    {
      name: "Atishay Jain",
      role: "Testing and Design",
      image: "https://avatars.githubusercontent.com/u/170084012?v=4",
      bio: "Bro makes the best PPT using Canva.",
      quote: "Design is intelligence made visible.",
      github: "https://github.com/atishay-jain04",
      skills: ["Figma", "VS Code", "Canva"]
    },
    {
      name: "Raghav Gaba",
      role: "Frontend Dev & ChatGpt Plus User",
      image: "https://avatars.githubusercontent.com/u/158083556?v=4",
      bio: "Bro uses ChatGPT for everything.",
      quote: "I asked ChatGPT to write this bio.",
      quote: "AI is just spicy if-else statements.",
      github: "https://github.com/raghavvvgaba",
      skills: ["Python", "React", "TailwindCSS"]
    },
    {
      name: "Priyansh Jha",
      role: "PPT Generator and GPT User",
      image: "https://avatars.githubusercontent.com/u/174599206?v=4",
      bio: "I can make a PPT in 5 minutes.",
      quote: "Canva is my best friend.",
      github: "https://github.com/priyanshjhaa",
      skills: ["ChatGPT", "Canva", "Instagram Reels"]
    },
    {
      name: "Raghav Katta",
      role: "Frontend Dev",
      image: "https://avatars.githubusercontent.com/u/165624720?v=4",
      bio: "Frontend Dev with a passion for memes.",
      quote: "Copilot is my best friend.",
      github: "https://github.com/raghavxkatta",
      skills: ["React", "Tailwind", "Github"]
    },
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
        <div className="relative flex items-center justify-center bg-gray-900 h-64">
          <img 
            src={member.image} 
            alt={member.name} 
            className="h-full w-auto max-h-64"
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
            onClick={() => setShowPopup(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now (if you dare)
          </motion.button>
        </motion.div>
      </div>
      
      {/* Updated Popup with backdrop blur */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <div 
              className="absolute inset-0 backdrop-blur-md bg-gray-900/60"
              aria-hidden="true"
            />
            <motion.div 
              className="bg-gray-800 rounded-xl p-5 md:p-8 w-full max-w-md relative z-10 border-2 border-orange-500 mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowPopup(false)} 
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-500">Get a life, bro!</h3>
              <p className="mb-4 text-gray-300 text-sm md:text-base">Seriously, go get some sleep. Your code will thank you later.</p>
              
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
                  alt="Sleeping cat meme" 
                  className="w-full"
                />
              </div>
              
              <div className="bg-gray-700 p-3 rounded-lg text-xs md:text-sm text-gray-300 italic">
                "The best code is written after a good night's sleep, not after the 10th energy drink."
              </div>
              
              <motion.button
                onClick={() => setShowPopup(false)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full w-full text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fine, I'll go sleep... maybe
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
