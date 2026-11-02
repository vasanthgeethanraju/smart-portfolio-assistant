import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { MessageSquare, User, FolderGit2, Download, GraduationCap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/vg-logo.png" alt="" className="w-8 h-8 rounded-lg object-cover" />
            </div>
            <span className="hidden min-[380px]:inline text-lg font-semibold text-foreground">
              <span className="sm:hidden">Vasanth</span>
              <span className="hidden sm:inline">Vasanth Geethan Raju</span>
            </span>
          </Link>

          <div className="flex items-center space-x-1">
            <NavLink
              to="/"
              aria-label="Chat"
              className="flex items-center space-x-2 px-2 lg:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden lg:inline">Chat</span>
            </NavLink>
            
            <NavLink
              to="/about"
              aria-label="About"
              className="flex items-center space-x-2 px-2 lg:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <User className="w-4 h-4" />
              <span className="hidden lg:inline">About</span>
            </NavLink>

            <NavLink
              to="/projects"
              aria-label="Projects"
              className="flex items-center space-x-2 px-2 lg:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <FolderGit2 className="w-4 h-4" />
              <span className="hidden lg:inline">Projects</span>
            </NavLink>

            <NavLink
              to="/ai-ml-portfolio"
              aria-label="AI/ML Portfolio"
              className="flex items-center space-x-2 px-2 lg:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden lg:inline">AI/ML Portfolio</span>
            </NavLink>

            <a
              href="/resume.pdf"
              download="Vasanth_Geethan_Raju_Resume.pdf"
              className="flex items-center space-x-2 px-2 lg:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
              <span className="hidden lg:inline">Resume</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
