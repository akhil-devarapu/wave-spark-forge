import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Upload, CheckCircle, Clock, Star, Trophy, TrendingUp, ArrowRight, Calendar, Medal } from "lucide-react";
import { Link } from "react-router-dom";

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
  const [showCertificateBanner, setShowCertificateBanner] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  
  // Mock user data
  const userData = {
    level: 5,
    currentPoints: 2340,
    nextLevelPoints: 3000,
    totalProjects: 8,
    contestsParticipated: 3,
    projectsSubmitted: 8,
    projectsApproved: 6,
    projectsInProcess: 2
  };

  const progressPercentage = (userData.currentPoints / userData.nextLevelPoints) * 100;

  const handleJoinContest = () => {
    if (!selectedCategory) return;
    setShowInstructions(true);
  };

  const handleGenerateCertificate = () => {
    setShowCertificateBanner(true);
  };

  const handleLevelUp = () => {
    setShowUploadForm(true);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowUploadForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-12">
        
        {/* Main Action Buttons */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-8">
            Build the Future with{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Gen AI
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => document.getElementById('compete-section')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow px-8 py-6 text-lg font-semibold h-auto"
            >
              Compete
            </Button>
            
            <Button 
              onClick={() => document.getElementById('levelup-section')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth border-2 px-8 py-6 text-lg font-semibold h-auto"
            >
              Level Up
            </Button>
          </div>
        </section>

        {/* Certificate Banner */}
        {showCertificateBanner && (
          <Card className="border-primary/20 bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Generate Certificate</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Star className="h-5 w-5" />
                        <span className="text-lg font-bold">Level {userData.level}</span>
                      </div>
                      <p className="text-sm opacity-90">Current Level</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Upload className="h-5 w-5" />
                        <span className="text-lg font-bold">{userData.totalProjects}</span>
                      </div>
                      <p className="text-sm opacity-90">Projects Built</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Trophy className="h-5 w-5" />
                        <span className="text-lg font-bold">{userData.contestsParticipated}</span>
                      </div>
                      <p className="text-sm opacity-90">Contests Joined</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      Generate Certificate
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowCertificateBanner(false)}
                      className="text-white hover:bg-white/10"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Compete Section */}
        <section id="compete-section" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Join the Competition</h2>
          
          {/* Join Contest */}
          <Card className="max-w-2xl mx-auto shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Next Contest</span>
              </CardTitle>
              <CardDescription>Choose your category and join the competition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Contest Date</p>
                  <p className="text-sm text-muted-foreground">December 15, 2024 - January 15, 2025</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Select Category</label>
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

              <Button 
                onClick={handleJoinContest} 
                disabled={!selectedCategory}
                className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
              >
                Join Contest
              </Button>

              {showInstructions && (
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
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

        {/* Level Up Section */}
        <section id="levelup-section" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Level Up Your Skills</h2>
          
          {/* Project Snapshot */}
          <Card className="max-w-4xl mx-auto shadow-medium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your Progress</CardTitle>
              <CardDescription>Track your journey to becoming an AI expert</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Current Level & Points */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-hero text-white px-6 py-3 rounded-full">
                  <Star className="h-6 w-6" />
                  <span className="text-xl font-bold">Level {userData.level}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{userData.currentPoints} points</span>
                    <span>{userData.nextLevelPoints} points (Next Level)</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    {userData.nextLevelPoints - userData.currentPoints} points to go!
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={handleGenerateCertificate}
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Generate Certificate
                </Button>
                <Button 
                  onClick={handleLevelUp}
                  className="bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  Upload Project
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Submission Progress</h3>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{userData.projectsSubmitted}</h4>
                  <p className="text-muted-foreground">Projects Submitted</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{userData.projectsApproved}</h4>
                  <p className="text-muted-foreground">Projects Approved</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mx-auto mb-4">
                    <Clock className="h-8 w-8 text-amber-500" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{userData.projectsInProcess}</h4>
                  <p className="text-muted-foreground">In Review</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upload Form Dialog */}
        <Dialog open={showUploadForm} onOpenChange={setShowUploadForm}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Project</DialogTitle>
              <DialogDescription>
                Share your AI project to earn points and level up
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleProjectSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Project Title</label>
                <Input placeholder="Enter your project title" className="mt-1" />
              </div>
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea 
                  placeholder="Describe your AI project..." 
                  className="mt-1 min-h-20"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Project Link</label>
                <Input placeholder="https://github.com/..." className="mt-1" />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90">
                  Submit Project
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Index;
