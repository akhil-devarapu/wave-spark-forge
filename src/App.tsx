import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import { useState } from "react";
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

const App = () => {
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);

  const handleLevelUpClick = () => {
    setShowLevelUpPopup(true);
  };

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header onLevelUpClick={handleLevelUpClick} />
          <Routes>
            <Route path="/" element={<Index showLevelUpPopup={showLevelUpPopup} setShowLevelUpPopup={setShowLevelUpPopup} />} />
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
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
