import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryComponent from "@/components/Gallery";

const Gallery = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="pt-16">
                <GalleryComponent />
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
