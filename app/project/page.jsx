"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Aerolyze",
    title: "Project",
    description:
      "Aerolyze is a smart gas leakage detection system that ensures household safety by detecting LPG and CO gases using the MQ-2 sensor. It provides real-time notifications via WhatsApp and triggers auditory and visual warnings with a buzzer and LED. The system leverages IoT technology to deliver proactive alerts, helping users take immediate action to prevent fires, explosions, or poisoning, effectively reducing risks to lives and property.",
    stack: [{ name: "C++" }, { name: "ESP-32" }, { name: "MQ-2 Gas Sensor" }],
    image: "/Project/aero.jpg",
  },
  {
    num: "02",
    category: "PantryPal",
    title: "Project",
    description:
      "PantryPal is an E-commerce platform for selling food ingredients with recipe recommendations. Users can filter ingredients by rating, price, or supplier. The platform has three roles: admin, supplier, and buyer. Admins can add recipes, while suppliers and buyers can sell and buy ingredients. Buyers can purchase recipes and ingredients, and rate both purchased ingredients and tried recipes.",
    stack: [
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "MongoDB" },
    ],
    image: "/Project/pantry.png",
  },
  {
    num: "03",
    category: "JBus",
    title: "Project",
    description:
      "JBus is a user-friendly bus ticket booking application developed using Java in Android Studio. It allows users to easily register, log in, and manage their account balance. The app provides a seamless experience for selecting departure and arrival locations, browsing available bus routes, and booking tickets. Additionally, users can view and manage their booking history, making the process of traveling more efficient and convenient.",
    stack: [{ name: "Java" }, { name: "Android Studio" }],
    image: "/Project/jbus.png",
  },
  {
    num: "04",
    category: "UI Shop",
    title: "Project",
    description:
      "UI Shop is a simple e-commerce application developed in C that enables users to create seller and buyer accounts, log in, and manage basic account operations. The application utilizes OpenMP for parallel processing to improve performance and basic file handling for data storage. It provides a streamlined interface for users to engage in buying and selling activities within the system.",
    stack: [{ name: "C Language" }],
    image: "/Project/uishop.png",
  },
  {
    num: "05",
    category: "Emission Calculator",
    title: "Project",
    description:
      "Emission Calculator Program is a simple C-based application that calculates emissions from buildings based on factors like the number of people, vehicles, and electricity usage. It offers an easy interface for data input, calculates emissions, and displays the results. The program uses basic logic and file handling for storing data.",
    stack: [{ name: "C Language" }],
    image: "/Project/emisi.png",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <h2 className="h2 mt-10">
      <span className="text-blue-400">My</span>{" "}
      <span className="text-white">Projects</span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.7, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div>
                {/*outline num*/}
                <div className="text-8xl leading-none font-extrabold text-outline mb-1 text-blue-400">
                  {project.num}
                </div>
                {/*project category*/}
                <h2 className="text-[42px] font-bold leading-none text-blue  group-hover:text-blue-400 transition-all duration-500 capitalize mb-4">
                  {project.category}
                </h2>
                {/*project description*/}
                <p className="text-lg text-white/60 mb-4">
                  {project.description}
                </p>
                {/*stack*/}
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-blue-400">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/*Border*/}
                <div className="border border-white/20 "></div>
                {/*buttons*/}
                <div>
                  {/*<Link>
                  <TooltipProvider>
                    <Tooltip>
                    
                        </Tooltip>

                  </TooltipProvider>
                </Link>*/}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-2"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="relative group flex justify-center items-center bg-pink-50/20 aspect-[3/2.2]">
                        {/* overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/25 z-10"></div>{" "}
                        {/* Opacity dinaikkan menjadi 0.4 */}
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/*slider buttons*/}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-blue-400 hover:bg-blue-400-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all opacity-80 rounded-full"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </h2>
  );
};

export default Project;
