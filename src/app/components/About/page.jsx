'use client'

import React from "react";
import { motion } from "framer-motion";
import work from "../Assets/work";

const Page = () => {
  return (
    <div className="flex font-strike mt-20 flex-col items-center justify-center w-full h-full px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10">
          <div className="w-full lg:w-[70vw] flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-[70%] text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl md:text-6xl">Hello! I am Mohd Murtaza Khan</h3>
              <p className="font-oswald mt-4 text-base sm:text-lg md:text-xl">
                A passionate full-stack web developer based in Delhi. I've gained
                expertise in multiple tech stacks, allowing me to build robust web
                applications from both the front and back end. I completed my
                schooling at Jamia Millia Islamia and earned my B.Tech from MSIT,
                New Delhi. My love for development has driven me to create a range
                of exciting projects, and I'm proficient in delivering seamless,
                efficient, and dynamic web solutions across various platforms.
              </p>
            </div>
            <div className="relative overflow-hidden border-2 border-white bg-white w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] rounded-full mt-6 lg:mt-0 lg:ml-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-0"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt="Mohd Murtaza Khan"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="p-2 mt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Work Experience</h2>

          <div className="mt-6">
            <div className="font-oswald flex flex-col gap-6">
              {work.map((item, id) => (
                <div className="flex flex-col md:flex-row gap-6 items-center" key={id}>
                  <img
                    className="w-[40vw] h-[40vw] max-w-[150px] max-h-[150px] md:w-[12vw] md:h-[12vw] lg:w-[12vw] lg:h-[12vw] rounded-md object-cover"
                    src="https://images.unsplash.com/photo-1725226125870-2c1b9eef9b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                    alt={item.name}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-strike">{item.name}</h3>
                    <p className="text-sm font-semibold">{item.time}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
