import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, ExternalLink, Star, Users } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const allProducts = [
  {
    id: 1,
    title: "AI Customer Support Bot",
    category: "Natural Language Processing",
    department: "Customer Service",
    author: "Sarah Chen",
    description: "Intelligent chatbot that handles 90% of customer queries with natural language understanding",
    image: "🤖",
    rating: 4.8,
    users: 1200
  },
  {
    id: 2,
    title: "Smart Document Analyzer",
    category: "Computer Vision",
    department: "Operations",
    author: "Alex Rodriguez",
    description: "Automatically extracts and categorizes document content using advanced OCR and ML",
    image: "📄",
    rating: 4.6,
    users: 850
  },
  {
    id: 3,
    title: "Predictive Sales Analytics",
    category: "Data Science",
    department: "Sales",
    author: "Jamie Kim",
    description: "ML model that predicts sales trends with 95% accuracy using historical data",
    image: "📊",
    rating: 4.9,
    users: 2100
  },
  {
    id: 4,
    title: "Code Review Assistant",
    category: "Machine Learning",
    department: "Engineering",
    author: "Morgan Davis",
    description: "AI-powered tool that reviews code quality and suggests improvements",
    image: "💻",
    rating: 4.7,
    users: 950
  },
  {
    id: 5,
    title: "Meeting Insights Engine",
    category: "Natural Language Processing",
    department: "HR",
    author: "Taylor Swift",
    description: "Analyzes meeting transcripts to extract key insights and action items",
    image: "🎯",
    rating: 4.5,
    users: 680
  },
  {
    id: 6,
    title: "Fraud Detection System",
    category: "Machine Learning",
    department: "Finance",
    author: "Jordan Lee",
    description: "Real-time fraud detection using advanced anomaly detection algorithms",
    image: "🛡️",
    rating: 4.8,
    users: 1500
  },
  {
    id: 7,
    title: "Smart Inventory Optimizer",
    category: "Data Science",
    department: "Supply Chain",
    author: "Casey Brown",
    description: "Optimizes inventory levels using demand forecasting and supply chain analytics",
    image: "📦",
    rating: 4.4,
    users: 780
  },
  {
    id: 8,
    title: "Employee Sentiment Analyzer",
    category: "Natural Language Processing",
    department: "HR",
    author: "Riley Johnson",
    description: "Analyzes employee feedback to gauge sentiment and identify improvement areas",
    image: "😊",
    rating: 4.6,
    users: 920
  }
];

const categories = [...new Set(allProducts.map(p => p.category))];
const departments = [...new Set(allProducts.map(p => p.department))];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "all-categories" || product.category === selectedCategory;
    const matchesDepartment = !selectedDepartment || selectedDepartment === "all-departments" || product.department === selectedDepartment;
    
    return matchesSearch && matchesCategory && matchesDepartment;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedDepartment("");
  };

  return (
    <AuroraBackground className="min-h-screen">
      <div className="container mx-auto px-6 py-8 space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">AI Product Showcase</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover innovative AI solutions built by our talented community
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-medium">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products, authors, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-departments">All Departments</SelectItem>
                    {departments.map((department) => (
                      <SelectItem key={department} value={department}>
                        {department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {(searchTerm || selectedCategory || selectedDepartment) && (
                  <Button variant="outline" onClick={clearFilters} size="sm">
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-glow transition-smooth cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{product.image}</div>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {product.title}
                </CardTitle>
                <CardDescription>by {product.author} • {product.department}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{product.users}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </AuroraBackground>
  );
}