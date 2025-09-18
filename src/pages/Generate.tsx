import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, Upload, CheckCircle, Clock, Star, Trophy, TrendingUp } from "lucide-react";

export default function Generate() {
  const [showCertificateBanner, setShowCertificateBanner] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  
  // Mock user data
  const userData = {
    level: 5,
    currentPoints: 2340,
    nextLevelPoints: 3000,
    totalProjects: 8,
    contestsParticipated: 3,
    projectsSubmitted: 8,
    projectsApproved: 6,
    projectsInProcess: 2
  };

  const progressPercentage = (userData.currentPoints / userData.nextLevelPoints) * 100;

  const handleGenerateCertificate = () => {
    setShowCertificateBanner(true);
  };

  const handleLevelUp = () => {
    setShowUploadForm(true);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle project submission
    setShowUploadForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Certificate Banner */}
        {showCertificateBanner && (
          <Card className="border-primary/20 bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Generate Certificate</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Star className="h-5 w-5" />
                        <span className="text-lg font-bold">Level {userData.level}</span>
                      </div>
                      <p className="text-sm opacity-90">Current Level</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Upload className="h-5 w-5" />
                        <span className="text-lg font-bold">{userData.totalProjects}</span>
                      </div>
                      <p className="text-sm opacity-90">Projects Built</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Trophy className="h-5 w-5" />
                        <span className="text-lg font-bold">{userData.contestsParticipated}</span>
                      </div>
                      <p className="text-sm opacity-90">Contests Joined</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      Generate Certificate
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowCertificateBanner(false)}
                      className="text-white hover:bg-white/10"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Project Snapshot */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Level Up Your Skills</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your AI projects and advance through the levels
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-medium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your Progress</CardTitle>
              <CardDescription>Track your journey to becoming an AI expert</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Current Level & Points */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-hero text-white px-6 py-3 rounded-full">
                  <Star className="h-6 w-6" />
                  <span className="text-xl font-bold">Level {userData.level}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{userData.currentPoints} points</span>
                    <span>{userData.nextLevelPoints} points (Next Level)</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    {userData.nextLevelPoints - userData.currentPoints} points to go!
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={handleGenerateCertificate}
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Award className="mr-2 h-4 w-4" />
                  Generate Certificate
                </Button>
                <Button 
                  onClick={handleLevelUp}
                  className="bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Progress Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Submission Progress</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{userData.projectsSubmitted}</h3>
                <p className="text-muted-foreground">Projects Submitted</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{userData.projectsApproved}</h3>
                <p className="text-muted-foreground">Projects Approved</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{userData.projectsInProcess}</h3>
                <p className="text-muted-foreground">In Review</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upload Form Dialog */}
        <Dialog open={showUploadForm} onOpenChange={setShowUploadForm}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Project</DialogTitle>
              <DialogDescription>
                Share your AI project to earn points and level up
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleProjectSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Project Title</label>
                <Input placeholder="Enter your project title" className="mt-1" />
              </div>
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea 
                  placeholder="Describe your AI project..." 
                  className="mt-1 min-h-20"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Project Link</label>
                <Input placeholder="https://github.com/..." className="mt-1" />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90">
                  Submit Project
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}