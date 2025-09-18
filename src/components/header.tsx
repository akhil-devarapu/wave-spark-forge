import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { SideMenu } from "./side-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import nxtWaveLogo from "@/assets/nxtwave-logo.png";

export function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-smooth">
            <img 
              src={nxtWaveLogo} 
              alt="NXT WAVE" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSideMenuOpen(true)}
              className="hover:bg-muted transition-smooth"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </>
  );
}