"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeMax } from "react-icons/md";
import { SiGithub, SiLeetcode } from "react-icons/si";

const Socials = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="flex min-w-[20vw] h-[6vh] bg-opacity-90 bg-black items-center justify-center gap-4 rounded-full shadow-lg"
      >
        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white text-black text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            LinkedIn
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="p-2">
            <FaLinkedinIn size={20} />
          </motion.p>
        </div>

        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white text-black text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            GitHub
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="p-2">
            <SiGithub size={20} />
          </motion.p>
        </div>

        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white text-black text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Twitter
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="p-2">
            <FaXTwitter size={20} />
          </motion.p>
        </div>

        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white text-black text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Leetcode
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="p-2">
            <SiLeetcode size={20} />
          </motion.p>
        </div>

        <div className="font-bold text-white">|</div>

        <div className="relative group flex items-center justify-center">
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white text-black text-xs rounded-md font-semibold"
            style={{ pointerEvents: "none" }}
          >
            Home
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="p-2">
            <MdHomeMax size={20} />
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
