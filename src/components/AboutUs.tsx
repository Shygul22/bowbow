import therapyDog from "@/assets/therapy-dog.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-dark-section text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <div className="wave-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-cream/80 leading-relaxed">
                Bow Bow Bliss is A Pet-Themed and A Pet-Friendly Restaurant and a Café in Coimbatore. A Multi-Cuisine Restaurant and a Café established to provide an unique dining experience to the customers and also to give them the best time of their lives. Our cuisine includes South-Indian, North-Indian, Continental, Chinese and Italian.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Our name is the result of our never ending love for dogs. For those who love dogs, you cannot find any other better place to hangout. We have our in-house puppies who you can play with and an astonishing ambiance to dine-in which makes you want to come back again and again. We have ample indoor and outdoor spaces to conduct parties, events etc. and we arrange candle-light dinners to celebrate your special occasions.
              </p>
            </div>

            {/* Image & Badge */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={therapyDog}
                  alt="Therapy dog at Bow Bow Bliss"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Rotating Badge */}
              <div className="absolute -bottom-8 -right-4 w-32 h-32 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="hsl(var(--cream))" />
                  <text className="text-[8px] fill-warm-brown font-semibold uppercase tracking-widest">
                    <textPath href="#circle">
                      ★ AUTHENTIC ★ FRESH ★ AUTHENTIC ★ FRESH ★
                    </textPath>
                  </text>
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    className="text-3xl"
                  >
                    🐾
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
