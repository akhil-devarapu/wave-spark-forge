import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Send, Bot, User, BookOpen, Lightbulb, Target, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const chatHistory = [
  {
    id: 1,
    sender: "coach",
    message: "Hello! I'm your AI Coach. I'm here to help you learn and grow your AI skills. What would you like to explore today?",
    timestamp: "10:30 AM"
  },
  {
    id: 2, 
    sender: "user",
    message: "I'm interested in learning about machine learning fundamentals. Where should I start?",
    timestamp: "10:32 AM"
  },
  {
    id: 3,
    sender: "coach", 
    message: "Great choice! Let's start with the basics. Machine Learning is about teaching computers to learn patterns from data. I'd recommend starting with supervised learning - it's the most intuitive. Would you like me to create a personalized learning path for you?",
    timestamp: "10:33 AM"
  }
];

const quickTopics = [
  { title: "ML Basics", icon: "🤖", description: "Fundamentals of Machine Learning" },
  { title: "Python for AI", icon: "🐍", description: "Programming essentials for AI" },
  { title: "Data Science", icon: "📊", description: "Working with data and analytics" },
  { title: "Neural Networks", icon: "🧠", description: "Deep learning concepts" },
  { title: "Computer Vision", icon: "👁️", description: "Image processing and analysis" },
  { title: "NLP Basics", icon: "💬", description: "Natural Language Processing" }
];

const learningPaths = [
  {
    title: "Beginner's AI Journey",
    description: "Perfect for complete beginners",
    duration: "4 weeks",
    topics: ["Python Basics", "Data Handling", "First ML Model", "Project"],
    difficulty: "Beginner"
  },
  {
    title: "Data Science Track", 
    description: "Become a data science expert",
    duration: "8 weeks", 
    topics: ["Statistics", "Pandas", "Visualization", "ML Algorithms"],
    difficulty: "Intermediate"
  },
  {
    title: "Deep Learning Path",
    description: "Master neural networks and deep learning",
    duration: "12 weeks",
    topics: ["Neural Networks", "CNN", "RNN", "Transformers"],
    difficulty: "Advanced"
  }
];

export default function Coach() {
  const [messages, setMessages] = useState(chatHistory);
  const [newMessage, setNewMessage] = useState("");
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user" as const,
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate coach response
    setTimeout(() => {
      const coachResponse = {
        id: messages.length + 2,
        sender: "coach" as const,
        message: getCoachResponse(newMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, coachResponse]);
    }, 1000);

    setNewMessage("");
  };

  const getCoachResponse = (userMsg: string) => {
    const msg = userMsg.toLowerCase();
    if (msg.includes("python")) {
      return "Python is an excellent choice for AI! I recommend starting with NumPy and Pandas for data manipulation. Would you like me to suggest some hands-on exercises?";
    } else if (msg.includes("project")) {
      return "Projects are the best way to learn! How about we start with a simple image classifier or a sentiment analysis tool? What interests you more?";
    } else if (msg.includes("help") || msg.includes("stuck")) {
      return "I'm here to help! Can you tell me specifically what you're working on? The more details you provide, the better I can assist you.";
    } else {
      return "That's an interesting question! Let me think about the best way to approach this. Could you provide a bit more context about your current level and what you're trying to achieve?";
    }
  };

  const handleQuickTopic = (topic: string) => {
    const message = `Tell me about ${topic}`;
    setNewMessage(message);
  };

  const selectLearningPath = (path: string) => {
    setSelectedPath(path);
    toast.success(`🎯 ${path} learning path selected! I'll customize my guidance accordingly.`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">AI Coach</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal AI learning companion for guidance and support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Chat Messages */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Chat with AI Coach</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-96 overflow-y-auto space-y-4 p-4 bg-muted/20 rounded-lg">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id}
                      className={`flex items-start space-x-3 ${
                        msg.sender === "user" ? "justify-end" : ""
                      }`}
                    >
                      {msg.sender === "coach" && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary text-white">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div className={`max-w-[80%] ${
                        msg.sender === "user" ? "order-first" : ""
                      }`}>
                        <div className={`p-3 rounded-lg ${
                          msg.sender === "user" 
                            ? "bg-primary text-primary-foreground ml-auto" 
                            : "bg-background border"
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 px-3">
                          {msg.timestamp}
                        </p>
                      </div>
                      
                      {msg.sender === "user" && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-muted">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything about AI..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Topics */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span>Quick Learning Topics</span>
                </CardTitle>
                <CardDescription>Click on any topic to get instant guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-3">
                  {quickTopics.map((topic) => (
                    <Button
                      key={topic.title}
                      variant="outline"
                      onClick={() => handleQuickTopic(topic.title)}
                      className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary/5"
                    >
                      <div className="text-2xl">{topic.icon}</div>
                      <div className="text-center">
                        <p className="font-medium text-sm">{topic.title}</p>
                        <p className="text-xs text-muted-foreground">{topic.description}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Learning Paths */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Learning Paths</span>
                </CardTitle>
                <CardDescription>Choose a structured learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningPaths.map((path) => (
                  <div 
                    key={path.title}
                    className={`p-4 border rounded-lg cursor-pointer transition-smooth hover:bg-muted/30 ${
                      selectedPath === path.title ? "border-primary bg-primary/5" : ""
                    }`}
                    onClick={() => selectLearningPath(path.title)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{path.title}</h4>
                        <Badge variant={
                          path.difficulty === "Beginner" ? "secondary" :
                          path.difficulty === "Intermediate" ? "default" : "destructive"
                        }>
                          {path.difficulty}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{path.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>📅 {path.duration}</span>
                        <span>{path.topics.length} topics</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Coach Stats */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Your Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-xl font-bold text-primary">24</div>
                    <p className="text-xs text-muted-foreground">Sessions</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-xl font-bold text-primary">12h</div>
                    <p className="text-xs text-muted-foreground">Learning Time</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-xl font-bold text-primary">85%</div>
                    <p className="text-xs text-muted-foreground">Completion</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-xl font-bold text-primary">A+</div>
                    <p className="text-xs text-muted-foreground">Grade</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Focus */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Today's Focus</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium">📚 Complete Python Basics</p>
                  <p className="text-xs text-muted-foreground">2 chapters remaining</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">🧪 Practice Exercise</p>
                  <p className="text-xs text-muted-foreground">Data manipulation with Pandas</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">💡 Review Session</p>
                  <p className="text-xs text-muted-foreground">ML algorithms comparison</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}