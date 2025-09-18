import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, Zap, Brain, Code, Image, Music, Video, MessageSquare } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const aiTools = [
  {
    id: 1,
    name: "ChatGPT-4o",
    description: "OpenAI's latest multimodal AI model with advanced reasoning and conversation capabilities",
    category: "Language Model",
    icon: <MessageSquare className="h-6 w-6" />,
    link: "https://chat.openai.com",
    features: ["Multimodal inputs", "Advanced reasoning", "Code generation", "Real-time web browsing"],
    releaseDate: "2024",
    badge: "Latest"
  },
  {
    id: 2,
    name: "Claude 3.5 Sonnet",
    description: "Anthropic's most capable AI assistant with enhanced coding and analysis abilities",
    category: "AI Assistant",
    icon: <Brain className="h-6 w-6" />,
    link: "https://claude.ai",
    features: ["Long context", "Coding expertise", "Document analysis", "Creative writing"],
    releaseDate: "2024",
    badge: "Popular"
  },
  {
    id: 3,
    name: "DALL-E 3",
    description: "Advanced AI image generation with improved accuracy and creative capabilities",
    category: "Image Generation",
    icon: <Image className="h-6 w-6" />,
    link: "https://openai.com/dall-e-3",
    features: ["High-quality images", "Text integration", "Style consistency", "Creative freedom"],
    releaseDate: "2024",
    badge: "Creative"
  },
  {
    id: 4,
    name: "GitHub Copilot",
    description: "AI-powered code completion and generation tool integrated with your IDE",
    category: "Code Assistant",
    icon: <Code className="h-6 w-6" />,
    link: "https://github.com/features/copilot",
    features: ["Real-time coding", "Multi-language support", "Context awareness", "Code explanation"],
    releaseDate: "2024",
    badge: "Developer"
  },
  {
    id: 5,
    name: "Midjourney V6",
    description: "State-of-the-art AI art generator with photorealistic and artistic capabilities",
    category: "Art Generation",
    icon: <Sparkles className="h-6 w-6" />,
    link: "https://midjourney.com",
    features: ["Photorealistic art", "Style variations", "High resolution", "Advanced prompting"],
    releaseDate: "2024",
    badge: "Artistic"
  },
  {
    id: 6,
    name: "Suno AI",
    description: "AI music generator that creates songs from text prompts with vocals and instruments",
    category: "Music Generation",
    icon: <Music className="h-6 w-6" />,
    link: "https://suno.ai",
    features: ["Full song creation", "Custom lyrics", "Multiple genres", "High-quality audio"],
    releaseDate: "2024",
    badge: "Music"
  },
  {
    id: 7,
    name: "RunwayML Gen-3",
    description: "Advanced AI video generation platform for creating professional video content",
    category: "Video Generation",
    icon: <Video className="h-6 w-6" />,
    link: "https://runwayml.com",
    features: ["Video generation", "Motion control", "Style transfer", "AI editing"],
    releaseDate: "2024",
    badge: "Video"
  },
  {
    id: 8,
    name: "Perplexity AI",
    description: "AI-powered search engine that provides real-time information with source citations",
    category: "Search & Research",
    icon: <Zap className="h-6 w-6" />,
    link: "https://perplexity.ai",
    features: ["Real-time search", "Source citations", "Follow-up questions", "Academic research"],
    releaseDate: "2024",
    badge: "Research"
  }
];

const getBadgeVariant = (badge: string) => {
  switch (badge) {
    case "Latest": return "default";
    case "Popular": return "secondary";
    case "Creative": return "outline";
    case "Developer": return "destructive";
    case "Artistic": return "default";
    case "Music": return "secondary";
    case "Video": return "outline";
    case "Research": return "destructive";
    default: return "secondary";
  }
};

export default function Learning() {
  const openTool = (link: string, name: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <AuroraBackground className="min-h-screen">
      <div className="container mx-auto px-6 py-8 space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Recent AI Tool Advancements</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest AI tools and technologies that are shaping the future
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <Card 
              key={tool.id} 
              className="hover:shadow-medium transition-smooth cursor-pointer border hover:border-primary/50"
              onClick={() => openTool(tool.link, tool.name)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {tool.icon}
                    </div>
                    <div>
                      <Badge variant={getBadgeVariant(tool.badge)}>
                        {tool.badge}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl hover:text-primary transition-smooth">
                  {tool.name}
                </CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="outline">{tool.category}</Badge>
                  <span className="text-muted-foreground">Released {tool.releaseDate}</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openTool(tool.link, tool.name);
                  }}
                  className="w-full mt-4"
                  variant="outline"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Try {tool.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
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
                className="justify-start h-auto p-4"
                onClick={() => window.open('https://twitter.com/OpenAI', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">OpenAI Updates</div>
                  <div className="text-sm text-muted-foreground">Latest from OpenAI</div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4"
                onClick={() => window.open('https://www.anthropic.com/news', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Anthropic News</div>
                  <div className="text-sm text-muted-foreground">Claude developments</div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4"
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
    </AuroraBackground>
  );
}