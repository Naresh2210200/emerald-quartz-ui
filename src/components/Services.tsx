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
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services for Educational Institutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to enhance STEM education in schools and colleges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-border group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-7xl">{service.image}</span>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button variant="outline" className="w-full">
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
