import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Play, Clock, CheckCircle, Star, TrendingUp, Award, Calendar } from "lucide-react";
import { toast } from "sonner";

const courses = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    description: "Complete introduction to ML concepts and algorithms",
    level: "Beginner",
    duration: "6 hours",
    lessons: 12,
    progress: 75,
    rating: 4.8,
    students: 1250,
    category: "Machine Learning",
    thumbnail: "🤖",
    status: "in-progress"
  },
  {
    id: 2,
    title: "Deep Learning with Python",
    description: "Build neural networks from scratch using Python and TensorFlow",
    level: "Intermediate", 
    duration: "12 hours",
    lessons: 20,
    progress: 0,
    rating: 4.9,
    students: 890,
    category: "Deep Learning",
    thumbnail: "🧠",
    status: "not-started"
  },
  {
    id: 3,
    title: "Computer Vision Essentials",
    description: "Learn image processing and computer vision techniques",
    level: "Intermediate",
    duration: "8 hours", 
    lessons: 15,
    progress: 100,
    rating: 4.7,
    students: 750,
    category: "Computer Vision",
    thumbnail: "👁️",
    status: "completed"
  },
  {
    id: 4,
    title: "NLP and Text Analytics", 
    description: "Process and analyze text data with modern NLP techniques",
    level: "Advanced",
    duration: "10 hours",
    lessons: 18,
    progress: 30,
    rating: 4.6,
    students: 650,
    category: "NLP",
    thumbnail: "💬",
    status: "in-progress"
  }
];

const articles = [
  {
    id: 1,
    title: "The Future of Generative AI in 2025",
    description: "Exploring the latest trends and breakthroughs in generative artificial intelligence",
    readTime: "8 min read",
    category: "Trends",
    publishDate: "2024-12-15",
    featured: true
  },
  {
    id: 2, 
    title: "Building Robust AI Systems: Best Practices",
    description: "Essential guidelines for developing reliable and scalable AI applications",
    readTime: "12 min read",
    category: "Best Practices", 
    publishDate: "2024-12-12",
    featured: false
  },
  {
    id: 3,
    title: "Ethics in AI: A Comprehensive Guide",
    description: "Understanding the ethical implications and responsibilities in AI development",
    readTime: "15 min read",
    category: "Ethics",
    publishDate: "2024-12-10",
    featured: true
  }
];

const achievements = [
  { title: "Course Completionist", description: "Completed first course", earned: true, icon: "🎓" },
  { title: "Speed Learner", description: "Finished 3 lessons in one day", earned: true, icon: "⚡" },
  { title: "Knowledge Seeker", description: "Read 10 articles", earned: false, icon: "📚" },
  { title: "AI Expert", description: "Complete advanced track", earned: false, icon: "🏆" }
];

export default function Learning() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = ["all", "Machine Learning", "Deep Learning", "Computer Vision", "NLP"];
  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const startCourse = (courseId: number, title: string) => {
    toast.success(`🚀 Starting "${title}"!`);
  };

  const continueCourse = (courseId: number, title: string) => {
    toast.info(`📖 Continuing "${title}"...`);
  };

  const readArticle = (title: string) => {
    toast.info(`📰 Opening "${title}"...`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Keep Learning</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expand your AI knowledge with courses, articles, and hands-on projects
          </p>
        </div>

        {/* Learning Stats */}
        <Card className="shadow-medium">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <p className="text-sm text-muted-foreground">Courses Enrolled</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">1</div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">26h</div>
                <p className="text-sm text-muted-foreground">Learning Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <p className="text-sm text-muted-foreground">Certificates Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            
            {/* Category Filter */}
            <Card className="shadow-medium">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === "all" ? "All Categories" : category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{course.thumbnail}</div>
                        <div>
                          <Badge variant={
                            course.level === "Beginner" ? "secondary" :
                            course.level === "Intermediate" ? "default" : "destructive"
                          }>
                            {course.level}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    {/* Course Metadata */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{course.lessons} lessons</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span>({course.students})</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {course.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    {/* Action Button */}
                    <Button 
                      onClick={() => 
                        course.status === "not-started" 
                          ? startCourse(course.id, course.title)
                          : continueCourse(course.id, course.title)
                      }
                      className="w-full"
                      variant={course.status === "completed" ? "outline" : "default"}
                    >
                      {course.status === "not-started" && (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Course
                        </>
                      )}
                      {course.status === "in-progress" && (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Continue Learning
                        </>
                      )}
                      {course.status === "completed" && (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card 
                  key={article.id} 
                  className={`hover:shadow-medium transition-smooth cursor-pointer ${
                    article.featured ? "border-primary/50" : ""
                  }`}
                  onClick={() => readArticle(article.title)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant={article.featured ? "default" : "secondary"}>
                        {article.category}
                      </Badge>
                      {article.featured && <Star className="h-4 w-4 text-amber-500" />}
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-smooth">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.publishDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.title}
                  className={`hover:shadow-medium transition-smooth ${
                    achievement.earned ? "border-success/50 bg-success/5" : "opacity-60"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`text-4xl p-3 rounded-full ${
                        achievement.earned ? "bg-success/10" : "bg-muted/30"
                      }`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg flex items-center space-x-2">
                          <span>{achievement.title}</span>
                          {achievement.earned && <CheckCircle className="h-5 w-5 text-success" />}
                        </h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                        <Badge 
                          variant={achievement.earned ? "default" : "secondary"}
                          className="mt-2"
                        >
                          {achievement.earned ? "Earned" : "Locked"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}