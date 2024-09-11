"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeMax } from "react-icons/md";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";


const Socials = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center">
      {/* Hovering over the container will expand its size */}
      <motion.div
        whileHover={{ width: "27vw" }} // Expand the container when hovering
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation
        className="flex min-w-[24vw] h-[7vh] bg-black dark:bg-white items-center justify-center gap-4 rounded-full shadow-lg"
      >
        {/* LinkedIn Icon */}
        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white dark:bg-black text-black dark:text-white text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            LinkedIn
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.3 }} // Slight scale up for spongy effect
            transition={{ type: "spring", stiffness: 300, damping: 15 }} // Adding bounce effect
            className="p-2"
            onClick={() => window.open("https://www.linkedin.com/in/murtaza-khan-58a44a25a/")}
          >
            <FaLinkedinIn className="text-white dark:text-black" size={22} />
          </motion.p>
        </div>

        {/* GitHub Icon */}
        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white dark:bg-black text-black dark:text-white text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            GitHub
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2"
            onClick={() => window.open("https://github.com/MurtazaKhannn")}
          >
            <SiGithub className="text-white dark:text-black" size={22} />
          </motion.p>
        </div>

        {/* Twitter Icon */}
        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white dark:bg-black text-black dark:text-white text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Twitter
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2"
            onClick={() => window.open("https://x.com/murtazakhan1910?t=RX_qTiCkEGTHTwNGziAgow&s=09")}
          >
            <FaXTwitter className="text-white dark:text-black" size={22} />
          </motion.p>
        </div>

        {/* Leetcode Icon */}
        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white dark:bg-black text-black dark:text-white text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Leetcode
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2"
          >
            <SiLeetcode className="text-white dark:text-black" size={22} />
          </motion.p>
        </div>

        <div className="font-bold text-white dark:text-black">|</div>

        {/* Home Icon */}
        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white dark:bg-black text-black dark:text-white text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Home
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2"
          >
            <MdHomeMax className="text-white dark:text-black" size={24} />
          </motion.p>
        </div>

        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white dark:bg-black text-black dark:text-white text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Theme
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2"
            onClick={toggleTheme}
          >
            <WiMoonAltWaxingCrescent2 className="text-white dark:text-black" size={24} />
            {/* <MdHomeMax className="text-white dark:text-black" size={22} /> */}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
