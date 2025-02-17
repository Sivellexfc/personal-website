import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "./theme-toggle";
import React from "react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-sm bg-background/55 sticky top-0 w-full z-50 flex items-center justify-evenly mb-12 p-1 border border-gray-800 dark:border-gray-200 dark:border-opacity-20 border-opacity-20 rounded-xl"
    >
      <ScrollLink
        to="aboutme"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        About Me
      </ScrollLink>

      <ScrollLink
        to="education"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        Education
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        Projects
      </ScrollLink>

      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        Certificates
      </ScrollLink>

      <ThemeToggle></ThemeToggle>
    </motion.header>
  );
};

export default Header;