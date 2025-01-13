"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

// components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";


const Header = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("#home"); // Default to "#home"

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveSection("#home");
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="py-2 xl:py-3 text-white sticky top-0 bg-primary z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick}>
          <h1 className="text-4xl font-semibold">
            Mario<span className="text-blue-400">.</span>
          </h1>
        </Link>
        {/* Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <Link href="/CV">
            <Button className="text-primary border-2 border-blue-400 hover:bg-blue-400 hover:text-white">
              Hire Me
            </Button>
          </Link>
        </div>
        {/* Navbar Mobile */}
        <div className="xl:hidden flex items-center gap-4">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
