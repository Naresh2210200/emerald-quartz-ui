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
    <section className="py-16 bg-section-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🧪</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-primary">STEM</span>{" "}
              <span className="text-foreground">EDUCATION</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Techyguide offers a creative platform where young minds can transform their ideas into 
            real innovations using technology. It nurtures curiosity and a passion for discovery in children, 
            preparing them to thrive in a technology-driven future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-accent group-hover:scale-110 transition-transform border-4 border-accent/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
