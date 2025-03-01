"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiRedux,
} from "react-icons/si";
import { Briefcase } from "lucide-react";

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
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
  Flutter: {
    name: "Flutter",
    icon: <SiFlutter />,
    color: "#02569B",
  },
  Redux: {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
  },
};

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

function TechBadge({ name }: { name: string }) {
  const tech = techIcons[name];
  if (!tech) return null;

  return (
    <motion.div variants={item} className="group relative">
      <div
        className={`
          flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium
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
        <span className="text-xs">{tech.name}</span>

        {/* Hover effect */}
        <div
          className="
            absolute inset-0 rounded-md opacity-0 
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

function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative pl-8 border-l border-muted-foreground/20"
    >
      <div className="absolute left-0 top-1 flex items-center justify-center w-4 h-4 -translate-x-1/2 rounded-full bg-primary">
        <Briefcase className="w-2 h-2 text-primary-foreground" />
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold inline-flex items-center gap-2">
            {title}
            <span className="text-sm font-normal text-muted-foreground">
              • {company}
            </span>
          </h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <motion.div variants={container} className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Remote",
      period: "2021 - Present",
      description:
        "Working on various web and mobile applications, including merchant dashboards, storefronts, and mobile apps. Leading frontend development and collaborating with cross-functional teams.",
      technologies: ["React", "Next.js", "React Native", "Flutter"],
    },
    {
      title: "Frontend Developer",
      company: "Food Ordering App",
      period: "2019 - 2021",
      description:
        "Implemented merchant dashboard, orders manager in React Native, and storefront for displaying menus. Worked on multiple aspects of the food ordering platform.",
      technologies: ["React", "React Native", "JavaScript", "Redux"],
    },
    {
      title: "Junior Frontend Developer",
      company: "Web Agency",
      period: "2018 - 2019",
      description:
        "Started career building responsive websites and landing pages for various clients. Focused on HTML, CSS, and JavaScript development.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tighter sm:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Over 5 years of professional experience in frontend and mobile
              development.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 py-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
