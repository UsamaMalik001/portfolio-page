import { Navbar } from "@/components/component/Navbar";
import { HeroSection } from "@/components/component/HeroSection";
import { AboutSection } from "@/components/component/AboutSection";
import { SkillsSection } from "@/components/component/SkillsSection";
import { ExperienceSection } from "@/components/component/ExperienceSection";
import { ProjectsSection } from "@/components/component/ProjectsSection";
import { ContactSection } from "@/components/component/ContactSection";
import { Footer } from "@/components/component/Footer";
import { Metadata } from "next";
import { ReviewsSection } from "@/components/component/Reviews";

export const metadata: Metadata = {
  title: `Umar Farooq - 5+ Years in Web & Mobile Dev`,
};
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ReviewsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
