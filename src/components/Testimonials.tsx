import { Card, CardContent } from "@/components/ui/card";
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What They Say About Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied students, parents, and educational partners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
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
      </div>
    </section>
  );
};

export default Testimonials;
