import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, Zap, Brain, Newspaper, Globe, Mail, BookOpen, Rss } from "lucide-react";

const aiNewsResources = [
  {
    id: 1,
    name: "The Rundown AI",
    description: "Daily newsletter delivering the most important AI news and updates in a digestible format",
    category: "Newsletter",
    icon: <Mail className="h-6 w-6" />,
    link: "https://www.therundown.ai",
    features: ["Daily AI news", "Tool spotlights", "Industry insights", "Free newsletter"],
    frequency: "Daily",
    badge: "Popular"
  },
  {
    id: 2,
    name: "AI News",
    description: "Comprehensive AI news platform covering breakthroughs, research, and industry developments",
    category: "News Site",
    icon: <Newspaper className="h-6 w-6" />,
    link: "https://artificialintelligence-news.com",
    features: ["Breaking news", "Research papers", "Industry analysis", "Expert opinions"],
    frequency: "Daily",
    badge: "Latest"
  },
  {
    id: 3,
    name: "MIT Technology Review AI",
    description: "In-depth coverage of AI developments from MIT's prestigious technology publication",
    category: "Research News",
    icon: <BookOpen className="h-6 w-6" />,
    link: "https://www.technologyreview.com/topic/artificial-intelligence/",
    features: ["Research insights", "Expert analysis", "Future predictions", "Policy discussions"],
    frequency: "Weekly",
    badge: "Research"
  },
  {
    id: 4,
    name: "VentureBeat AI",
    description: "Business and technology news focusing on AI innovations and enterprise applications",
    category: "Business News",
    icon: <Globe className="h-6 w-6" />,
    link: "https://venturebeat.com/ai/",
    features: ["Business impact", "Startup news", "Enterprise AI", "Investment updates"],
    frequency: "Daily",
    badge: "Business"
  },
  {
    id: 5,
    name: "OpenAI Blog",
    description: "Official updates and research announcements from OpenAI team",
    category: "Official Blog",
    icon: <Brain className="h-6 w-6" />,
    link: "https://openai.com/blog/",
    features: ["Official updates", "Research papers", "Product releases", "Safety research"],
    frequency: "Weekly",
    badge: "Official"
  },
  {
    id: 6,
    name: "Anthropic News",
    description: "Updates and research insights from Anthropic, makers of Claude AI",
    category: "Official Blog",
    icon: <Brain className="h-6 w-6" />,
    link: "https://www.anthropic.com/news",
    features: ["Claude updates", "Safety research", "AI alignment", "Technical papers"],
    frequency: "Monthly",
    badge: "Official"
  },
  {
    id: 7,
    name: "AI Breakfast",
    description: "Weekly newsletter covering AI news, tools, and trends for professionals",
    category: "Newsletter",
    icon: <Mail className="h-6 w-6" />,
    link: "https://aibreakfast.beehiiv.com",
    features: ["Weekly digest", "Tool reviews", "Industry trends", "Professional insights"],
    frequency: "Weekly",
    badge: "Professional"
  },
  {
    id: 8,
    name: "Papers With Code",
    description: "Platform tracking AI research papers with code implementations and benchmarks",
    category: "Research Platform",
    icon: <Rss className="h-6 w-6" />,
    link: "https://paperswithcode.com",
    features: ["Research papers", "Code repositories", "Benchmarks", "Trending research"],
    frequency: "Daily",
    badge: "Academic"
  }
];

const getBadgeVariant = (badge: string) => {
  switch (badge) {
    case "Latest": return "default";
    case "Popular": return "secondary";
    case "Research": return "outline";
    case "Business": return "destructive";
    case "Official": return "default";
    case "Professional": return "secondary";
    case "Academic": return "outline";
    default: return "secondary";
  }
};

export default function Learning() {
  const openResource = (link: string, name: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">AI News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the best sources for AI advancements, research, and industry updates
          </p>
        </div>

        {/* AI News Resources Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {aiNewsResources.map((resource) => (
            <Card 
              key={resource.id} 
              className="card-interactive hover:shadow-medium border hover:border-primary/50 animate-fade-in"
              onClick={() => openResource(resource.link, resource.name)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary icon-bounce">
                      {resource.icon}
                    </div>
                    <div>
                      <Badge variant={getBadgeVariant(resource.badge)} className="badge-glow">
                        {resource.badge}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground icon-pulse" />
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors duration-200">
                  {resource.name}
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="outline" className="badge-glow">{resource.category}</Badge>
                  <span className="text-muted-foreground">{resource.frequency}</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">What You Get:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {resource.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openResource(resource.link, resource.name);
                  }}
                  className="w-full mt-4 btn-interactive"
                  variant="outline"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit {resource.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="shadow-medium card-interactive">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary icon-bounce" />
              <span>Stay Updated</span>
            </CardTitle>
            <CardDescription>
              The AI landscape is evolving rapidly. Here are some resources to stay informed about the latest developments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 btn-interactive"
                onClick={() => window.open('https://twitter.com/OpenAI', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">OpenAI Updates</div>
                  <div className="text-sm text-muted-foreground">Latest from OpenAI</div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 btn-interactive"
                onClick={() => window.open('https://www.anthropic.com/news', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Anthropic News</div>
                  <div className="text-sm text-muted-foreground">Claude developments</div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 btn-interactive"
                onClick={() => window.open('https://airesearch.com', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">AI Research</div>
                  <div className="text-sm text-muted-foreground">Latest papers & trends</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}