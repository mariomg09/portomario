"use client";
import React, { useState, useEffect, useRef } from "react";
import Card from "./card";
import Tag from "./tag";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchExperiences = async () => {
      const res = await fetch("/api/Experience");
      const data = await res.json();
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredExperiences = experiences.filter((experience) =>
    experience.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experiences">
      <h2 className="text-center text-4xl font-bold text-blue-400 mt-4 mb-4">
        <span className="text-blue-400">My</span>{" "}
        <span className="text-white">Experiences</span>
      </h2>
      <div className="text-blue-400 flex flex-col md:flex-row justify-center items-center gap-2 py-6">
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
      <ul
        key={tag}
        ref={ref}
        className="grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-8"
      >
        {filteredExperiences.map((experience, index) => (
          <motion.li
            key={experience.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Card
              title={experience.title}
              positions={experience.positions}
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
