import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Globe, Phone, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    school: "Indiana Wesleyan University · Hybrid",
    date: "Expected May 2028",
  },
  {
    degree: "Master of Science in Computer Science",
    school: "Boise State University, Boise, ID",
    date: "May 2020",
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    school: "Anna University, Chennai, India",
    date: "May 2015",
  },
];

const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Meteor", "HTML/CSS", "Tailwind", "Vite", "Python", "Java", "SQL", "Angular"],
  },
  {
    title: "Backend & Data",
    skills: ["MongoDB & aggregation pipelines", "Supabase & edge functions", "RBAC workflow systems"],
  },
  {
    title: "Testing & DevOps",
    skills: ["Playwright", "Cypress", "CI/CD", "Git"],
  },
  {
    title: "AI & Tools",
    skills: ["LLM integration", "Claude", "Cursor", "VS Code", "Jira"],
  },
];

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
                  <p className="text-accent font-medium mb-4">Full-Stack Software Engineer · React/TypeScript · AI/LLM tooling</p>
                  <p className="text-foreground/80 leading-relaxed">
                  Software Engineer with 7+ years of experience building scalable, customer-focused products. I thrive in rapidly evolving
                  environments where I take ownership, turn complex problems into clear solutions, and ship software that meaningfully improves
                  people's lives. Grounded in full-stack and automation experience, I build with a deep respect for quality, reliability, and long-term
                  impact of the product for customers.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.degree} className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <p className="font-semibold text-foreground">{item.degree}</p>
                        <p className="text-sm text-muted-foreground sm:text-right">{item.date}</p>
                      </div>
                      <p className="text-foreground/80">{item.school}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">Skills & Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-semibold text-foreground mb-2">{group.title}</h4>
                    <ul className="space-y-1 text-foreground/80">
                      {group.skills.map((skill) => (
                        <li key={skill}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="flex flex-col gap-4">
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
