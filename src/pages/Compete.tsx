import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, ArrowRight, Calendar, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
const categories = ["automation", "fullstack product", "automation+ui"];
const leaderboard = [{
  name: "Sarah Chen",
  score: 2840,
  projects: 12,
  rank: 1,
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=150&h=150&fit=crop&crop=face",
  level: "AI Expert",
  status: "online"
}, {
  name: "Alex Rodriguez",
  score: 2650,
  projects: 10,
  rank: 2,
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  level: "ML Master",
  status: "online"
}, {
  name: "Jamie Kim",
  score: 2480,
  projects: 9,
  rank: 3,
  avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  level: "Data Wizard",
  status: "away"
}, {
  name: "Morgan Davis",
  score: 2320,
  projects: 8,
  rank: 4,
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  level: "Tech Lead",
  status: "online"
}, {
  name: "Taylor Swift",
  score: 2180,
  projects: 7,
  rank: 5,
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  level: "Innovator",
  status: "offline"
}];
const topProducts = [{
  id: 1,
  title: "AI Customer Support Bot",
  category: "NLP",
  author: "Sarah Chen",
  description: "Intelligent chatbot that handles 90% of customer queries",
  image: "🤖"
}, {
  id: 2,
  title: "Smart Document Analyzer",
  category: "Computer Vision",
  author: "Alex Rodriguez",
  description: "Automatically extracts and categorizes document content",
  image: "📄"
}, {
  id: 3,
  title: "Predictive Sales Analytics",
  category: "Data Science",
  author: "Jamie Kim",
  description: "ML model that predicts sales trends with 95% accuracy",
  image: "📊"
}];
export default function Compete() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [selectedUser, setSelectedUser] = useState<null | typeof leaderboard[0]>(null);
  const handleJoinContest = () => {
    if (!selectedCategory) return;
    setShowInstructions(true);
  };

  const handleAvatarClick = (user: typeof leaderboard[0]) => {
    setSelectedUser(selectedUser?.name === user.name ? null : user);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };
  return <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-12">
        
        {/* Compete Section */}
        <section className="space-y-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Join the Competition</h2>
          
          {/* Join Contest */}
          <Card className="w-full shadow-medium max-w-6xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                
                {/* Contest Details & Category - Full Left */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                  <div className="flex items-center space-x-4 bg-muted/50 rounded-lg p-4 flex-shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Contest</h3>
                      <p className="text-sm text-muted-foreground">Dec 15, 2024 - Jan 15, 2025</p>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="w-full sm:w-80 lg:w-96">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Slots Available */}
                  <div className="flex items-center space-x-2 bg-gradient-primary/10 rounded-lg p-3 border border-primary/20 hover:bg-gradient-primary/20 transition-all duration-300 animate-fade-in hover-scale">
                    <Users className="h-5 w-5 text-primary animate-pulse" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-primary">247</p>
                      <p className="text-xs text-muted-foreground">slots left</p>
                    </div>
                  </div>
                </div>

                {/* Join Button - Right */}
                <div className="flex-shrink-0">
                  <Button onClick={handleJoinContest} disabled={!selectedCategory} className="bg-gradient-primary hover:opacity-90 transition-smooth w-full sm:w-auto px-8">
                    Join Contest
                  </Button>
                </div>
              </div>

              {showInstructions && <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
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
                </div>}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Leaderboard</h3>
              <p className="text-muted-foreground">AI power users </p>
            </div>

            <Card className="shadow-medium max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {leaderboard.map((user, index) => (
                    <div key={user.name}>
                      <div className={`flex items-center justify-between p-6 hover:bg-muted/30 transition-smooth ${index < leaderboard.length - 1 ? 'border-b' : ''} ${selectedUser?.name === user.name ? 'bg-muted/50' : ''}`}>
                        <div className="flex items-center space-x-4">
                          {/* Rank Badge */}
                          <div className="relative">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary text-white font-bold text-sm">
                              {user.rank <= 3 ? (
                                user.rank === 1 ? <Trophy className="h-4 w-4" /> : 
                                user.rank === 2 ? <Medal className="h-4 w-4" /> : 
                                <Award className="h-4 w-4" />
                              ) : user.rank}
                            </div>
                          </div>

                          {/* Avatar */}
                          <div className="relative group">
                            <Avatar 
                              className="w-12 h-12 border-2 border-primary/20 transition-all duration-300"
                            >
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {/* Status Indicator */}
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(user.status)}`}></div>
                            {/* Hover Effect */}
                            <div className="absolute -inset-1 bg-gradient-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          </div>

                          {/* User Info */}
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="font-medium">{user.name}</p>
                              {user.rank <= 3 && <Star className="h-4 w-4 text-yellow-500" />}
                            </div>
                            <p className="text-sm text-muted-foreground">{user.projects} projects • {user.level}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                            {user.score.toLocaleString()}
                          </Badge>
                        </div>
                      </div>

                      {/* Expanded User Details */}
                      {selectedUser?.name === user.name && (
                        <div className="px-6 pb-4 bg-muted/20 border-b animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-primary">{user.projects}</p>
                              <p className="text-sm text-muted-foreground">Projects</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-primary">{Math.floor(user.score / user.projects)}</p>
                              <p className="text-sm text-muted-foreground">Avg Score</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-primary capitalize">{user.status}</p>
                              <p className="text-sm text-muted-foreground">Status</p>
                            </div>
                          </div>
                          <div className="flex justify-center mt-4 space-x-2">
                            <Button size="sm" variant="outline">View Profile</Button>
                          </div>
                        </div>
                      )}
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
                <h3 className="text-2xl font-bold mb-2">Builds of the Month</h3>
                <p className="text-muted-foreground">Outstanding AI products across our company</p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                  See More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {topProducts.map(product => <Card key={product.id} className="hover:shadow-glow transition-smooth cursor-pointer">
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
                </Card>)}
            </div>
          </div>
        </section>
      </div>
    </div>;
}