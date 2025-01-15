"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

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

const MobileNav = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
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
      if (setActiveSection) {
        setActiveSection(`#${targetId}`);
      }
      setIsOpen(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".mobile-nav-content") && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center z-50 text-2xl"
        onClick={handleToggle}
      >
        {isOpen ? (
          <IoMdClose className="text-blue-400" />
        ) : (
          <CiMenuFries className="text-blue-400" />
        )}
      </button>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={handleOutsideClick}
        >
          <div className="absolute top-0 left-0 w-full h-[34%] bg-primary z-50 flex flex-col items-center justify-center mobile-nav-content">
            <nav className="flex flex-col items-center gap-4 mt-4">
              {links.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    activeSection === link.path ? "text-blue-400" : ""
                  } text-xl capitalize hover:text-blue-400 transition-all`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
