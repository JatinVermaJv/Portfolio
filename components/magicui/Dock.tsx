"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { RiLinkedinLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";



export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white  dark:text-white " />
      ),
      href: "#hero",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-white  dark:text-white " />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <FaCode className="h-full w-full text-white  dark:text-white " />
      ),
      href: "#skills",
    },
    {
      title: "Linkedin",
      icon: (
        <RiLinkedinLine className="h-full w-full text-white  dark:text-white " />
      ),
      href: "https://www.linkedin.com/in/jatin-verma-09776b2b6/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white  dark:text-white " />
      ),
      href: "https://x.com/mushashi_01",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white  dark:text-white " />
      ),
      href: "https://github.com/JatinVermaJv",
    },
  ];
  return (
    <div className="fixed bottom-8 flex left-32  sm:left-0 items-end justify-center h-16 w-full">
    <FloatingDock
        items={links}
    />
    </div>

  );
}
