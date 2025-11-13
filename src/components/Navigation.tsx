import { NavLink } from "./NavLink";
import { MessageSquare, User, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Failed to log out");
    } else {
      toast.success("Logged out successfully");
      navigate("/auth");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">VG</span>
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

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
