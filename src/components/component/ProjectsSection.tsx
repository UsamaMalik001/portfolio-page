import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Monitor, Smartphone } from "lucide-react";
import Pic from "../../../public/images/download.jpeg";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects I've worked on throughout my career.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
          <ProjectCard
            title="Food Ordering Platform"
            description="A comprehensive food ordering platform with merchant dashboard, orders management system, and customer-facing storefront."
            icon={<Monitor className="h-5 w-5 text-primary" />}
            technologies={["React", "React Native", "Redux"]}
          />
          <ProjectCard
            title="Maum Market App"
            description="A Flutter-based marketplace application with product listings, user profiles, and secure payment processing."
            icon={<Smartphone className="h-5 w-5 text-primary" />}
            technologies={["Flutter", "Dart", "Firebase"]}
          />
          <ProjectCard
            title="Real Estate Dashboard"
            description="A comprehensive dashboard for real estate agents to manage listings, client interactions, and property analytics."
            icon={<Monitor className="h-5 w-5 text-primary" />}
            technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
          />
          <ProjectCard
            title="Landing Pages"
            description="Collection of high-converting landing pages for various clients including Double Parked, True Gaming, and Crave."
            icon={<Monitor className="h-5 w-5 text-primary" />}
            technologies={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
}

function ProjectCard({
  title,
  description,
  icon,
  technologies,
}: ProjectCardProps) {
  return (
    <Card>
      <CardContent className="py-2 px-6">
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <Image
          src={Pic}
          width={400}
          height={200}
          alt={`${title} screenshot`}
          className="rounded-md object-cover w-full h-48 mb-4"
        />
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
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
