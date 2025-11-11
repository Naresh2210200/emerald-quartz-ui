import { Button } from "@/components/ui/button";
import { GraduationCap, FlaskConical, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "STEM Lab Setup",
      description: "Create and nurture an ecosystem of learning with our unique Innovation Program, involving establishing a STEM Innovation Lab with comprehensive training.",
      image: "🔬",
    },
    {
      icon: <FlaskConical className="w-12 h-12" />,
      title: "Educational DIY Kits",
      description: "Make countless robots and fascinating DIY projects with our intuitive and affordable STEM learning kits for kids and beginners packed with features.",
      image: "📦",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "STEM Workshops",
      description: "Conduct various short-term workshops and competitions to make STEM education more engaging as per institution requirements.",
      image: "🎯",
    },
  ];

  return (
    <section id="services" className="py-16 bg-section-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What do we do for <span className="text-primary">Educational Institutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to enhance STEM education in schools and colleges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all group hover:-translate-y-2"
            >
              <div className="h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <span className="text-8xl relative z-10">{service.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-accent mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground mb-6">{service.description}</p>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
