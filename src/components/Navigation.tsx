import { NavLink } from "./NavLink";
import { MessageSquare, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/vg-logo.png" alt="Vasanth Geethan Raju Logo" className="w-8 h-8 rounded-lg object-cover" />
            </div>
            <span className="text-lg font-semibold text-foreground">Vasanth's Assistant</span>
          </div>

          <div className="flex items-center space-x-1">
            <NavLink
              to="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat</span>
            </NavLink>
            
            <NavLink
              to="/about"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              activeClassName="bg-secondary text-foreground font-medium"
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
