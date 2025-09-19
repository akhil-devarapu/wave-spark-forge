import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Gift, Trophy, Medal, Award, Star, Calendar, Download } from "lucide-react";
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
  const [showClaimBanner, setShowClaimBanner] = useState(false);
  const [claimedReward, setClaimedReward] = useState<any>(null);
  
  const currentPoints = 1340;
  const nextMilestone = milestones.find(m => m.status === "locked");
  const currentLevel = milestones.find(m => m.status === "current");
  const progressToNext = nextMilestone ? (currentPoints / nextMilestone.points) * 100 : 100;
  const pointsNeeded = nextMilestone ? nextMilestone.points - currentPoints : 0;

  const handleClaimReward = (rewardId: number) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (reward) {
      setClaimedReward(reward);
      setShowClaimBanner(true);
    }
  };

  const handleDownloadCertificate = (title: string) => {
    toast.success(`📄 ${title} downloaded!`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Claim Reward Banner */}
        {showClaimBanner && claimedReward && (
          <Card className="border-success/20 bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Gift className="h-8 w-8" />
                  <h2 className="text-2xl font-bold">🎉 Reward Claimed!</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="text-2xl">{claimedReward.icon}</div>
                      <span className="text-lg font-bold">{claimedReward.title}</span>
                    </div>
                    <p className="text-sm opacity-90">Reward Type</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Star className="h-5 w-5" />
                      <span className="text-lg font-bold">+{claimedReward.points}</span>
                    </div>
                    <p className="text-sm opacity-90">Points Earned</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Trophy className="h-5 w-5" />
                      <span className="text-lg font-bold">Level {currentLevel?.level}</span>
                    </div>
                    <p className="text-sm opacity-90">Current Level</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg mb-4 opacity-90">{claimedReward.description}</p>
                  <div className="flex justify-center space-x-3">
                    <Button 
                      onClick={() => setShowClaimBanner(false)}
                      variant="secondary" 
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Continue Exploring
                    </Button>
                    {claimedReward.type === "voucher" && (
                      <Button 
                        onClick={() => handleDownloadCertificate(claimedReward.title)}
                        variant="secondary" 
                        className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Your Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your achievements and unlock exclusive rewards
          </p>
        </div>

        {/* Earned Rewards - Top Section */}
        {rewards.filter(r => r.status === "earned").length > 0 && (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-success">🎉 Congratulations!</h2>
              <p className="text-lg text-muted-foreground">You've earned new rewards</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards
                .filter(reward => reward.status === "earned")
                .map((reward) => (
                  <Card 
                    key={reward.id} 
                    className="hover:shadow-medium transition-smooth border-success/50 bg-success/5"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl">{reward.icon}</div>
                        <Badge variant="default" className="bg-success">
                          Earned
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{reward.title}</CardTitle>
                      <CardDescription>{reward.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Points:</span>
                        <span className="font-bold text-success">+{reward.points}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Earned on {reward.earnedDate}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-success hover:bg-success/90"
                            onClick={() => handleClaimReward(reward.id)}
                          >
                            <Gift className="h-4 w-4 mr-1" />
                            Claim Now
                          </Button>
                          {reward.type === "voucher" && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDownloadCertificate(reward.title)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

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
            <CardTitle>Rewards and Levels</CardTitle>
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

        {/* Remaining Rewards */}
        {rewards.filter(r => r.status !== "earned").length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Available Rewards</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards
                .filter(reward => reward.status !== "earned")
                .map((reward) => (
                  <Card 
                    key={reward.id} 
                    className="hover:shadow-medium transition-smooth"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl">{reward.icon || "🎁"}</div>
                        <Badge 
                          variant={
                            reward.status === "in-progress" ? "secondary" : "outline"
                          }
                        >
                          {reward.status === "in-progress" ? "In Progress" : "Locked"}
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
        )}
      </div>
    </div>
  );
}