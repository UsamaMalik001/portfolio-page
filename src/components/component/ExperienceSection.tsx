import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Over 5 years of professional experience in frontend and mobile
              development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 py-12">
          <div className="relative pl-8 border-l border-muted-foreground/20">
            <div className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
              <p className="text-sm text-muted-foreground">
                Remote • 2021 - Present
              </p>
              <p className="text-muted-foreground">
                Working on various web and mobile applications, including
                merchant dashboards, storefronts, and mobile apps. Leading
                frontend development and collaborating with cross-functional
                teams.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Flutter</Badge>
              </div>
            </div>
          </div>
          <div className="relative pl-8 border-l border-muted-foreground/20">
            <div className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <p className="text-sm text-muted-foreground">
                Food Ordering App • 2019 - 2021
              </p>
              <p className="text-muted-foreground">
                Implemented merchant dashboard, orders manager in React Native,
                and storefront for displaying menus. Worked on multiple aspects
                of the food ordering platform.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">JavaScript</Badge>
              </div>
            </div>
          </div>
          <div className="relative pl-8 border-l border-muted-foreground/20">
            <div className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Junior Frontend Developer</h3>
              <p className="text-sm text-muted-foreground">
                Web Agency • 2018 - 2019
              </p>
              <p className="text-muted-foreground">
                Started career building responsive websites and landing pages
                for various clients. Focused on HTML, CSS, and JavaScript
                development.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
