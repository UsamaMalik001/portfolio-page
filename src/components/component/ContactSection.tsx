import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container max-w-6xl m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl mb-6 font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Interested in working together? Feel free to reach out through any
              of the channels below.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-lg gap-8 py-12">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <Mail className="h-5 w-5" />
              <span>hello@example.com</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn Profile</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <Github className="h-5 w-5" />
              <span>GitHub Profile</span>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground">
              Currently available for freelance projects and full-time
              opportunities.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
