import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSyringe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLaughSquint,
  FaCode,
  FaDiscord,
  FaYoutube,
  FaArrowUp,
  FaDev,
  FaHeart,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaRocket } from "react-icons/fa6"; // Assuming you're using Font Awesome 6 for the rocket icon
import { RiArrowRightSFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll position for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle newsletter form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Simulate successful subscription
      setEmailStatus("success");
      setTimeout(() => {
        setEmail("");
        setEmailStatus(null);
      }, 3000);
    } else {
      setEmailStatus("error");
    }
  };

  // Scroll back to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/Glucon-D",
      name: "GitHub",
    },
    // {
    //   icon: <FaTwitter />,
    //   href: "#",
    //   name: "Twitter",
    // },
    // {
    //   icon: <FaInstagram />,
    //   href: "#",
    //   name: "Instagram",
    // },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/cyberboyayush",
      name: "LinkedIn",
    },
    {
      icon: <TfiWorld />,
      href: "https://glucon-d.xyz/",
      name: "Website",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@vrandacodz",
      name: "YouTube",
    },
    // { icon: <FaDev />, href: "", name: "Dev.to" },
    {
      icon: <FaEnvelope />,
      href: "mailto:connect@ayush-sharma.in",
      name: "Email",
    },
  ];

  const quickLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/tech", text: "Tech Stack" },
    { to: "/projects", text: "Projects" },
    { to: "/team", text: "Meet The Team" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-800 text-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-700  to-gray-700"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-orange-500 rounded-full filter blur-[100px] opacity-5"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-orange-500 rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      {/* Back to top button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg shadow-orange-500/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </motion.div>

      <div className="container mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Brand and social links */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center mb-4">
              <FaSyringe className="text-orange-500 text-2xl mr-2" />
              <span className="text-white font-bold text-xl">Glucon-D</span>
              <FaLaughSquint className="text-orange-500 text-xl ml-1" />
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              We're just a bunch of talented devs who believe the best code is
              written after midnight.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links and Contact combined */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 md:w-2/3 md:justify-end">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500 flex items-center gap-2">
                <FaCode className="text-sm" /> Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-lg text-orange-500">
                        <RiArrowRightSFill />
                      </span>{" "}
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500 flex items-center gap-2">
                <FaEnvelope className="text-sm" /> Contact
              </h3>
              <ul className="space-y-2">
                <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                  <FaGithub className="text-orange-500 mr-2" />
                  <a
                    href="https://github.com/Glucon-D"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    @Glucon-D
                  </a>
                </motion.li>
                <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                  <FaEnvelope className="text-orange-500 mr-2" />
                  <a
                    href="mailto:connect@ayush-sharma.in"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    connect@ayush-sharma.in
                  </a>
                </motion.li>
                <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                  <FaMapMarkerAlt className="text-orange-500 mr-2" />
                  <span className="text-gray-400 text-sm">
                    Somewhere in a hackathon
                  </span>
                </motion.li>
              </ul>
            </div>

            {/* Newsletter enhanced */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500 flex items-center gap-2">
                <FaEnvelope className="text-sm" /> Newsletter
              </h3>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`px-3 py-2 rounded-md bg-gray-800 border ${
                      emailStatus === "error"
                        ? "border-red-500 focus:border-red-500"
                        : emailStatus === "success"
                        ? "border-green-500 focus:border-green-500"
                        : "border-gray-700 focus:border-orange-500"
                    } focus:outline-none text-sm w-full`}
                  />
                  {emailStatus && (
                    <motion.div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      {emailStatus === "success" ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaExclamationCircle className="text-red-500" />
                      )}
                    </motion.div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm flex items-center justify-center gap-2 relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {emailStatus === "success" ? (
                    <>
                      <FaCheckCircle /> Subscribed!
                    </>
                  ) : (
                    <>
                      <FaEnvelope /> Subscribe
                    </>
                  )}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 -z-10 opacity-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                {emailStatus === "error" && (
                  <motion.p
                    className="text-red-500 text-xs mt-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Please enter a valid email
                  </motion.p>
                )}
                {emailStatus === "success" && (
                  <motion.p
                    className="text-green-500 text-xs mt-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks for subscribing!
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <motion.p
            className="text-gray-400 mb-2 md:mb-0 flex items-center flex-wrap justify-center md:justify-start gap-1"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear} Team Glucon-D. Built with{" "}
            <motion.span
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="text-red-500"
            >
              <FaHeart />
            </motion.span>{" "}
            and{" "}
            <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              ☕
            </motion.span>
          </motion.p>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="#" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="#" className="text-gray-400 hover:text-white">
                Terms
              </Link>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/sitemap" className="text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </motion.div> */}
          </div>
        </div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-gray-900/85 to-gray-900/85 text-center py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ y: -2 }}
      >
        <p className="text-xs font-medium flex items-center justify-center gap-2">
          <FaRocket className="animate-pulse" />
          Currently accepting hackathon invitations and energy drink
          sponsorships! 🚀
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
