import { X, Award, Gift, Users, Lightbulb, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    icon: Award,
    label: "Generate Certificate",
    description: "Download your achievements",
    to: "/generate"
  },
  {
    icon: Gift,
    label: "Check Rewards",
    description: "View earned rewards",
    to: "/rewards"
  },
  {
    icon: Users,
    label: "Get Points",
    description: "Refer colleagues",
    to: "/refer"
  },
  {
    icon: Lightbulb,
    label: "Get Inspired",
    to: "/products",
    description: "Browse top products"
  },
  {
    icon: MessageCircle,
    label: "Ask Coach",
    description: "AI learning sessions",
    to: "/coach"
  },
  {
    icon: BookOpen,
    label: "Keep Learning",
    to: "/learning",
    description: "Courses and articles"
  }
];

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const navigate = useNavigate();
  
  const handleNavigation = (to: string) => {
    navigate(to);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80">
        <SheetHeader className="pb-6">
          <SheetTitle className="text-left">About NxtWave</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              <Button
                variant="ghost"
                onClick={() => handleNavigation(item.to)}
                className="w-full justify-start h-auto p-4 text-left hover:bg-muted/50 transition-smooth"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Button>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}