import { useState } from "react";
import { Star } from "lucide-react";
<<<<<<< HEAD
=======
import noodlesImage from "@/assets/noodles.jpg";
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [email, setEmail] = useState("");
  const [improvement, setImprovement] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    if (rating === 0) {
      alert("Please select a rating of at least 1 star.");
      return;
    }
    const message = `*New Feedback Form Submission*
Rating: ${rating}/5
Email: ${email}
Improvement Area: ${improvement}
Suggestion: ${suggestion}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918599869964?text=${encodedMessage}`, '_blank');
    // Reset form optionally
    setRating(0);
    setEmail("");
    setImprovement("");
    setSuggestion("");
=======
    // Handle form submission
    console.log({ rating, email, improvement, suggestion });
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
  };

  return (
    <section id="order" className="py-20 bg-background">
      <div className="container mx-auto px-4">
<<<<<<< HEAD
        <div className="max-w-3xl mx-auto">
          {/* Feedback Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Share your experience with us 🧡
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              {/* Rating */}
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Please rate our overall satisfaction with our product *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${star <= (hoveredRating || rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                          }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Your email address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Improvement Area */}
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Where do we need to improve?
                </label>
                <select
                  value={improvement}
                  onChange={(e) => setImprovement(e.target.value)}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Choose an option</option>
                  <option value="food">Food Quality</option>
                  <option value="service">Service</option>
                  <option value="ambiance">Ambiance</option>
                  <option value="pricing">Pricing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Suggestion */}
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  What can we do to improve?
                </label>
                <input
                  type="text"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your suggestions"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
              >
                Submit
              </button>
            </form>
=======
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Order Online Section */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <img
                  src={noodlesImage}
                  alt="Delicious noodles"
                  className="w-48 h-48 object-cover rounded-full mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl">🍜</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-2">Order Online</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Noodles Are<br />
                <span className="text-accent">Coming Your Way</span>
              </h3>
              
              <a
                href="#"
                className="inline-block px-8 py-3 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
              >
                Order Now
              </a>
            </div>

            {/* Feedback Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Share your experience with us 🧡
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                {/* Rating */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Please rate our overall satisfaction with our product *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your email address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Improvement Area */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Where do we need to improve?
                  </label>
                  <select
                    value={improvement}
                    onChange={(e) => setImprovement(e.target.value)}
                    className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Choose an option</option>
                    <option value="food">Food Quality</option>
                    <option value="service">Service</option>
                    <option value="ambiance">Ambiance</option>
                    <option value="pricing">Pricing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Suggestion */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    What can we do to improve?
                  </label>
                  <input
                    type="text"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your suggestions"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
