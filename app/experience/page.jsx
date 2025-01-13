"use client";
import React, { useState, useRef } from "react";
import Card from "./card";
import Tag from "./tag";
import { motion, useInView } from "framer-motion";

const experiencesData = [
  {
    id: 1,
    title: "Tata Sarana Mandiri Technology (TSM Technology)",
    positions: [
      {
        description: "Software Engineer Internship",
        time: "Jan 2025 - Feb 2025",
      },
    ],
    image: "/Experience/tsm.jpg",
    tag: ["All", "Professional"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ikatan Mahasiswa Elektro FTUI 2024",
    positions: [
      {
        description: "President",
        time: "Jan 2024 - Dec 2024",
      },
      {
        description: "Staff of Communication and Information",
        time: "Jan 2023 - Dec 2023",
      },
    ],
    image: "/Experience/ime.jpg",
    tag: ["All", "Organizational"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MADK DTE FTUI 2024",
    positions: [
      {
        description: "Steering Committee",
        time: "Feb 2024 - Aug 2024",
      },
    ],
    image: "/Experience/MADK.JPG",
    tag: ["All", "Organizational"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Badan Eksekutif Mahasiswa FTUI 2023",
    positions: [
      {
        description: "Staff of Science and Technology",
        time: "Feb 2023 - Dec 2025",
      },
    ],
    image: "/Experience/bem.jpg",
    tag: ["All", "Organizational"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Arjuna IPTEK 2023",
    positions: [
      {
        description: "Project Officer",
        time: "Apr 2023 - Dec 2023",
      },
    ],
    image: "/Experience/arjuna.jpg",
    tag: ["All", "Organizational"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Class Representative Assembly SMAN 2 Jakarta",
    positions: [
      {
        description: "President",
        time: "Aug 2020 - Aug 2021",
      },
    ],
    image: "/Experience/mpk.jpg",
    tag: ["All", "Organizational"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Experience = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredExperiences = experiencesData.filter((experience) =>
    experience.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experiences">
      <h2 className="text-center text-4xl font-bold text-blue-400 mt-4 mb-8 md:mb-12">
        My Experiences
      </h2>
      <div className="text-blue-400 flex flex-row justify-center items-center gap-2 py-6">
        <Tag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <Tag
          onClick={handleTagChange}
          name="Professional"
          isSelected={tag === "Professional"}
        />
        <Tag
          onClick={handleTagChange}
          name="Organizational"
          isSelected={tag === "Organizational"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredExperiences.map((experience, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Card
              key={experience.id}
              title={experience.title}
              positions={
                experience.positions || [
                  {
                    description: experience.description,
                    time: experience.time,
                  },
                ]
              }
              imgUrl={experience.image}
              gitUrl={experience.gitUrl}
              previewUrl={experience.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
