import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-8 md:pt-32 md:pb-12 bg-section-blue">
      <div className="bg-accent text-white text-center py-3 -mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            <button className="px-4 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">All Products</button>
            <button className="px-4 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">Combo</button>
            <button className="px-4 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">Robotics</button>
            <button className="px-4 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">IoT Products</button>
            <button className="px-4 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">3D Printed</button>
            <button className="px-4 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">Courses</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border-2 border-accent rounded-full text-accent font-bold text-sm">
              <span className="text-2xl">🚀</span>
              #1 STEM Learning Platform for Kids
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Get Your Kids{" "}
              <span className="text-primary">Future Ready</span>{" "}
              With A Certificate
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Enroll Today to Join 50,000+ Students Community. Master coding, robotics, AI, and more 
              through engaging activities and hands-on projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 text-lg px-8 py-6 rounded-full">
                BOOK A FREE CLASS
                <ArrowRight size={20} />
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              ⭐ Trusted by 50,000+ students worldwide
            </div>

          </div>

          {/* Right Content - Feature Circles */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <div className="w-40 h-40 bg-section-yellow rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg hover:scale-105 transition-transform">
                  <span className="text-5xl mb-2">🖨️</span>
                  <span className="text-sm font-semibold text-foreground">3D Printing</span>
                </div>
              </div>
              
              <div className="relative mt-12">
                <div className="w-40 h-40 bg-section-blue rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg hover:scale-105 transition-transform">
                  <span className="text-5xl mb-2">💻</span>
                  <span className="text-sm font-semibold text-foreground">Coding</span>
                </div>
              </div>
              
              <div className="relative -mt-6">
                <div className="w-40 h-40 bg-section-pink rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg hover:scale-105 transition-transform">
                  <span className="text-5xl mb-2">🤖</span>
                  <span className="text-sm font-semibold text-foreground">Robotics</span>
                </div>
              </div>
              
              <div className="relative mt-6">
                <div className="w-40 h-40 bg-section-orange rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg hover:scale-105 transition-transform">
                  <span className="text-5xl mb-2">🔌</span>
                  <span className="text-sm font-semibold text-foreground">IoT</span>
                </div>
              </div>
            </div>
            
            {/* Decorative rocket */}
            <div className="absolute -top-4 -right-4 text-6xl animate-bounce">
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
