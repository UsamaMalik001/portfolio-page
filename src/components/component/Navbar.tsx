import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky px-4 top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Portfolio</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:text-primary"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/muhammadumarfarooq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="#contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
