import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContestBannerProps {
  title?: string;
  subtitle?: string;
  date?: string;
  location?: string;
  participants?: number;
  prize?: string;
  status?: "upcoming" | "live" | "ended";
  registrationOpen?: boolean;
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  onJoinContest?: () => void;
  showInstructions?: boolean;
}

export function ContestBanner({
  title = "Global AI Competition 2024",
  subtitle = "Compete with the world's best AI developers",
  date = "Dec 15, 2024 - Jan 15, 2025",
  location = "Virtual Event",
  participants = 2847,
  prize = "$50,000",
  status = "upcoming",
  registrationOpen = true,
  categories = [],
  selectedCategory = "",
  onCategoryChange,
  onJoinContest,
  showInstructions = false
}: ContestBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case "live":
        return "bg-red-500";
      case "ended":
        return "bg-muted-foreground";
      default:
        return "bg-green-500";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "live":
        return "LIVE NOW";
      case "ended":
        return "ENDED";
      default:
        return "UPCOMING";
    }
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 border border-border rounded-2xl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      {/* Content */}
      <div className="relative z-10 p-4 md:p-6">
        {/* Header with Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Trophy className="w-6 h-6 text-primary" />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <Badge variant="secondary" className={`${getStatusColor()} text-white font-semibold px-3 py-1`}>
              <motion.span
                animate={status === "live" ? {
                  opacity: [1, 0.5, 1],
                } : {}}
                transition={{
                  duration: 1,
                  repeat: status === "live" ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                {getStatusText()}
              </motion.span>
            </Badge>
          </motion.div>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-xl font-bold text-primary">{prize}</div>
            <div className="text-xs text-muted-foreground">Total Prize Pool</div>
          </motion.div>
        </div>

        {/* Contest Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <div className="font-semibold text-foreground text-sm">{date}</div>
              <div className="text-xs text-muted-foreground">Event Date</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <Users className="w-4 h-4 text-primary" />
            <div>
              <div className="font-semibold text-foreground text-sm">{participants.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Participants</div>
            </div>
          </div>
        </motion.div>

        {/* Category Selection and Join Contest */}
        {categories.length > 0 && (
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-full lg:w-64">
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 bg-primary/10 rounded-lg p-2 border border-primary/20 hover:bg-primary/20 transition-all duration-300">
              <Users className="h-4 w-4 text-primary animate-pulse" />
              <div className="text-center">
                <p className="text-sm font-semibold text-primary">247</p>
                <p className="text-xs text-muted-foreground">slots left</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {registrationOpen && status !== "ended" && (
            <Button 
              size="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full"
              onClick={onJoinContest}
              disabled={categories.length > 0 && !selectedCategory}
            >
              <Award className="w-4 h-4 mr-2" />
              {status === "live" ? "Join Contest" : "Join Contest"}
            </Button>
          )}
        </motion.div>

        {/* Instructions */}
        {showInstructions && (
          <motion.div
            className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-medium mb-2">Contest Instructions</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Build an innovative AI solution in your chosen category</li>
              <li>• Submit before the deadline with proper documentation</li>
              <li>• Projects will be judged on innovation, impact, and technical excellence</li>
              <li>• Winners receive points, certificates, and exclusive rewards</li>
            </ul>
            <Button className="mt-3 w-full" size="sm">
              Confirm Participation
            </Button>
          </motion.div>
        )}

        {/* Floating Elements */}
        <div className="absolute top-2 right-2 opacity-5">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Trophy className="w-16 h-16 text-primary" />
          </motion.div>
        </div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            hsl(var(--primary)) 25%, 
            transparent 50%, 
            hsl(var(--secondary)) 75%, 
            transparent 100%)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 rounded-2xl" />
    </div>
  );
}