import { useEffect, useState } from "react";

/**
 * 🔴 REQUIRED
 * Replace these with your real values
 */
const FOLDER_ID = "14Ltj4QN1nXF-sWNKm_51UKc-KHZojeTe";
const API_KEY = "AIzaSyA-09CtW66CLvNENEo7iEGvy0O8RbNPmBw";

/**
 * Image type (for clarity)
 */
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,mimeType)&key=${API_KEY}`
        );

        const data = await response.json();

        // Filter only image files
        const imageFiles = data.files.filter((file) =>
          file.mimeType.startsWith("image/")
        );

        setImages(imageFiles);
      } catch (error) {
        console.error("Error fetching images from Google Drive:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <div className="wave-divider" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Images loaded directly from our Google Drive gallery.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-muted-foreground">
            Loading images...
          </p>
        )}

        {/* Gallery Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
  src={`https://drive.google.com/uc?export=view&id=FILE_ID
${image.id}`}
  alt={image.name}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>


                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg px-4 py-2 bg-primary/80 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Gallery Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && images.length === 0 && (
          <p className="text-center text-muted-foreground">
            No images found in the Google Drive folder.
          </p>
        )}

      </div>
    </section>
  );
};

export default Gallery;
