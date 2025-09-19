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
      <div className="container mx-auto px-6 py-8 space-y-12">
        
        {/* Compete Section */}
        <section className="space-y-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Join the Competition</h2>
          
          {/* Join Contest */}
          <Card className="w-full max-w-6xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                
                {/* Contest Details & Category - Full Left */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                  <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 flex-shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">Contest</h3>
                      <p className="text-base text-gray-700 dark:text-gray-300">Dec 15, 2024 - Jan 15, 2025</p>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="w-full sm:w-80 lg:w-96">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full rounded-2xl border hover:border-primary transition-all ease-in-out duration-200">
                        <SelectValue placeholder="Choose category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="rounded-xl">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Slots Available */}
                  <div className="flex items-center space-x-2 bg-primary/10 rounded-2xl p-3 border border-primary/20 hover:bg-primary/20 transition-all ease-in-out duration-200">
                    <Users className="h-5 w-5 text-primary" />
                    <div className="text-center">
                      <p className="text-base font-semibold text-primary">247</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">slots left</p>
                    </div>
                  </div>
                </div>

                {/* Join Button - Right */}
                <div className="flex-shrink-0">
                  <Button 
                    onClick={handleJoinContest} 
                    disabled={!selectedCategory}
                    size="lg"
                    className="w-full sm:w-auto px-8"
                  >
                    Join Contest
                  </Button>
                </div>
              </div>

              {showInstructions && (
                <div className="mt-6 p-6 bg-primary/10 rounded-2xl border border-primary/20 animate-scale-in">
                  <h4 className="text-lg font-medium mb-4">Contest Instructions</h4>
                  <ul className="text-base space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Build an innovative AI solution in your chosen category</li>
                    <li>• Submit before the deadline with proper documentation</li>
                    <li>• Projects will be judged on innovation, impact, and technical excellence</li>
                    <li>• Winners receive points, certificates, and exclusive rewards</li>
                  </ul>
                  <Button className="mt-4 w-full" size="lg">
                    Confirm Participation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold">Leaderboard</h3>
              <p className="text-base text-gray-700 dark:text-gray-300">AI power users in leader board</p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={user.name}
                      className={`flex items-center justify-between p-6 transition-all ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                        index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-900'
                      } ${index < leaderboard.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''} ${
                        index === 0 ? 'rounded-t-2xl' : ''
                      } ${index === leaderboard.length - 1 ? 'rounded-b-2xl' : ''}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                          {user.rank <= 3 ? (
                            user.rank === 1 ? <Trophy className="h-5 w-5" /> :
                            user.rank === 2 ? <Medal className="h-5 w-5" /> :
                            <Award className="h-5 w-5" />
                          ) : (
                            user.rank
                          )}
                        </div>
                        <div>
                          <p className="text-lg font-medium">{user.name}</p>
                          <p className="text-base text-gray-700 dark:text-gray-300">{user.projects} projects</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold px-4 py-2 rounded-2xl">
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
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Top Products</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Outstanding AI solutions from our community</p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="transition-all ease-in-out duration-200">
                  See More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {topProducts.map((product) => (
                <Card key={product.id} className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="text-4xl mb-4">{product.image}</div>
                      <div className="space-y-3">
                        <h4 className="text-lg font-medium">{product.title}</h4>
                        <Badge variant="secondary" className="rounded-2xl">{product.category}</Badge>
                        <p className="text-base text-gray-700 dark:text-gray-300">{product.description}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">by {product.author}</p>
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