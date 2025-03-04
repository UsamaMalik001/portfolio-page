// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin } from "lucide-react";

// export function Navbar() {
//   return (
//     <header className="sticky px-4 top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container m-auto flex h-16 items-center justify-between px-4 md:px-6">
//         <div className="font-bold text-xl">
//           <Link href="/">Portfolio</Link>
//         </div>
//         <nav className="hidden md:flex gap-6">
//           <Link
//             href="#about"
//             className="text-sm font-medium hover:text-primary"
//           >
//             About
//           </Link>
//           <Link
//             href="#skills"
//             className="text-sm font-medium hover:text-primary"
//           >
//             Skills
//           </Link>
//           <Link
//             href="#experience"
//             className="text-sm font-medium hover:text-primary"
//           >
//             Experience
//           </Link>
//           <Link
//             href="#projects"
//             className="text-sm font-medium hover:text-primary"
//           >
//             Projects
//           </Link>
//           <Link
//             href="#contact"
//             className="text-sm font-medium hover:text-primary"
//           >
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center gap-2">
//           <Link
//             href="https://github.com/muhammadumarfarooq"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button variant="ghost" size="icon">
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </Button>
//           </Link>
//           <Link
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button variant="ghost" size="icon">
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </Button>
//           </Link>
//           <Link href="#contact">
//             <Button>Contact Me</Button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/app/siteConfig";

export function Navbar() {
  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-52" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link
            href={siteConfig.baseLinks.home}
            aria-label="Home"
            className="font-bold text-xl"
          >
            Portfolio
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.about}
              >
                About
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.skills}
              >
                Skills
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.experience}
              >
                Experience
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.projects}
              >
                Projects
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.contact}
              >
                Contact
              </Link>
            </div>
          </nav>
          <Link href={siteConfig.baseLinks.contact}>
            <Button className="hidden h-10 font-semibold md:flex">
              Contact Me
            </Button>
          </Link>
          <div className="flex gap-x-2 md:hidden">
            <Link href={siteConfig.baseLinks.contact}>
              <Button>Contact Me</Button>
            </Link>

            <Button
              onClick={() => setOpen(!open)}
              variant="default"
              className="aspect-square p-2"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex flex-col text-lg ease-in-out will-change-transform md:hidden transition-[opacity,visibility,height] duration-300",
            open ? "opacity-100 h-auto visible" : "opacity-0 h-0 invisible"
          )}
        >
          <ul className="space-y-4 font-medium" onClick={() => setOpen(false)}>
            <li>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>
            <li>
              <Link href={siteConfig.baseLinks.skills}>Skills</Link>
            </li>
            <li>
              <Link href={siteConfig.baseLinks.experience}>Experience</Link>
            </li>
            <li>
              <Link href={siteConfig.baseLinks.projects}>Projects</Link>
            </li>
            <li>
              <Link href={siteConfig.baseLinks.contact}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
