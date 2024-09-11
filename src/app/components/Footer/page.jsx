'use client'

import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full rounded-t-[5vh] h-auto min-h-[60vh] text-white bg-pink-900 font-oswald mt-5 tracking-[.2vh] flex flex-col items-center py-10">
      <div className="container mx-auto text-center text-xs text-yellow-500">

        <p className="mb-4 px-2 text-xs sm:text-base lg:text-lg">
          © 2024 Mohd Murtaza Khan. All rights reserved.
        </p>
        <p className="mb-4 px-2 text-xs sm:text-base lg:text-lg">
          This website was meticulously crafted using the latest web technologies including Next , GSAP, Locomotive Scroll, and Framer Motion. The combination of these tools has allowed me to bring dynamic and engaging animations to life, such as the rolling eyes effect and other cool visual experiences.
        </p>
        <p className="mb-4 px-2 text-xs sm:text-base lg:text-lg">
          As a passionate web developer, I am constantly exploring new ways to push the boundaries of web design and development. My goal is to create websites that are not only functional but also visually appealing and interactive.
        </p>


        <motion.div
          className="font-strike text-[10vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] text-yellow-500 mt-14"
        >
          CREATIVE
        </motion.div>

        <div className="flex flex-col text-sm sm:text-base lg:text-xl mt-10">
          <h1>mail Id: Murtazakhan1910@gmail.com</h1>
          <h1>Creativity is intelligence having fun!</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
