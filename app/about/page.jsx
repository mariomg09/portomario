"use client";

import Image from "next/image";
import React, { useTransition, useState } from "react";
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
        <Image className="w-full h-auto xl:w-[450px] xl:h-[600px]"
          src="/Home/marioime.jpg"
          width={300}
          height={400}
          alt="Mario M G"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mt-6 mb-6 text-blue-400">About Me</h2>
          <p className="text-base md:text-lg">
            a Computer Engineering student passionate about combining software
            and hardware. With hands-on experience in programming, IoT,
            networking, and databases, I bring innovation to every project.
            Formerly the President of IME FTUI 2024, I’ve honed leadership and
            teamwork skills that drive impactful results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8 max-w-[600px]">
            {TAB_DATA.find((item) => item.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
