"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

import Link from "next/link";

const about = {
  title: "About me",
  desc: "Hi, I'm Muhammad Syamsu Niam, also known as Tomiodecode, from Madiun. I'm a passionate coder who loves exploring new technologies and solving problems. Let's connect and create something amazing together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "TomioDeCode",
    },
    {
      fieldName: "Phone",
      fieldValue: "0858-9429-6428",
    },
    {
      fieldName: "Expericence",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "tomiodecode@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesia",
    },
  ],
};

const skills = {
  title: "My Skills",
  desc: "I'm enthusiastically exploring web and app development, focusing on front-end design, user experience, and creating responsive applications with efficient backend systems.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      link: "https://web.dev/learn/html",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      link: "https://web.dev/learn/css",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      link: "https://tailwindcss.com",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      link: "https://web.dev/learn/javascript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      link: "https://typescriptlang.org",
    },
    {
      icon: <FaReact />,
      name: "React JS",
      link: "https://react.dev",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
      link: "https://nodejs.org",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
      link: "https://nextjs.org",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[85vh] flex items-center justify-center py-5 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-14">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
            <TabsTrigger value="about" className="rounded-xl">
              About Me
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-xl">
              Skills
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-7">
                <h3 className="text-2xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-base">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <h3 className="text-2xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <div className="flex xl:justify-start justify-center">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <Link href={item.link} target="_blank">{item.icon}</Link>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
