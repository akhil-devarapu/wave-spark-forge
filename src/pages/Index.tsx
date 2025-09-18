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

  const handleJoinContest = () => {
    if (!selectedCategory) return;
    setShowInstructions(true);
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
            
            <Link to="/generate">
              <Button 
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Level Up
              </Button>
            </Link>
          </div>
        </section>


        {/* Compete Section */}
        <section id="compete-section" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Join the Competition</h2>
          
          {/* Join Contest */}
          <Card className="max-w-5xl mx-auto shadow-medium">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                
                {/* Contest Info */}
                <div className="flex items-center space-x-4 bg-muted/50 rounded-lg p-4 flex-shrink-0">
                  <Trophy className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Next Contest</h3>
                    <p className="text-sm text-muted-foreground">Dec 15, 2024 - Jan 15, 2025</p>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="flex-1 min-w-0">
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

                {/* Join Button */}
                <Button 
                  onClick={handleJoinContest} 
                  disabled={!selectedCategory}
                  className="bg-gradient-primary hover:opacity-90 transition-smooth flex-shrink-0"
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

      </div>
    </div>
  );
};

export default Index;
