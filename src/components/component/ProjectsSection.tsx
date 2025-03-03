"use client";

import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BriefcaseBusiness,
  Car,
  Code,
  ExternalLink,
  Gamepad2,
  Monitor,
  Package,
  Smartphone,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiFirebase,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { motion } from "framer-motion";
import TrueGamingPic from "../../../public/Project Assets/true-gaming.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const techIcons: Record<string, Technology> = {
  React: {
    name: "React",
    icon: <SiReact />,
    color: "#61DAFB",
  },
  "React Native": {
    name: "React Native",
    icon: <SiReact />,
    color: "#61DAFB",
  },
  "React JS": {
    name: "React JS",
    icon: <SiReact />,
    color: "#61DAFB",
  },
  "Next.js": {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
  },
  TypeScript: {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  JavaScript: {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    color: "#E34F26",
  },
  CSS: {
    name: "CSS",
    icon: <SiCss3 />,
    color: "#1572B6",
  },
  Redux: {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
  },
  Firebase: {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#FFCA28",
  },
  Flutter: {
    name: "Flutter",
    icon: <SiFlutter />,
    color: "#02569B",
  },
  Dart: {
    name: "Dart",
    icon: <SiDart />,
    color: "#0175C2",
  },
};

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
}

function TechBadge({ name }: { name: string }) {
  const tech = techIcons[name];
  if (!tech) return null;

  return (
    <motion.div variants={item} className="group relative">
      <div
        className={`
          flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
          transition-all duration-300
          bg-gradient-to-r from-muted/50 to-muted/30
          hover:from-muted/80 hover:to-muted/50
          dark:from-muted/20 dark:to-muted/10
          dark:hover:from-muted/30 dark:hover:to-muted/20
        `}
      >
        <span
          className="text-base transition-colors"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </span>
        <span>{tech.name}</span>

        {/* Hover effect */}
        <div
          className="
            absolute inset-0 rounded-lg opacity-0 
            group-hover:opacity-100 transition-opacity 
            duration-300 pointer-events-none
            bg-gradient-to-r from-[var(--tech-color)] via-transparent to-transparent
          "
          style={{ "--tech-color": `${tech.color}15` } as React.CSSProperties}
        />
      </div>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  icon,
  technologies,
}: ProjectCardProps) {
  const getImagePath = (title: string) => {
    const paths = {
      Orderspot: "/order-img.jpg",
      "True Gaming": "/banner.jpg",
      "Ware Friday": "/business.jpg",
      "Double Parked": "/double-parked-banner.jpg",
      "Maum Market App": "/market.jpeg",
      "Real Estate Dashboard": "/realestate.jpg",
      "Landing Pages": "/landing page banner.jpg",
      "Food Ordering Platform": "/food-ordering.jpg",
    };

    return (paths as Record<string, string>)[title] || "/placeholder.png";
  };
  return (
    <Card className="overflow-hidden group shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-md bg-muted/50">
          <Image
            src={getImagePath(title) || "/placeholder.svg"}
            fill
            alt={`${title} screenshot`}
            className="rounded-md object-cover w-full h-48 mb-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2 mb-4"
        >
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </motion.div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Code className="h-4 w-4" />
            Source Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Food Ordering Platform",
      description:
        "A comprehensive food ordering platform with merchant dashboard, orders management system, and customer-facing storefront.",
      icon: <Monitor className="h-5 w-5 text-primary" />,
      technologies: ["React", "React Native", "Redux"],
    },
    {
      title: "Maum Market App",
      description:
        "A Flutter-based marketplace application with product listings, user profiles, and secure payment processing.",
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Real Estate Dashboard",
      description:
        "A comprehensive dashboard for real estate agents to manage listings, client interactions, and property analytics.",
      icon: <Monitor className="h-5 w-5 text-primary" />,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Landing Pages",
      description:
        "Collection of high-converting landing pages for various clients including Double Parked, True Gaming, and Crave.",
      icon: <Monitor className="h-5 w-5 text-primary" />,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "True Gaming",
      description:
        "A comprehensive gaming platform revolutionizing the gaming industry.",
      icon: <Gamepad2 className="h-5 w-5 text-primary" />,
      technologies: ["React JS", "TypeScript"],
    },
    {
      title: "Ware Friday",
      description:
        "A comprehensive consulting platform revolutionizing the consulting industry.",
      icon: <BriefcaseBusiness className="h-5 w-5 text-primary" />,
      technologies: ["React JS", "TypeScript"],
    },
    {
      title: "Orderspot",
      description:
        "A comprehensive ordering platform revolutionizing the ordering industry.",
      icon: <Package className="h-5 w-5 text-primary" />,
      technologies: ["React JS", "TypeScript"],
    },
    {
      title: "Double Parked",
      description:
        "A comprehensive booking platform revolutionizing the booking industry.",
      icon: <Car className="h-5 w-5 text-primary" />,
      technologies: ["React JS", "TypeScript"],
    },
  ];
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl mb-6 font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects I&apos;ve worked on throughout my career.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
