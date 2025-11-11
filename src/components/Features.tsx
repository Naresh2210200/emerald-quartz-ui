import { Lightbulb, Target, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Imagine",
      description: "Foster creativity and innovative thinking through project-based learning",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Ideate",
      description: "Transform ideas into real solutions with hands-on experimentation",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovate",
      description: "Build cutting-edge projects and prepare for a tech-driven future",
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Learning Philosophy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We nurture curiosity and passion for discovery in children, preparing them 
            to thrive in a technology-driven future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-border group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
