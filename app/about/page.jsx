"use client";

import Image from "next/image";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-0">
        <li className="list-item-with-dot">
          B.Eng. in Computer Engineering, University of Indonesia (2022 -
          present)
        </li>
        <li className="list-item-with-dot">
          Science Program, SMA Negeri 2 Jakarta (2019 - 2022)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none pl-0">
        <li className="list-item-with-dot">
          CCNAv7: Enterprise Networking, Security, and Automation
        </li>
        <li className="list-item-with-dot">CCNAv7: Introduction to Networks</li>
        <li className="list-item-with-dot">
          CCNAv7: Switching, Routing, and Wireless Essentials
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-0">
        <li className="list-item-with-dot">react.js</li>
        <li className="list-item-with-dot">next.js</li>
        <li className="list-item-with-dot">tailwindcss</li>
        <li className="list-item-with-dot">typescript</li>
        <li className="list-item-with-dot">javascript</li>
        <li className="list-item-with-dot">Cisco Networking</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="w-full h-auto xl:w-[450px] xl:h-[600px]"
          src="/Home/marioime.jpg"
          width={300}
          height={400}
          alt="Mario M G"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mt-6 mb-6 text-blue-400">
            <span className="text-blue-400">About</span>{" "}
            <span className="text-white">Me</span>
          </h2>
          <p className="text-base md:text-lg">
            I was born on March 10, 2004 and I am a Computer Engineering student
            at the University of Indonesia. Last year, I served as the Chairman
            of IME FTUI 2024 and have strong leadership, public speaking, and
            communication skills. Passionate about tech, I've worked on various
            software and hardware projects, which you can explore on this
            website.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-3">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.7, ease: "easeIn" },
            }}
          >
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              className="mt-4 max-w-[600px]"
            >
              {TAB_DATA.find((item) => item.id === tab).content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
