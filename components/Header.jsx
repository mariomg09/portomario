import Link from "next/link";
import { Button } from "./ui/button";

//components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mario<span className="text-blue-400">.</span>
          </h1>
        </Link>
        {/*Navbar*/}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/CV">
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/*Navbar Mobile*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
