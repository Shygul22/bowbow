import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vinod Kumar",
    text: "Excellent place to hangout. Beautiful ambience and theme. Kids will definitely have a good time. Food is good & service are fine. Must visit place for pet lovers... spacious... good parking facilities... indoor and outdoor dining available... time well spent...",
  },
  {
    name: "Kamalanethira",
    text: "Loved everything about this place! The dogs were super friendly and well trained. Beautiful ambiance! Kudos to the café. The food was delicious. Had an amazinggg time. This place has hit the bar! Impeccable! Undoubtedly my favorite restaurant in Coimbatore. ❤️",
  },
  {
    name: "Harini SU",
    text: "Very good ambiance and pet friendly. Christmas event was fun and pleasant. Good team work and friendly service. We enjoyed a lot and looking forward to visit again for upcoming events.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What people tell about us!
          </h2>
          <div className="wave-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card relative">
              {/* Opening Quote */}
              <Quote className="w-8 h-8 text-accent/30 mb-4 mx-auto rotate-180" />
<<<<<<< HEAD

              <h4 className="font-heading text-lg font-semibold text-accent mb-4 underline underline-offset-4">
                {testimonial.name}
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

=======
              
              <h4 className="font-heading text-lg font-semibold text-accent mb-4 underline underline-offset-4">
                {testimonial.name}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>
              
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
              {/* Closing Quote */}
              <Quote className="w-8 h-8 text-accent/30 mx-auto" />
            </div>
          ))}
        </div>
<<<<<<< HEAD

        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/mmJWMZ5zTaVYfSVe9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Read more reviews on Google
          </a>
        </div>
=======
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
      </div>
    </section>
  );
};

export default Testimonials;
