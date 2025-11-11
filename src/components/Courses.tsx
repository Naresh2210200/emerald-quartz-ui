import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Python Full Stack Development",
      description: "Master full-stack web development with Python and modern frameworks",
      rating: 4.8,
      students: "2,500+",
      level: "Intermediate",
      image: "💻",
    },
    {
      title: "Robotics & Arduino",
      description: "Build and program intelligent robots with hands-on projects",
      rating: 4.9,
      students: "1,800+",
      level: "Beginner",
      image: "🤖",
    },
    {
      title: "AI & Machine Learning",
      description: "Explore artificial intelligence and create smart applications",
      rating: 4.7,
      students: "3,200+",
      level: "Advanced",
      image: "🧠",
    },
    {
      title: "IoT & Smart Devices",
      description: "Connect devices and create innovative IoT solutions",
      rating: 4.8,
      students: "1,500+",
      level: "Intermediate",
      image: "🔌",
    },
    {
      title: "3D Printing & Design",
      description: "Design and create physical objects with 3D printing technology",
      rating: 4.6,
      students: "1,200+",
      level: "Beginner",
      image: "🎨",
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications",
      rating: 4.9,
      students: "2,800+",
      level: "Intermediate",
      image: "📱",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-section-yellow">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Best <span className="text-primary">STEM Platform</span> for Students & Educators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of expertly designed courses and DIY kits to kickstart your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group hover:-translate-y-2 bg-card border-2">
              <CardHeader className="p-0">
                <div className="relative w-full h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <span className="text-8xl">{course.image}</span>
                  <Badge className="absolute top-4 left-4 bg-accent text-white border-none">
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-bold text-foreground">{course.rating}</span>
                  <span className="text-muted-foreground text-sm">({course.students} students)</span>
                </div>
                <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm">{course.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 bg-accent hover:bg-accent/90 rounded-full">
                  Enroll Now
                </Button>
                <Button variant="outline" className="rounded-full border-2">
                  Know more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
