import { Utensils, Heart, PartyPopper } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Wholesome Food",
    description:
      "We are a Multi-cuisine Restaurant and a Café with an air conditioned indoor dining, a cozy semi closed dining area with the view of dog's play area and a romantic open lawn dining.",
  },
  {
    icon: Heart,
    title: "Therapy Dogs",
    description:
      'We believe that the meaning of \'dog\' is \'Unconditional Love\'. We give our love to our customers through our in-house dogs who you can play with and relieve all your stress. And we are Pet-friendly as well.',
  },
  {
    icon: PartyPopper,
    title: "Party Spaces",
    description:
      "Aren't you bored of celebrating your birthdays with the normal people and a boring ambiance? You can celebrate your special events with our dogs in an Open Lawn Banquet Hall. Indoor party spaces are also available.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <a key={index} href="/gallery" className="feature-card block hover:no-underline">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
