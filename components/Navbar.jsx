"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "experience",
    path: "#experience",
  },
  {
    name: "project",
    path: "#project",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [activeSection, setActiveSectionState] = useState("#home"); // Default to "#home"

  useEffect(() => {
    const sections = ["home", "about", "experience", "project", "contact"];

    // Function to handle scroll and set active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 1 &&
            scrollPosition < offsetBottom - 1
          ) {
            setActiveSectionState(`#${section}`);
          }
        }
      });
    };

    // Set the initial active section based on scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.dataset.offset ? 100 : 0; // Adjust offset value as needed
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
      setActiveSectionState(`#${targetId}`);
    }
  };

  return (
    <nav className="flex gap-8 sticky">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              activeSection === link.path
                ? "text-blue-400 border-b-2 border-blue-400"
                : ""
            } capitalize font-medium hover:text-blue-400 transition-all`}
            onClick={handleLinkClick}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
