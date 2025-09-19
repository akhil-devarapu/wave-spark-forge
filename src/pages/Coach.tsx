import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const learningResources = [
  {
    title: "Prompting",
    description: "3A principle, fundamentals, techniques",
    url: "https://notebooklm.google.com/notebook/b2b5b8cf-45ca-4c79-8f27-ac75864c5f77"
  },
  {
    title: "AI Features discussed in GenAI workshop",
    description: "Workshop insights and AI feature implementations",
    url: "https://notebooklm.google.com/notebook/82a9937d-58d9-4125-85bd-49f35141ee88"
  },
  {
    title: "CustomGPT",
    description: "Building custom GPT applications",
    url: "https://notebooklm.google.com/notebook/9438cdb6-e575-45f1-932a-064467067da8"
  },
  {
    title: "Lovable",
    description: "AI-powered development platform",
    url: null
  },
  {
    title: "Replit",
    description: "Cloud-based coding environment",
    url: null
  },
  {
    title: "n8n",
    description: "Workflow automation and integration platform",
    url: "https://notebooklm.google.com/notebook/4378b01c-0762-4bf6-83bf-9ec152ac0384"
  },
  {
    title: "Create Action + n8n",
    description: "Building automated actions with n8n",
    url: "https://notebooklm.google.com/notebook/dec9b6b9-3b56-4c4f-997b-375db0ab7a3b"
  },
  {
    title: "Replit + n8n (AI resume evaluator)",
    description: "AI-powered resume evaluation system",
    url: "https://notebooklm.google.com/notebook/6b619b75-2120-4520-808a-86a312192faf"
  },
  {
    title: "VAPI",
    description: "Voice AI API integration",
    url: "https://notebooklm.google.com/notebook/9d3e775c-54c6-4242-a038-52df3e9b2267"
  },
  {
    title: "Memory Agents",
    description: "AI agents with persistent memory capabilities",
    url: "https://notebooklm.google.com/notebook/711187bf-7955-41fb-8fdf-fc5d3f2dc1e5"
  },
  {
    title: "MCP's",
    description: "Model Context Protocol implementations",
    url: "https://notebooklm.google.com/notebook/21445737-7240-4b64-946d-f88459314201"
  },
  {
    title: "CrewAI",
    description: "Multi-agent AI crew orchestration",
    url: "https://notebooklm.google.com/notebook/11cea553-1e98-4f6c-a26e-067699679c79"
  },
  {
    title: "Image/Video Generation",
    description: "AI-powered content generation tools",
    url: null
  }
];

export default function Coach() {
  const handleOpenNotebook = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Ask Coach – Learn & Explore GenAI</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Here are curated resources to guide you on Generative AI, tools, and advanced workflows. Click on any topic to explore in detail.
          </p>
        </div>

        {/* Learning Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningResources.map((resource, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold line-clamp-2">
                  {resource.title}
                </CardTitle>
                {resource.description && (
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {resource.description}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
                {resource.url ? (
                  <Button 
                    onClick={() => handleOpenNotebook(resource.url)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Notebook
                  </Button>
                ) : (
                  <Button 
                    disabled 
                    className="w-full bg-gray-400 text-gray-600 cursor-not-allowed"
                  >
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}