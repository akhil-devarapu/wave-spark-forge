import { X, Award, Gift, Lightbulb, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItemsBatch1 = [
  {
    icon: Gift,
    label: "Check Rewards",
    description: "View earned rewards",
    to: "/rewards"
  }
];

const menuItemsBatch2 = [
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

  const handleGenerateCertificate = () => {
    try {
      // Create canvas for certificate
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        toast.error("Failed to create certificate");
        return;
      }

      // Set canvas size
      canvas.width = 800;
      canvas.height = 600;

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#4f46e5');
      gradient.addColorStop(1, '#7c3aed');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 8;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

      // Inner border
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

      // Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('CERTIFICATE OF ACHIEVEMENT', canvas.width / 2, 150);

      // Subtitle
      ctx.font = '24px Arial';
      ctx.fillText('in Generative AI', canvas.width / 2, 190);

      // User name
      ctx.font = 'bold 36px Arial';
      ctx.fillText('John Doe', canvas.width / 2, 280);

      // Achievement text
      ctx.font = '20px Arial';
      ctx.fillText('has successfully completed', canvas.width / 2, 320);

      // Level
      ctx.font = 'bold 32px Arial';
      ctx.fillText('Level 5 in GenAI', canvas.width / 2, 370);

      // Stats
      ctx.font = '18px Arial';
      ctx.fillText('2340 Points • 8 Projects • 3 Contests', canvas.width / 2, 420);

      // Date
      const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      ctx.fillText(date, canvas.width / 2, 480);

      // Download the certificate
      const link = document.createElement('a');
      link.download = 'GenAI-Certificate-Level-5.png';
      link.href = canvas.toDataURL('image/png');
      
      // Ensure the download works across browsers
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Certificate downloaded successfully!");
      onClose(); // Close the menu after successful download
    } catch (error) {
      toast.error("Failed to generate certificate");
      console.error("Certificate generation error:", error);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80">
        <SheetHeader className="pb-6">
          <SheetTitle className="text-left">About NxtWave</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-4">
          {/* Generate Certificate Button - Special handling */}
          <div>
            <Button
              variant="ghost"
              onClick={handleGenerateCertificate}
              className="w-full justify-start h-auto p-4 text-left hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">Generate Certificate</p>
                  <p className="text-sm text-muted-foreground">Download your achievements</p>
                </div>
              </div>
            </Button>
          </div>

          {/* Batch 1 - Rewards & Points */}
          <div className="space-y-2">
            {menuItemsBatch1.map((item) => (
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

          {/* Separator */}
          <div className="border-t border-muted my-4" />

          {/* Batch 2 - Learning & Inspiration */}
          <div className="space-y-2">
            {menuItemsBatch2.map((item) => (
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
        </div>
      </SheetContent>
    </Sheet>
  );
}