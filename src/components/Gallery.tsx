import heroFood from "@/assets/hero-food.jpg";
import noodles from "@/assets/noodles.jpg";
import therapyDog from "@/assets/therapy-dog.jpg";

const galleryImages = [
    {
        src: heroFood,
        alt: "Delicious Food Spread",
        category: "Food",
    },
    {
        src: therapyDog,
        alt: "Therapy Dog",
        category: "Pets",
    },
    {
        src: noodles,
        alt: "Tasty Noodles",
        category: "Food",
    },
    {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        alt: "Restaurant Ambience",
        category: "Ambience",
    },
    {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        alt: "Dining Area",
        category: "Ambience",
    },
    {
        src: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        alt: "Happy Dog",
        category: "Pets",
    },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Gallery
                    </h2>
                    <div className="wave-divider" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A glimpse into the cozy moments, delicious food, and furry friends at Bow Bow Bliss.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium text-lg px-4 py-2 bg-primary/80 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
