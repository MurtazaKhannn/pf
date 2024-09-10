"use client";

import React from "react";
import projects from "../Assets/projects";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 gap-6 sm:gap-8 md:gap-10 lg:gap-12 rounded-md">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[40vw] md:w-full lg:w-[30vw] xl:w-[28vw] h-auto bg-white text-black rounded-lg font-oswald shadow-md overflow-hidden"
        >
          {/* {project.video && ( */}
            <video
              className="w-full h-[40vh] sm:h-[35vh] md:h-[35vh] lg:h-[30vh] object-cover"
              src={project.video}
              controls
            ></video>
          {/* )} */}
          <div className="p-4">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">{project.name}</h1>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base text-zinc-600 flex flex-wrap gap-2 mt-2">
              {project.tags.map((item, id) => (
                <span key={id}>
                  <p className="bg-zinc-200 rounded-full font-bold text-black py-1 text-xs sm:text-xs md:text-sm lg:text-sm px-2 sm:px-3 md:px-4 lg:px-5">
                    {item}
                  </p>
                </span>
              ))}
            </p>
            <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-zinc-200 font-semibold rounded-full text-xs sm:text-xs md:text-sm lg:text-sm px-2 py-1 sm:px-3 sm:py-1.5"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex gap-2 py-2 mt-4 flex-wrap">
              <p className="flex gap-2 text-xs sm:text-xs md:text-sm lg:text-sm bg-black text-white rounded-full px-3 py-1 cursor-pointer">
                <FaGithub size={16} /> <span>Source</span>
              </p>
              <p className="flex gap-2 text-xs sm:text-xs md:text-sm lg:text-sm bg-black text-white rounded-full px-3 py-1 cursor-pointer">
                <IoLink size={16} /> <span>Website</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
