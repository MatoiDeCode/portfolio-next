import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello {`I'm`} <br /> <span>Matoi Decode</span>
            </h1>
          </div>
          <div className="">Text</div>
        </div>
      </div>
    </div>
  );
}
