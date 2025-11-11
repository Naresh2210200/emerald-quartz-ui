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
    <section id="courses" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of expertly designed courses to kickstart your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all border-border group hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-6xl">{course.image}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {course.students} students enrolled
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1">Enroll Now</Button>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
