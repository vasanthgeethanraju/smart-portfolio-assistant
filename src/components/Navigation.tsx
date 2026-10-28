import { NavLink } from "./NavLink";
import { MessageSquare, User, FolderGit2, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/vg-logo.png" alt="Vasanth Geethan Raju Logo" className="w-8 h-8 rounded-lg object-cover" />
            </div>
            {/* <span className="text-lg font-semibold text-foreground" onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}>Vasanth's Assistant</span> */}
            <span className="text-lg font-semibold text-foreground">
              <span className="sm:hidden">Vasanth</span>
              <span className="hidden sm:inline">Vasanth Geethan Raju</span>
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <NavLink
              to="/"
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Chat</span>
            </NavLink>
            
            <NavLink
              to="/about"
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </NavLink>

            <NavLink
              to="/projects"
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <FolderGit2 className="w-4 h-4" />
              <span className="hidden sm:inline">Projects</span>
            </NavLink>

            <a
              href="/resume.pdf"
              download="Vasanth_Geethan_Raju_Resume.pdf"
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
