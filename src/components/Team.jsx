import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaCrown,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaLaptopCode,
  FaGlobe,
  FaUser,
  FaQuoteLeft,
  FaCoffee,
  FaHeadphones,
  FaPizzaSlice,
  FaMedal,
  FaStar,
  FaBrain,
  FaFire,
  FaCode,
} from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { link } from "framer-motion/client";
import { BsTwitterX } from "react-icons/bs";

const Team = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [expandedMember, setExpandedMember] = useState(null);
  const [activeStat, setActiveStat] = useState(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
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
      portfolio: "https://cyberboyayush.in",
      skills: [
        "React",
        "NextJS",
        "Tailwind",
        "Procrastination",
        "Gemini",
        "Appwrite",
      ],
      funFacts: [
        "Can debug with eyes closed, but only after midnight",
        "Drinks chai like it's water, sleeps like it's optional",
        "His keyboard has worn-out Ctrl, C, and V keys",
      ],
      stats: {
        chai: 92,
        coding: 85,
        debugging: 70,
        sleeping: 10,
        memes: 95,
        roasting: 90,
      },
    },
    {
      name: "Vranda Garg",
      role: "Co Team Lead & NinniPaglu",
      image: "https://avatars.githubusercontent.com/u/166229165?v=4",
      bio: "She can sleep 14 hours a day.",
      quote: "It's not a bug, it's an undocumented feature!",
      github: "https://github.com/vrandaagarg",
      twitter: "https://twitter.com/vranda_garg_",
      linkedin: "https://linkedin.com/in/vrandagarg",
      portfolio: "https://vrandagarg.me",
      skills: [
        "ReactJS",
        "TailwindCSS",
        "Firebase",
        "Appwrite",
        "Making chai",
        "Sleeping",
      ],
      funFacts: [
        "Can write React components in her sleep, literally",
        "Has named all her plants after JavaScript frameworks",
        "Believes semicolons are optional, but sleep is not",
      ],
      stats: {
        eating: 88,
        coding: 75,
        debugging: 85,
        sleeping: 85,
        memes: 50,
        procrastination: 70,
      },
    },
    {
      name: "Atishay Jain",
      role: "Testing and Design",
      image: "https://avatars.githubusercontent.com/u/170084012?v=4",
      bio: "Bro makes the best PPT using Canva.",
      quote: "Design is intelligence made visible.",
      github: "https://github.com/atishay-jain04",
      linkedin: "https://www.linkedin.com/in/atishay-jain-690604290/",
      skills: ["Figma", "VS Code", "Canva"],
      funFacts: [
        "Can spot a misaligned pixel from across the room",
        "Makes PowerPoints that even Steve Jobs would applaud",
        "Secretly believes Canva is better than therapy",
      ],
      stats: {
        design: 95,
        presentation: 98,
        canva: 99,
        sleeping: 45,
        memes: 80,
      },
    },
  ];

  const teamMembers = [
    {
      name: "Raghav Gaba",
      role: "Frontend Dev & ChatGpt Plus User",
      image: "https://avatars.githubusercontent.com/u/158083556?v=4",
      bio: "Bro uses ChatGPT for everything.",
      quote: "AI is just spicy if-else statements.",
      github: "https://github.com/raghavvvgaba",
      skills: ["Python", "React", "TailwindCSS"],
    },
    {
      name: "Priyansh Jha",
      role: "PPT Generator and GPT User",
      image: "https://avatars.githubusercontent.com/u/174599206?v=4",
      bio: "I can make a PPT in 5 minutes.",
      quote: "Canva is my best friend.",
      github: "https://github.com/priyanshjhaa",
      skills: ["ChatGPT", "Canva", "Instagram Reels"],
    },
    {
      name: "Raghav Katta",
      role: "Frontend Dev",
      image: "https://avatars.githubusercontent.com/u/165624720?v=4",
      bio: "Frontend Dev with a passion for memes.",
      quote: "Copilot is my best friend.",
      github: "https://github.com/raghavxkatta",
      portfolio: "https://raghavkatta.vercel.app/",
      skills: ["React", "Tailwind", "Github"],
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
            <BsTwitterX size={20} />
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
        {member.portfolio && (
          <motion.a
            href={member.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-orange-400"
          >
            <FaGlobe size={20} />
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

  const renderStat = (label, value, icon) => {
    return (
      <div className="relative mt-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5">
            {icon}
            <span className="text-xs font-medium text-gray-300">{label}</span>
          </div>
          <span className="text-xs font-semibold text-orange-400">
            {value}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    );
  };

  const renderMemberStats = (member) => {
    const stats = member.stats;
    if (!stats) return null;

    return (
      <motion.div
        className="bg-gray-800/80 rounded-lg p-3 mt-3"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
      >
        <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-1.5">
          <FaFire /> Developer Stats
        </h4>

        {stats.caffeine &&
          renderStat(
            "Caffeine Tolerance",
            stats.caffeine,
            <FaCoffee className="text-orange-400" />
          )}
        {stats.coding &&
          renderStat(
            "Coding Speed",
            stats.coding,
            <FaCode className="text-blue-400" />
          )}
        {stats.debugging &&
          renderStat(
            "Debugging Skills",
            stats.debugging,
            <FaBrain className="text-purple-400" />
          )}
        {stats.sleeping &&
          renderStat(
            "Sleep Schedule",
            stats.sleeping,
            <FaHeadphones className="text-gray-400" />
          )}
        {stats.memes &&
          renderStat(
            "Meme Quality",
            stats.memes,
            <FaPizzaSlice className="text-red-400" />
          )}

        {/* Render other specific stats */}
        {stats.design &&
          renderStat(
            "Design Skills",
            stats.design,
            <FaUser className="text-cyan-400" />
          )}
        {stats.canva &&
          renderStat(
            "Canva Mastery",
            stats.canva,
            <FaStar className="text-yellow-400" />
          )}
        {stats.presentation &&
          renderStat(
            "Presentation",
            stats.presentation,
            <FaMedal className="text-yellow-400" />
          )}
        {stats.ai &&
          renderStat(
            "AI Knowledge",
            stats.ai,
            <FaFire className="text-green-400" />
          )}
        {stats.react &&
          renderStat(
            "React Wizardry",
            stats.react,
            <FaCode className="text-blue-400" />
          )}
        {stats.tailwind &&
          renderStat(
            "Tailwind CSS",
            stats.tailwind,
            <FaCode className="text-cyan-400" />
          )}
      </motion.div>
    );
  };

  const renderExpandedDetails = (member) => {
    // Check if member has funFacts before rendering expanded details
    if (!member.funFacts || member.funFacts.length === 0) {
      return (
        <motion.div
          className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-700 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <p className="text-center text-gray-300 italic">
            This team member is shrouded in mystery...
            <span className="block mt-2">💫</span>
          </p>
        </motion.div>
      );
    }

    return (
      <motion.div
        className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-700 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-1.5">
          <FaFire /> Fun Facts
        </h4>
        <ul className="space-y-2">
          {member.funFacts.map((fact, index) => (
            <motion.li
              key={index}
              className="text-sm text-gray-300 flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-orange-500 mt-1">•</span>
              {fact}
            </motion.li>
          ))}
        </ul>

        {renderMemberStats(member)}
      </motion.div>
    );
  };

  const renderMemberCard = (member, isCore = false) => {
    const isExpanded = expandedMember === member.name;
    const hasFunFacts = member.funFacts && member.funFacts.length > 0;
    const hasStats = member.stats && Object.keys(member.stats).length > 0;

    return (
      <motion.div
        className={`bg-gradient-to-b from-gray-800/95 to-gray-900/95 rounded-xl overflow-hidden border ${
          isCore ? "border-orange-500/60" : "border-gray-700/80"
        } shadow-xl hover:shadow-orange-500/10 transition-all duration-300`}
        variants={itemVariants}
        whileHover={{ y: -5 }}
        layout
      >
        <div className="relative">
          {/* Image container with gradient overlay */}
          <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-900/80">
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

            {isCore && (
              <motion.div
                className="absolute top-3 right-3 bg-orange-500/90 rounded-full p-1.5 shadow-lg"
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                whileHover={{
                  rotate: [0, 10, -10, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <FaCrown className="text-yellow-300 text-lg" />
              </motion.div>
            )}

            {/* Name and role with gradient background */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold text-white mb-0.5 drop-shadow-md">
                {member.name}
              </h3>
              <p className="text-orange-400 text-sm font-medium drop-shadow-md">
                {member.role}
              </p>
            </div>
          </div>

          <div className="p-4">
            {/* Bio section */}
            <div className="mb-4">
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>

            {/* Quote with styled quotation mark */}
            <div className="bg-gray-800/70 p-4 rounded-lg mb-4 relative">
              <FaQuoteLeft className="absolute top-2 left-2 text-orange-500/20 text-lg" />
              <p className="italic text-gray-400 font-light text-sm pl-4">
                "{member.quote}"
              </p>
            </div>

            {/* Skills with improved styling */}
            <div className="flex flex-wrap gap-2 mb-4">
              {member.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-800/80 text-xs text-gray-300 px-2.5 py-1 rounded-full flex items-center gap-1 border border-gray-700/50"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(249, 115, 22, 0.2)",
                    borderColor: "rgba(249, 115, 22, 0.5)",
                    color: "#f97316",
                  }}
                >
                  <FaLaptopCode className="text-orange-400" /> {skill}
                </motion.span>
              ))}
            </div>

            {/* Social links with improved styling */}
            <div className="flex justify-between items-center">
              {renderSocialLinks(member)}

              {/* Only show More Info button if member has facts or stats */}
              {hasFunFacts || hasStats ? (
                <motion.button
                  onClick={() =>
                    setExpandedMember(isExpanded ? null : member.name)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    isExpanded
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isExpanded ? "Less Info" : "More Info"}
                </motion.button>
              ) : (
                <div className="px-3 py-1.5"></div> // Empty div for spacing
              )}
            </div>

            {/* Expanded section with fun facts and stats */}
            <AnimatePresence>
              {isExpanded && renderExpandedDetails(member)}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-10 sm:py-12 md:py-16 md:pt-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-orange-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-orange-500 rounded-full filter blur-[120px] opacity-10"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmgxOHYtNkgzNnptMCAxMnY2aDE4di02SDM2em0wIDEydjZoMTh2LTZIMzZ6bS0xOCAwaDE4di02SDE4djZ6bTAgMTJoMTh2LTZIMTh2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Rockstars
            </span>
            <motion.div
              className="absolute -top-5 -right-5 text-orange-500 opacity-30 text-xl sm:text-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FaStar />
            </motion.div>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            The brilliant minds behind Team Glucon-D who turn caffeine, inside
            jokes, and occasional sleep into award-winning code.
          </p>
        </motion.div>

        {/* Core Team Section - improved grid layout for better responsiveness */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          ref={containerRef}
        >
          <motion.div
            className="flex flex-col items-center justify-center mb-8 md:mb-10 gap-2"
            animate={isInView ? { y: [20, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-orange-500/20 via-orange-500/30 to-orange-500/20 px-6 py-2 rounded-full flex items-center gap-2">
              <FaCrown className="text-yellow-400 text-xl" />
              <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
                Core Team
              </h3>
              <FaCrown className="text-yellow-400 text-xl" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {coreTeam.map((member) => renderMemberCard(member, true))}
          </div>
        </motion.div>

        {/* Team Members Section - improved layout for better mobile experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              className="bg-gradient-to-r from-gray-800/70 via-gray-800 to-gray-800/70 px-4 sm:px-6 py-2 rounded-full inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-white">
                Team Members
              </h3>
            </motion.div>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-3"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {teamMembers.map((member) => renderMemberCard(member))}
          </div>
        </motion.div>

        {/* Join Team Section - more responsive */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-b from-gray-800 to-gray-850 p-6 sm:p-8 rounded-xl border-t-2 border-orange-500 shadow-xl max-w-3xl mx-auto"
            whileHover={{
              boxShadow: "0 0 30px rgba(249, 115, 22, 0.2)",
              borderColor: "#f97316",
            }}
          >
            <div className="mb-5">
              <motion.div
                className="bg-orange-500/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <FaCoffee className="text-orange-400 text-2xl sm:text-3xl" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Want to Join Our Team?
              </h3>
              <p className="text-gray-300 mb-6">
                If you can code while sleep-deprived and still make decent
                jokes, you might be a good fit. Our interview process includes a
                meme-creation challenge and a "how long can you stay awake"
                contest.
              </p>
            </div>

            <motion.button
              onClick={() => setShowPopup(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg shadow-orange-500/20 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Apply Now (if you dare)</span>
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Popup - improved responsive layout */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto bg-gray-900/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-5 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md w-full relative z-10 border-2 border-orange-500 shadow-2xl shadow-orange-500/20"
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
                <span className="text-xl leading-none">×</span>
              </button>

              <div className="overflow-y-auto max-h-[70vh] pr-1">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-4 text-orange-500 pr-6"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Get a life, bro!
                </motion.h3>

                <motion.p
                  className="mb-4 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Seriously, go get some sleep. Your code will thank you later.
                </motion.p>

                <motion.div
                  className="rounded-lg overflow-hidden mb-4 shadow-lg max-w-[200px] sm:max-w-[250px] mx-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                    alt="Sleeping cat meme"
                    className="w-full object-cover"
                    loading="eager"
                    decoding="async"
                    style={{
                      imageRendering: "auto",
                      display: "block",
                    }}
                  />
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-gray-700/80 to-gray-700 p-4 rounded-lg text-gray-300 italic border-l-2 border-orange-500"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  "The best code is written after a good night's sleep, not
                  after the 10th energy drink."
                </motion.div>
              </div>

              <motion.button
                onClick={() => setShowPopup(false)}
                className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2.5 px-6 rounded-full w-full shadow-lg shadow-orange-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
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
