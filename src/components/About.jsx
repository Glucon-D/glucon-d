import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCoffee, FaCode, FaChartLine, FaCat, FaLaugh } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const catMemes = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // cat typing frantically
    "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif", // cat sleeping on keyboard
    "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif"  // cat knocking things off desk
  ];

  return (
    <section className="bg-gray-900 text-white py-20 relative">
      {/* Cat meme easter egg that appears randomly */}
      <motion.img 
        src={catMemes[Math.floor(Math.random() * catMemes.length)]}
        className="absolute w-24 h-24 object-cover rounded-full hidden md:block"
        style={{ top: '5%', right: '5%' }}
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ 
          opacity: [0, 1, 0], 
          rotate: [-20, 0, 20],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatDelay: 15
        }}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      />
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            About <span className="text-orange-500">Us</span>
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're not your average coding team. We're the sugar rush in the hackathon world.
            <motion.span 
              className="inline-block ml-2"
              animate={{ rotate: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🍬
            </motion.span>
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-orange-500">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Born from the depths of midnight coding sessions and fueled by actual Glucon-D packets, our team came together with one mission: to build epic stuff while having even more epic fun.
            </p>
            <p className="text-gray-300 mb-4">
              Legend says we once coded for 48 hours straight and the only thing that kept us going was our namesake energy drink and the collective belief that sleep is for the weak. (Don't try this at home, kids. Sleep is actually important.)
            </p>
            
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
              <p className="italic text-sm text-gray-400">
                <FaLaugh className="inline mr-2 text-yellow-400" /> 
                "One time our team lead fell asleep during a demo and sleep-talked the entire API documentation. The judges were so impressed they gave us extra points for 'subconscious documentation'"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <FaCode className="text-orange-500 text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Code like nobody's watching</h4>
                <p className="text-gray-400">But document it like everyone is judging your variable names. (They are.)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Moving fast and fixing things</h4>
                <p className="text-gray-400">Usually our own bugs, if we're honest. Our record is 73 bug fixes in one hour, most of which we created that same hour.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-orange-500 relative z-10">
              <h3 className="text-3xl font-bold mb-6">Our Vision & Motto</h3>

              <motion.div 
                className="mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaLightbulb className="text-orange-500 text-2xl" />
                  <h4 className="text-xl font-bold">Vision</h4>
                </div>
                <p className="pl-9 text-gray-300 italic">
                  "To build software so good that even our competitors' debugging consoles say 'wow'"
                </p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <div className="flex items-center gap-3 mb-2">
                  <FaCoffee className="text-orange-500 text-2xl" />
                  <h4 className="text-xl font-bold">Motto</h4>
                </div>
                <p className="pl-9 text-gray-300 italic">
                  "When life gives you bugs, deploy them as features!"
                </p>
              </motion.div>
              
              <motion.div
                className="mt-8 border-t border-gray-700 pt-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaCat className="text-orange-500 text-2xl" />
                  <h4 className="text-xl font-bold">Team Spirit Animal</h4>
                </div>
                <p className="pl-9 text-gray-300">
                  The cat: Sleeps 16 hours, works intensely for 15 minutes, then knocks things off tables for the rest of the time. Sounds like our development cycle!
                </p>
                <div className="pl-9 mt-3">
                  <img 
                    src="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif" 
                    alt="Cat typing on keyboard" 
                    className="h-24 rounded-lg mx-auto"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 text-6xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🧃
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-500 opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 opacity-10 rounded-full blur-xl"></div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20 p-8 bg-gray-800 rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">The Team Glucon-D Promise</h3>
          <p className="text-gray-300 text-center mb-6">
            We promise to approach every hackathon with the perfect blend of technical expertise, creative problem-solving, and meme references. If we can't solve a problem with code, we'll solve it with more code!
          </p>

          <div className="flex justify-center mb-6">
            <img 
              src="https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif" 
              alt="Cat programming meme" 
              className="h-48 rounded-lg"
            />
          </div>

          <p className="text-gray-400 text-center italic mb-6">
            "Our code, like this cat, seems chaotic but somehow produces results."
          </p>

          <motion.div 
            className="mt-6 flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl bg-orange-500 px-6 py-2 rounded-full font-bold inline-block">
              #CodeWithEnergy
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;