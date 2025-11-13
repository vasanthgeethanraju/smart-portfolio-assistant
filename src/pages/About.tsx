import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about my background, skills, and experience
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground flex-shrink-0">
                  VG
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Vasanth Geethan Raju</h2>
                  <p className="text-accent font-medium mb-4">Software Engineer</p>
                  <p className="text-foreground/80 leading-relaxed">
                    Passionate software developer with expertise in building modern web applications. 
                    I specialize in React, TypeScript, and cloud technologies. This AI-powered portfolio 
                    allows recruiters to learn about my experience through natural conversation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">Skills & Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• React & TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Next.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• Node.js</li>
                    <li>• PostgreSQL</li>
                    <li>• REST APIs</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
              {/* <div className="grid sm:grid-cols-2 gap-4 ">
                <a
                  href="mailto:vasanthgeethan.raju@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-foreground">vasanthgeethan.raju@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vasanthgeethanraju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
                <a
                  href="http://github.com/vasanthgeethanraju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Github className="w-5 h-5 text-accent" />
                  <span className="text-foreground">GitHub</span>
                </a> */}
                {/* <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Portfolio</span>
                </a> */}
              {/* </div> */}
              <div className="flex flex-col gap-4">
  {/* First row: 2-column grid */}
  <div className="grid sm:grid-cols-2 gap-4">
    <a
      href="mailto:vasanthgeethan.raju@gmail.com"
      className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
    >
      <Mail className="w-5 h-5 text-accent" />
      <span className="text-foreground">vasanthgeethan.raju@gmail.com</span>
    </a>

    <a
      href="https://www.linkedin.com/in/vasanthgeethanraju/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
    >
      <Linkedin className="w-5 h-5 text-accent" />
      <span className="text-foreground">LinkedIn</span>
    </a>
  </div>

  {/* Second row: single card centered */}
  <div className="flex justify-center">
    <a
      href="http://github.com/vasanthgeethanraju"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors w-80"
    >
      <Github className="w-5 h-5 text-accent" />
      
      <span className="text-foreground">GitHub</span>
    </a>
  </div>
</div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
