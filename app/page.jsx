import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import About from "./about/page";
import Experience from "./experience/page";
import Project from "./project/page";
import Contact from "./contact/page";
const Home = () => {
  return (
    <>
      <section id="home" data-offset="true" className="h-full py-16" >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/*teks*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 mb-7">
                Hi, I'm <br />
                <span className="text-blue-400">Mario M G</span>
              </h1>
              <p className="max-w-[600px] mb-9 text-white/80">
                a Computer Engineering student passionate about combining
                software and hardware. With hands-on experience in programming,
                IoT, networking, and databases, I bring innovation to every
                project. Formerly the President of IME FTUI 2024, I’ve honed
                leadership and teamwork skills that drive impactful results.
              </p>
              {/*CV*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  href="/CV-MarioMG.pdf" // Path menuju file CV
                  download="MarioMG_CV.pdf"
                  variant="outline"
                  size="xl"
                  className="uppercase flex items-center gap-3 px-6 py-5 w-auto border-blue-400 hover:bg-blue-400 hover:text-white border-2"
                >
                  <span> Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb- xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-12 h-12 border border-blue-400 rounded-full flex justify-center items-center text-xl text-blue-400 text-base hover:bg-blue-400 hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
      {/*About*/}
      <section
        id="about"
        className="h-full py-16"
        style={{
          backgroundImage: "url('/About/aboutbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <About />
        </div>
      </section>
      {/*Experience*/}
      <section id="experience" className="h-full py-16">
        <div className="container mx-auto">
          <Experience />
        </div>
      </section>
      {/*Project*/}
      <section id="project" className="h-full py-16">
        <div className="container mx-auto">
          <Project />
        </div>
      </section>
      {/*Contact Me*/}
      <section id="contact" className="h-full py-16">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
