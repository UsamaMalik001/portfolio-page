import { Briefcase, Code, Monitor, Smartphone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate developer with a focus on creating exceptional user
              experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 py-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a frontend and mobile developer with over 5 years of
              experience building web and mobile applications. My journey began
              as a junior frontend developer, where I honed my skills in HTML,
              CSS, and JavaScript. As I progressed in my career, I expanded my
              expertise to include modern frameworks and libraries like React,
              Next.js, React Native, and Flutter.
            </p>
            <p className="text-muted-foreground">
              I specialize in creating responsive, user-friendly interfaces that
              deliver exceptional user experiences. My approach combines
              technical expertise with a keen eye for design, ensuring that the
              applications I build are not only functional but also visually
              appealing and intuitive to use.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've worked on a diverse range of projects,
              from food ordering platforms to real estate dashboards and
              marketplace applications. This variety has given me a broad
              perspective and the ability to adapt to different project
              requirements and challenges.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about staying up-to-date with the latest
              technologies and best practices in frontend and mobile
              development. I enjoy solving complex problems and continuously
              learning new skills to improve my craft.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Full-Stack Capable</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span>Web & Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                <span>Remote Worker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
