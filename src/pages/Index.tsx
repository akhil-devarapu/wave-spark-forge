import { Button } from "@/components/ui/button";
import { Zap, Trophy, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Gen AI Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build the Future with{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Gen AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join NxtWave's AI adoption program. Compete with peers, level up your skills, 
              and create innovative AI products that shape tomorrow.
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/compete">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow px-8 py-6 text-lg font-semibold h-auto"
              >
                <Trophy className="mr-3 h-6 w-6" />
                Compete
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/generate">
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth border-2 px-8 py-6 text-lg font-semibold h-auto"
              >
                <TrendingUp className="mr-3 h-6 w-6" />
                Level Up
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-card/50 transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Compete & Win</h3>
              <p className="text-muted-foreground">
                Join contests, showcase your AI skills, and climb the leaderboard
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-card/50 transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Level Up</h3>
              <p className="text-muted-foreground">
                Upload projects, earn points, and advance through skill levels
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-card/50 transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Get Inspired</h3>
              <p className="text-muted-foreground">
                Explore innovative AI products built by the community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
