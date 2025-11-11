import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              🎓 #1 STEM Learning Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Future with{" "}
              <span className="text-primary">Technology Education</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Master cutting-edge technologies through hands-on learning. Join 50,000+ students 
              who are building their future with our expert-led courses in programming, AI, robotics, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Book a Free Class
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play size={20} />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Coding</h3>
              <p className="text-sm text-muted-foreground">Master programming languages</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border mt-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Robotics</h3>
              <p className="text-sm text-muted-foreground">Build intelligent robots</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI & ML</h3>
              <p className="text-sm text-muted-foreground">Explore artificial intelligence</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border mt-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">IoT</h3>
              <p className="text-sm text-muted-foreground">Connect the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
