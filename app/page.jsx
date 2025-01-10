import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*teks*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hi, I'm <br />
              <span className="text-blue-400">Mario M G</span>
            </h1>
            <p className="max-w-[600px] mb-8 text-white/80">
              I’m a Computer Engineering student with a strong interest in both
              software and hardware. Over the past two years, I have gained
              experience in basic programming with C, databases, Cisco
              networking, IoT with Arduino, and more. I am highly active in
              campus organizations and currently serve as the President of IME
              FTUI 2024. With my leadership experience, I have developed strong
              communication skills and the ability to work well in a team.
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
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-blue-400 rounded-full flex justify-center items-center text-xl text-blue-400 text-base hover:bg-blue-400 hover:text-primary hover:transition-all duration-500"

                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
