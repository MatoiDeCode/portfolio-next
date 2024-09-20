import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-[85vh]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-12 xl:pb-10">
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="text-4xl xl:text-6xl font-bold mt-4">
              Hello, Im <br /> Matoi Decode
            </h1>
            <p className="max-w-[500px] mt-6 text-gray-400">
              I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center mt-8 gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-xl flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
