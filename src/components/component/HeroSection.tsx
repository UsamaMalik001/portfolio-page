import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Features from "./Features";
export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-20 bg-muted/50">
      <div className="container m-auto max-w-6xl py-8 md:py-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-2 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-1">
              <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none">
                Hi, I&apos;m Umar
              </h1>
              <h1 className="text-3xl mb-6 font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                Full Stack Developer
              </h1>
              <p className="max-w-[500px] text-muted-foreground md:text-xl">
                With over 5 years of experience building responsive and
                user-friendly web and mobile applications. Specialized in React,
                Next.js, React Native, and Flutter.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects">
                <Button>
                  View My Work
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
          </div>
          <Features />
        </div>
      </div>
    </section>
  );
}
