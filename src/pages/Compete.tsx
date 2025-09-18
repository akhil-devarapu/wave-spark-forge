import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, ArrowRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "automation",
  "fullstack product",
  "automation+ui"
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

export default function Compete() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showInstructions, setShowInstructions] = useState(false);

  const handleJoinContest = () => {
    if (!selectedCategory) return;
    setShowInstructions(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 space-y-16">
        
        {/* Compete Section */}
        <section className="space-y-12 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Join the Competition</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase your AI expertise and compete with the best minds in the community
            </p>
          </div>
          
          {/* Join Contest */}
          <Card className="w-full shadow-large max-w-6xl mx-auto rounded-2xl border-0">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                
                {/* Contest Details & Category - Full Left */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                  <div className="flex items-center space-x-6 bg-muted/30 rounded-xl p-6 flex-shrink-0">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Next Contest</h3>
                      <p className="text-muted-foreground">Dec 15, 2024 - Jan 15, 2025</p>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="w-full sm:w-80 lg:w-96">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full h-12 rounded-xl border-border">
                        <SelectValue placeholder="Choose your expertise area" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="rounded-lg">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Join Button - Right */}
                <div className="flex-shrink-0">
                  <Button 
                    onClick={handleJoinContest} 
                    disabled={!selectedCategory}
                    className="bg-primary hover:bg-primary/90 transition-smooth w-full sm:w-auto px-8 h-12 rounded-xl font-medium"
                  >
                    Join Contest
                  </Button>
                </div>
              </div>

              {showInstructions && (
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="font-semibold mb-4 text-lg">Contest Instructions</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Build an innovative AI solution in your chosen category</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Submit before the deadline with proper documentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Projects will be judged on innovation, impact, and technical excellence</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Winners receive points, certificates, and exclusive rewards</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full h-12 rounded-xl" size="sm">
                    Confirm Participation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Leaderboard</h2>
              <p className="text-lg text-muted-foreground">AI power users in leader board</p>
            </div>

            <Card className="shadow-large max-w-4xl mx-auto rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={user.name}
                      className={`flex items-center justify-between p-6 hover:bg-muted/20 transition-smooth ${
                        index < leaderboard.length - 1 ? 'border-b border-border/50' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-white font-bold">
                          {user.rank <= 3 ? (
                            user.rank === 1 ? <Trophy className="h-6 w-6" /> :
                            user.rank === 2 ? <Medal className="h-6 w-6" /> :
                            <Award className="h-6 w-6" />
                          ) : (
                            user.rank
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{user.name}</p>
                          <p className="text-muted-foreground">{user.projects} projects</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xl font-bold px-4 py-2 rounded-xl">
                        {user.score.toLocaleString()}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Products */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Top Products</h2>
                <p className="text-lg text-muted-foreground">Outstanding AI solutions from our community</p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth h-12 px-6 rounded-xl">
                  See More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {topProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-glow transition-smooth cursor-pointer rounded-2xl border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <div className="text-6xl">{product.image}</div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-lg mb-2">{product.title}</h4>
                        <Badge variant="secondary" className="mb-3 rounded-lg">{product.category}</Badge>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
                        <p className="text-sm text-muted-foreground font-medium">by {product.author}</p>
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
}