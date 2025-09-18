import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Gift, Trophy, Medal, Award, Star, Calendar, Download, Home, Brain } from "lucide-react";
import { toast } from "sonner";

const rewards = [
  {
    id: 2,
    title: "Level 2 Gift Vouchers",
    description: "Effective Prompts + AI Tools",
    type: "voucher", 
    status: "earned",
    points: 750,
    earnedDate: "2024-12-01",
    icon: "🎁"
  },
  {
    id: 5,
    title: "Level 3 Special Perks", 
    description: "Automations",
    type: "perks",
    status: "locked",
    points: 1200,
    progress: 60
  },
  {
    id: 6,
    title: "Level 4 International Trip", 
    description: "Productising AI Solutions",
    type: "trip",
    status: "locked",
    points: 3500,
    progress: 20
  }
];

const milestones = [
  { level: 1, points: 500, title: "Full Stack + Custom GPT", status: "completed", reward: "Certificate" },
  { level: 2, points: 1000, title: "Effective Prompts + AI Tools", status: "completed", reward: "Gift Vouchers + Certificate" },
  { level: 3, points: 2000, title: "Automations", status: "current", reward: "Certificate + Special Perks" },
  { level: 4, points: 3500, title: "Productising AI Solutions", status: "locked", reward: "International Trip" }
];

export default function Rewards() {
  const currentPoints = 1340;
  const nextMilestone = milestones.find(m => m.status === "locked");
  const currentLevel = milestones.find(m => m.status === "current");
  const progressToNext = nextMilestone ? (currentPoints / nextMilestone.points) * 100 : 100;
  const pointsNeeded = nextMilestone ? nextMilestone.points - currentPoints : 0;

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Learning",
      link: "/learning",
      icon: <Brain className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Rewards",
      link: "/rewards",
      icon: <Award className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Refer",
      link: "/refer",
      icon: <Gift className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  const handleClaimReward = (rewardId: number) => {
    toast.success("🎉 Reward claimed successfully!");
  };

  const handleDownloadCertificate = (title: string) => {
    toast.success(`📄 ${title} downloaded!`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <FloatingNav navItems={navItems} />
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Your Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your achievements and unlock exclusive rewards
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Progress Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">{currentPoints.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">{rewards.filter(r => r.status === "earned").length}</div>
                <p className="text-sm text-muted-foreground">Rewards Earned</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">Level {currentLevel?.level}</div>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
            </div>

            {nextMilestone && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress to Level {nextMilestone.level}</span>
                  <span>{currentPoints} / {nextMilestone.points} points</span>
                </div>
                <Progress value={progressToNext} className="h-2" />
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{pointsNeeded.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Points needed to unlock {nextMilestone.title}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Level Milestones</CardTitle>
            <CardDescription>Your progression through the GenAI mastery levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div 
                  key={milestone.level}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    milestone.status === "completed" ? "bg-success/10 border-success/20" :
                    milestone.status === "current" ? "bg-primary/10 border-primary/20" :
                    "bg-muted/30 border-muted"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.status === "completed" ? "bg-success text-white" :
                      milestone.status === "current" ? "bg-primary text-white" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {milestone.status === "completed" ? "✓" : milestone.level}
                    </div>
                    <div>
                      <p className="font-medium">Level {milestone.level} - {milestone.title}</p>
                      <p className="text-sm text-muted-foreground">{milestone.points.toLocaleString()} points</p>
                      <p className="text-xs text-primary font-medium">🎁 {milestone.reward}</p>
                    </div>
                  </div>
                  {milestone.status === "completed" && <Award className="h-5 w-5 text-success" />}
                  {milestone.status === "current" && <Star className="h-5 w-5 text-primary" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rewards Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your Rewards</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card 
                key={reward.id} 
                className={`hover:shadow-medium transition-smooth ${
                  reward.status === "earned" ? "border-success/50" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">{reward.icon}</div>
                    <Badge 
                      variant={
                        reward.status === "earned" ? "default" :
                        reward.status === "in-progress" ? "secondary" : "outline"
                      }
                    >
                      {reward.status === "earned" ? "Earned" :
                       reward.status === "in-progress" ? "In Progress" : "Locked"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{reward.title}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Points:</span>
                    <span className="font-bold text-primary">+{reward.points}</span>
                  </div>

                  {reward.status === "earned" && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Earned on {reward.earnedDate}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleClaimReward(reward.id)}
                        >
                          <Gift className="h-4 w-4 mr-1" />
                          Claim
                        </Button>
                        {reward.type === "voucher" && (
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleDownloadCertificate(reward.title)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  )}

                  {reward.status === "in-progress" && reward.progress && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{reward.progress}%</span>
                      </div>
                      <Progress value={reward.progress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}