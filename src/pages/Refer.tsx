import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Share2, Users, Gift, Copy, Mail, MessageSquare, Trophy, Star, Home, Brain, Award } from "lucide-react";
import { toast } from "sonner";

const referralStats = {
  totalReferrals: 12,
  successfulReferrals: 8,
  pendingReferrals: 4,
  pointsEarned: 2400,
  currentTier: "Gold",
  nextTier: "Platinum",
  nextTierRequirement: 15
};

const referralHistory = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    status: "completed",
    joinDate: "2024-12-01",
    pointsEarned: 300
  },
  {
    id: 2,
    name: "Sarah Wilson", 
    email: "sarah@example.com",
    status: "completed",
    joinDate: "2024-11-28",
    pointsEarned: 300
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike@example.com", 
    status: "pending",
    joinDate: "2024-12-10",
    pointsEarned: 0
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma@example.com",
    status: "completed", 
    joinDate: "2024-11-25",
    pointsEarned: 300
  }
];

const tierBenefits = [
  { tier: "Bronze", referrals: "0-4", bonus: "Base 300 points", color: "bg-amber-600" },
  { tier: "Silver", referrals: "5-9", bonus: "350 points + Badge", color: "bg-gray-400" }, 
  { tier: "Gold", referrals: "10-14", bonus: "400 points + Certificate", color: "bg-yellow-500" },
  { tier: "Platinum", referrals: "15+", bonus: "500 points + Exclusive Access", color: "bg-purple-500" }
];

export default function Refer() {
  const [referralCode] = useState("NXTWAVE-USER123");
  const [emailToInvite, setEmailToInvite] = useState("");
  
  const progressToNext = (referralStats.successfulReferrals / referralStats.nextTierRequirement) * 100;

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
  
  const copyReferralLink = () => {
    const link = `https://nxtwave.app/join?ref=${referralCode}`;
    navigator.clipboard.writeText(link);
    toast.success("🔗 Referral link copied to clipboard!");
  };

  const shareViaEmail = () => {
    const subject = "Join NxtWave - AI Learning Platform";
    const body = `Hi there!\n\nI've been using NxtWave to level up my AI skills and thought you'd love it too!\n\nJoin using my referral link: https://nxtwave.app/join?ref=${referralCode}\n\nYou'll get bonus points to start with, and we'll both earn rewards!\n\nCheers!`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const sendDirectInvite = () => {
    if (!emailToInvite) {
      toast.error("Please enter an email address");
      return;
    }
    toast.success(`📧 Invitation sent to ${emailToInvite}!`);
    setEmailToInvite("");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <FloatingNav navItems={navItems} />
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Refer & Earn</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invite friends to join NxtWave and earn points together
          </p>
        </div>

        {/* Referral Stats */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Your Referral Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{referralStats.totalReferrals}</div>
                <p className="text-sm text-muted-foreground">Total Referrals</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-2xl font-bold text-success">{referralStats.successfulReferrals}</div>
                <p className="text-sm text-muted-foreground">Successful</p>
              </div>
              <div className="text-center p-4 bg-amber-500/10 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">{referralStats.pendingReferrals}</div>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">{referralStats.pointsEarned.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Points Earned</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Current Tier: <Badge className="ml-2">{referralStats.currentTier}</Badge></p>
                  <p className="text-sm text-muted-foreground">
                    {referralStats.nextTierRequirement - referralStats.successfulReferrals} more referrals to reach {referralStats.nextTier}
                  </p>
                </div>
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <Progress value={progressToNext} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Share Your Code */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Share2 className="h-5 w-5 text-primary" />
              <span>Share Your Referral Code</span>
            </CardTitle>
            <CardDescription>
              Each successful referral earns you 300+ points and your friend gets bonus points too!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
              <code className="flex-1 font-mono text-lg">{referralCode}</code>
              <Button onClick={copyReferralLink} size="sm">
                <Copy className="h-4 w-4 mr-1" />
                Copy Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tier Benefits */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Referral Tiers & Benefits</CardTitle>
            <CardDescription>Unlock better rewards as you refer more friends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tierBenefits.map((tier) => (
                <div 
                  key={tier.tier}
                  className={`p-4 rounded-lg border-2 ${
                    tier.tier === referralStats.currentTier ? "border-primary bg-primary/5" : "border-muted"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${tier.color}`} />
                    <span className="font-medium">{tier.tier}</span>
                    {tier.tier === referralStats.currentTier && <Star className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{tier.referrals} referrals</p>
                  <p className="text-sm font-medium">{tier.bonus}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Referral History */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Referral History</CardTitle>
            <CardDescription>Track your referral progress and earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {referralHistory.map((referral) => (
                <div 
                  key={referral.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-smooth"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {referral.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{referral.name}</p>
                      <p className="text-sm text-muted-foreground">{referral.email}</p>
                      <p className="text-xs text-muted-foreground">Joined {referral.joinDate}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge 
                      variant={referral.status === "completed" ? "default" : "secondary"}
                      className="mb-1"
                    >
                      {referral.status === "completed" ? "Completed" : "Pending"}
                    </Badge>
                    <p className="text-sm font-bold text-primary">
                      {referral.pointsEarned > 0 ? `+${referral.pointsEarned}` : "Pending"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}