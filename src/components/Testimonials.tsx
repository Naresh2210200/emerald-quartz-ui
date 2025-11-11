import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      school: "Delhi Public School",
      content: "My daughter has grown so much in confidence after joining the robotics course. The instructors are patient and the learning approach is fantastic!",
      rating: 5,
      avatar: "👩",
    },
    {
      name: "Rajesh Kumar",
      role: "School Principal",
      school: "Modern International School",
      content: "The STEM lab setup transformed our school's approach to technology education. Students are now more engaged and excited about learning.",
      rating: 5,
      avatar: "👨",
    },
    {
      name: "Ananya Reddy",
      role: "Student",
      school: "St. Xavier's College",
      content: "The Python course helped me land my first internship. The practical projects and real-world examples made all the difference!",
      rating: 5,
      avatar: "👧",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What They <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied students, parents, and educational partners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-4 border-accent/20 hover:shadow-2xl transition-all rounded-3xl bg-gradient-to-br from-white to-section-blue">
              <CardContent className="pt-6">
                <p className="text-foreground mb-6 italic text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-accent/20">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground uppercase text-xs tracking-wider border-b-2 border-accent inline-block pb-1">
                      {testimonial.role}
                    </div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.school}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
            Watch Testimonials Videos 📹
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
