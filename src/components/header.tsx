import { Menu, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { SideMenu } from "./side-menu";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nxtWaveLogo from "@/assets/nxtwave-logo.png";

interface HeaderProps {
  onLevelUpClick?: () => void;
}

export function Header({ onLevelUpClick }: HeaderProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCompeteClick = () => {
    if (location.pathname === "/") {
      // If on index page, scroll to compete section
      document.getElementById('compete-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other pages, navigate to compete page
      navigate("/compete");
    }
  };

  return (
    <>
      <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center hover:opacity-80 transition-smooth">
                <img 
                  src={nxtWaveLogo} 
                  alt="NXT WAVE" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Center Action Buttons */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-3">
                <Button 
                  onClick={handleCompeteClick}
                  className="bg-gradient-accent hover:bg-gradient-accent/90 text-white font-medium hover:scale-105 hover:shadow-elegant transition-all duration-300 active:scale-95 ripple-effect hover-scale animate-fade-in"
                  size="sm"
                >
                  <Zap className="mr-2 h-4 w-4 animate-pulse" />
                  Compete
                </Button>
                
                <Button 
                  onClick={onLevelUpClick}
                  variant="outline"
                  className="bg-gradient-accent/10 hover:bg-gradient-accent hover:text-white font-medium hover:scale-105 hover:shadow-elegant transition-all duration-300 active:scale-95 border-2 border-accent/20 hover:border-accent ripple-effect hover-scale animate-fade-in"
                  size="sm"
                >
                  <TrendingUp className="mr-2 h-4 w-4 animate-pulse" />
                  Level Up
                </Button>
              </div>
            </div>

            {/* Right Side Controls */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSideMenuOpen(true)}
                className="btn-interactive hover:bg-muted hover:scale-110 transition-all duration-200 active:scale-95"
              >
                <Menu className="h-5 w-5 icon-pulse" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </>
  );
}