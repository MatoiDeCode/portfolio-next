"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project-01",
    desc: "Create a personal website to showcase your projects, resume, blog, and contact information. Use HTML, CSS, and JavaScript for the front end and a framework like React or Vue.js for a more dynamic site.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "@MatoiDeCode",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project-02",
    desc: "Develop an expense tracking application that helps users manage their finances by logging expenses and visualizing spending patterns. Use Next JS for the front end, Node.js for the back end, and MongoDB for the database.",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Node JS",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "@MatoiDeCode",
  },
  {
    num: "03",
    category: "frontend",
    title: "project-02",
    desc: "Develop a platform for online courses with features like video lessons, quizzes, and user progress tracking. Use a full-stack appr oach with Next JS, JavaScript, and Tailwind CSS",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "@MatoiDeCode",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center items-center py-6 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="">
              <div className="text-4xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.desc}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="">
                <Link href="">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipTrigger>
                        <BsGithub />
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
