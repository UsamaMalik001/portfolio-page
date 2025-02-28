import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Pic from "../../../public/images/pic.jpg";
export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-1">
              <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                Hi, I'm Umar
              </h1>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Full Stack Developer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
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
          <Image
            src={Pic}
            width={550}
            height={550}
            alt="Developer portrait"
            className="mx-auto aspect-square shadow-gray-600 shadow-lg overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
