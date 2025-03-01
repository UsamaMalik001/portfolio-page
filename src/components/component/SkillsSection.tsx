"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Wrench, Users } from "lucide-react";

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

interface Skill {
  name: string;
  proficiency?: number;
  color?: string;
}

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  className?: string;
}

function SkillGroup({ title, icon, skills, className = "" }: SkillGroupProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={item}
      className={`rounded-xl bg-card p-6 backdrop-blur-sm border ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="grid gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            {skill.proficiency ? (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${skill.proficiency}%` }
                        : { width: 0 }
                    }
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`
                  relative p-3 rounded-lg font-medium
                  transition-all duration-300
                  bg-gradient-to-r from-muted/50 to-muted/30
                  hover:from-primary/20 hover:to-primary/10
                  group-hover:translate-x-2
                `}
              >
                <span className="relative z-10">{skill.name}</span>
                <div
                  className="
                    absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-r from-primary/10 via-transparent to-transparent
                  "
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);

  const frontendSkills = [
    { name: "HTML/CSS", proficiency: 95 },
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 85 },
    { name: "React.js", proficiency: 90 },
    { name: "Next.js", proficiency: 85 },
  ];

  const mobileSkills = [
    { name: "React Native", proficiency: 85 },
    { name: "Flutter", proficiency: 80 },
    { name: "Expo", proficiency: 85 },
    { name: "Mobile UI/UX", proficiency: 80 },
  ];

  const tools = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Vercel" },
    { name: "Firebase" },
    { name: "REST APIs" },
    { name: "GraphQL" },
  ];

  const softSkills = [
    { name: "Team Collaboration" },
    { name: "Problem Solving" },
    { name: "Communication" },
    { name: "Time Management" },
    { name: "Remote Work" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container m-auto relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl mb-6 font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive set of technologies I&apos;ve worked with
              throughout my career.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12"
        >
          <SkillGroup
            title="Frontend"
            icon={<Code2 className="h-6 w-6 text-primary" />}
            skills={frontendSkills}
            className="md:col-span-2 lg:col-span-1"
          />
          <SkillGroup
            title="Mobile"
            icon={<Smartphone className="h-6 w-6 text-primary" />}
            skills={mobileSkills}
            className="md:col-span-2 lg:col-span-1"
          />
          <SkillGroup
            title="Tools"
            icon={<Wrench className="h-6 w-6 text-primary" />}
            skills={tools}
            className="md:col-span-2 lg:col-span-1"
          />
          <SkillGroup
            title="Soft Skills"
            icon={<Users className="h-6 w-6 text-primary" />}
            skills={softSkills}
            className="md:col-span-2 lg:col-span-1"
          />
        </motion.div>
      </div>
    </section>
  );
}
