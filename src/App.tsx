import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "@/components/header";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { toast } from "sonner";
import Index from "./pages/Index";
import Compete from "./pages/Compete";
import Generate from "./pages/Generate";
import Products from "./pages/Products";
import Rewards from "./pages/Rewards";
import Refer from "./pages/Refer";
import Coach from "./pages/Coach";
import Learning from "./pages/Learning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);
  const navigate = useNavigate();

  // User stats data
  const userStats = {
    points: 2340,
    projects: 8,
    contestsParticipated: 3
  };

  const handleLevelUpClick = () => {
    setShowLevelUpPopup(true);
  };

  const handleCloseLevelUp = () => {
    setShowLevelUpPopup(false);
    navigate("/learning");
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
      ctx.fillText('Level 3 GenAI Mastery Program', canvas.width / 2, 360);

      // Points and date
      ctx.font = '18px Arial';
      ctx.fillText(`Points Earned: ${userStats.points.toLocaleString()}`, canvas.width / 2, 420);
      ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, canvas.width / 2, 450);

      // Organization
      ctx.font = 'bold 20px Arial';
      ctx.fillText('NXT WAVE', canvas.width / 2, 520);

      // Download the certificate
      const link = document.createElement('a');
      link.download = 'genai-certificate.png';
      link.href = canvas.toDataURL();
      link.click();

      toast.success("Certificate generated and downloaded!");
      setShowLevelUpPopup(false);
    } catch (error) {
      console.error('Error generating certificate:', error);
      toast.error("Failed to generate certificate");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onLevelUpClick={handleLevelUpClick} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/compete" element={<Compete />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/learning" element={<Learning />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Level Up Popup - Now Global */}
      <Dialog open={showLevelUpPopup} onOpenChange={setShowLevelUpPopup}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              <Badge variant="default" className="text-xl px-6 py-3 bg-gradient-primary hover:opacity-90 transition-smooth shadow-lg">
                🎉 Level 5 🎉
              </Badge>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{userStats.points.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Points</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{userStats.projects}</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{userStats.contestsParticipated}</div>
                <div className="text-sm text-muted-foreground">Contests</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleGenerateCertificate}
                className="bg-gradient-primary hover:opacity-90 transition-smooth w-full"
              >
                <Award className="h-4 w-4 mr-2" />
                Generate Certificate
              </Button>
              <Button 
                onClick={handleCloseLevelUp}
                variant="outline"
                className="w-full"
              >
                Continue to Level Up
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
