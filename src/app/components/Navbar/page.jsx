"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { MdLightbulbOutline } from "react-icons/md";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="w-full fixsed bg-white dark:bg-black top-0 left-0 z-50 bg-black text-white shadow-md bg-background text-foreground">
      <div className="flex justify-between items-center h-[10vh] xs:h-[8vh] px-4 xs:px-2 w-full">
        {/* Logo Section */}
        <h1 className="text-4xl xs:text-2xl font-bold flex items-center">
          <i className="font-protest flex ">
            <span className="text-red-700">Murtaza</span>
            <span className="text-white">.</span>
            <span className="text-blue-500">Dev</span>
          </i>
        </h1>

        <div className="hidden mr-40 text-black dark:text-white sm:flex space-x-6 font-protest">
        Visit and explore my innovative projects!
        </div>



        {/* Desktop Links */}
        {/* <div className="hidden text-black dark:text-white sm:flex space-x-6 text-white font-protest">
          <Link
            to="home"
            smooth={true}
            duration={2000}
            className="hover:tdext-pink-700 py-2 text-black dark:text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="GameSection"
            smooth={true}
            duration={2000}
            className="hover:text-pinkd-700 text-black dark:text-white py-2 cursor-pointer"
          >
            GameSection
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={2000}
            className="hovedr:text-pink-700 text-black dark:text-white py-2 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={2500}
            className="hover:texct-pink-700 text-black dark:text-white py-2 cursor-pointer"
          >
            Experience
          </Link>
        </div> */}

        

        {/* Contact Button for Desktop */}
        <div className="hidden sm:flex items-center">
          <div>
            <Toaster closeButton  expand={false} />
            <button
              className="px-4 text-black dark:text-white"
              onClick={() =>
                toast.info(
                  <div className="flex flex-col font-strike text-sm">
                    Phone No.
                    <span>7836984950</span>
                  </div>
                )
              }
            >
              <FaPhone size={15} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        {/* <div className="sm:hidden flex items-center">
          <button className="text-black dark:text-white" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="sm:hidden flex flex-col items-center bg-black w-full space-y-4 py-4">
          <Link
            to="home"
            smooth={true}
            duration={2000}
            className="hover:border-b-4 hover:border-yellow-400 py-2 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="GameSection"
            smooth={true}
            duration={2000}
            className="hover:border-b-4 hover:border-yellow-400 py-2 cursor-pointer"
            onClick={toggleMenu}
          >
            GameSection
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={2000}
            className="hover:border-b-4 hover:border-yellow-400 py-2 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={2500}
            className="hover:border-b-4 hover:border-yellow-400 py-2 cursor-pointer"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer"
            onClick={toggleMenu}
          >
            Contact Me <FaPhone size={15} />
          </Link>
        </div>
      )} */}
    </nav>
  );
};

export default Nav;
