import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Upload, CheckCircle, Clock, Star, Trophy, TrendingUp, ArrowRight, Calendar, Medal, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Data
const categories = [
  "Machine Learning",
  "Natural Language Processing", 
  "Computer Vision",
  "Robotics",
  "Data Science"
];

const leaderboard = [
  { name: "Sarah Chen", score: 2840, projects: 12, rank: 1 },
  { name: "Alex Rodriguez", score: 2650, projects: 10, rank: 2 },
  { name: "Jamie Kim", score: 2480, projects: 9, rank: 3 },
  { name: "Morgan Davis", score: 2320, projects: 8, rank: 4 },
  { name: "Taylor Swift", score: 2180, projects: 7, rank: 5 }
];

const topProducts = [
  {
    id: 1,
    title: "AI Customer Support Bot",
    category: "NLP",
    author: "Sarah Chen",
    description: "Intelligent chatbot that handles 90% of customer queries",
    image: "🤖"
  },
  {
    id: 2,
    title: "Smart Document Analyzer",
    category: "Computer Vision",
    author: "Alex Rodriguez", 
    description: "Automatically extracts and categorizes document content",
    image: "📄"
  },
  {
    id: 3,
    title: "Predictive Sales Analytics",
    category: "Data Science",
    author: "Jamie Kim",
    description: "ML model that predicts sales trends with 95% accuracy",
    image: "📊"
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);
  const navigate = useNavigate();

  // User stats data
  const userStats = {
    points: 2340,
    projects: 8,
    contestsParticipated: 3
  };

  const handleJoinContest = () => {
    if (!selectedCategory) return;
    setShowInstructions(true);
  };

  const handleLevelUpClick = () => {
    setShowLevelUpPopup(true);
  };

  const handleCloseLevelUp = () => {
    setShowLevelUpPopup(false);
    navigate("/generate");
  };

  const handleGenerateCertificate = () => {
    // Create canvas for certificate
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
    const level = Math.floor(userStats.points / 500) + 1;
    ctx.font = 'bold 32px Arial';
    ctx.fillText(`Level ${level} in GenAI`, canvas.width / 2, 370);

    // Stats
    ctx.font = '18px Arial';
    ctx.fillText(`${userStats.points} Points • ${userStats.projects} Projects • ${userStats.contestsParticipated} Contests`, canvas.width / 2, 420);

    // Date
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    ctx.fillText(date, canvas.width / 2, 480);

    // Download the certificate
    const link = document.createElement('a');
    link.download = `GenAI-Certificate-Level-${level}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    console.log("Certificate downloaded!");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-12">
        
        {/* Main Action Buttons */}
        <section className="text-center py-8">          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => document.getElementById('compete-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              Compete
            </Button>
            
            <Button 
              onClick={handleLevelUpClick}
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Level Up
            </Button>
          </div>
        </section>


        {/* Compete Section */}
        <section id="compete-section" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Join the Competition</h2>
          
          {/* Join Contest */}
          <Card className="w-full shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between w-full gap-6">
                
                {/* Contest Details & Category - Full Left */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-4 bg-muted/50 rounded-lg p-4">
                    <Trophy className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Next Contest</h3>
                      <p className="text-sm text-muted-foreground">Dec 15, 2024 - Jan 15, 2025</p>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="min-w-60">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your expertise area" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Join Button - Full Right */}
                <Button 
                  onClick={handleJoinContest} 
                  disabled={!selectedCategory}
                  className="bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  Join Contest
                </Button>
              </div>

              {showInstructions && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-medium mb-2">Contest Instructions</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Build an innovative AI solution in your chosen category</li>
                    <li>• Submit before the deadline with proper documentation</li>
                    <li>• Projects will be judged on innovation, impact, and technical excellence</li>
                    <li>• Winners receive points, certificates, and exclusive rewards</li>
                  </ul>
                  <Button className="mt-3 w-full" size="sm">
                    Confirm Participation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Leaderboard</h3>
              <p className="text-muted-foreground">Top performers in our AI community</p>
            </div>

            <Card className="shadow-medium max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={user.name}
                      className={`flex items-center justify-between p-6 hover:bg-muted/30 transition-smooth ${
                        index < leaderboard.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary text-white font-bold">
                          {user.rank <= 3 ? (
                            user.rank === 1 ? <Trophy className="h-5 w-5" /> :
                            user.rank === 2 ? <Medal className="h-5 w-5" /> :
                            <Award className="h-5 w-5" />
                          ) : (
                            user.rank
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.projects} projects</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                        {user.score.toLocaleString()}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Products */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Top Products</h3>
                <p className="text-muted-foreground">Outstanding AI solutions from our community</p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                  See More
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {topProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-glow transition-smooth cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="text-4xl mb-4">{product.image}</div>
                      <div>
                        <h4 className="font-bold mb-2">{product.title}</h4>
                        <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                        <p className="text-xs text-muted-foreground">by {product.author}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Level Up Popup */}
        <Dialog open={showLevelUpPopup} onOpenChange={setShowLevelUpPopup}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                Your Progress
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLevelUpPopup(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
              <DialogDescription>
                View your achievements and generate your certificate
              </DialogDescription>
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
    </div>
  );
};

export default Index;
