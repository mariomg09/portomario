"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "experience",
    path: "/experience",
  },
  {
    name: "project",
    path: "/project",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-blue-400 border-b-2 border-blue-400"}
          capitalize font-medium hover:text-blue-400 transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
