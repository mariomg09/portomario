"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const experiences = [
  {
    num: "01",
    category: "Software Engineer at TSM Technology",
    title: "Internship",
    description: "Magang lah pokoknya",
    stack: [
      { name: "Next.js" },
      { name: "Golang" },
      { name: "ptt" },
      { name: "React.js" },
    ],
    image: "/Experience/IME.jpg",
  },
  {
    num: "02",
    category: "President of IME FTUI 2024",
    title: "Organization",
    description:
      "I led 61 Executive Board and Expert Staff members, along with 147 staff, to support and advance the students of the Department of Electrical Engineering. Under my guidance, the department won 1st place at Teknik Cup 2024, Olimpiade Ilmiah Mahasiswa FTUI 2024, and Pesta Rakyat FTUI 2024. I also executed 65 programs focused on academic advocacy, facilities improvement, talent development, and strengthening core competencies within a year.",
    stack: [
      { name: "Leadership" },
      { name: "Teamwork" },
      { name: "Communication" },
    ],
    image: "/Experience/IME.jpg",
  },
  {
    num: "03",
    category: "SC MADK DTE FTUI 2024",
    title: "Organization",
    description:
      "I was responsible for acting as the liaison and coordinating between MADK DTE and MADK Pusat (FT). In this role, I led over 110 staff members, working closely with the project officer to develop course syllabi, prepare operational plans, and oversee the execution of the event on the day. This involved managing resources, ensuring smooth communication between teams, and ensuring that all aspects of the event were well-organized and executed according to plan.",
    stack: [
      { name: "Leadership" },
      { name: "Teamwork" },
      { name: "Communication" },
    ],
    image: "/Experience/MADK.JPG",
  },
];
const Experience = () => {
  const [experience, setExperience] = useState(experiences[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setExperience(experiences[currentIndex]);
  };
  return (
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
              <div className="text-8xl leading-none font-extrabold text-outline mb-1">
                {experience.num}
              </div>
              {/*experience category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-400 transition-all duration-500 capitalize mb-4">
                {experience.category}
              </h2>
              {/*experience description*/}
              <p className="text-lg text-white/60 mb-4">{experience.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {experience.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-blue-400">
                      {item.name}
                      {index !== experience.stack.length - 1 && ","}
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
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {experiences.map((experience, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>
                      </div>
                      {/*image*/}
                      <div>
                        <Image
                          src={experience.image}
                          fill
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
                btnStyles="bg-blue-400 hover:bg-blue-400-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all opacity-80"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
