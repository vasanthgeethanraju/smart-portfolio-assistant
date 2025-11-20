import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Globe, Phone } from "lucide-react";

const About = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">About</h1>
          </div>

          <div className="grid gap-6">
            <Card className="p-8 shadow-md">
              <div className="flex items-start gap-6">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <img 
                      src="/profile.jpg" 
                      alt="Vasanth Geethan Raju" 
                      className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-primary cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-auto p-0 bg-transparent border-none">
                    <img 
                      src="/profile.jpg" 
                      alt="Vasanth Geethan Raju" 
                      className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Vasanth Geethan Raju</h2>
                  <p className="text-accent font-medium mb-4">Software Engineer at Fortress Information Security</p>
                  <p className="text-foreground/80 leading-relaxed">
                    Software Engineer with 7+ years of experience designing and developing enterprise web applications.
                    Skilled in React, JavaScript, and MongoDB, with expertise in performance optimization, API integrations, CI/CD, and automated testing using Cypress.
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
              <div className="flex flex-col gap-4">
                {/* First row: 2-column grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="http://github.com/vasanthgeethanraju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Github className="w-5 h-5 text-accent" />
                    <span className="text-foreground">GitHub</span>
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
                    href="mailto:vasanthgeethan.raju@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-foreground">vasanthgeethan.raju@gmail.com</span>
                  </a>
                  <a
                    href="tel:+14158158752"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-foreground">(415) 815-8752</span>
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
