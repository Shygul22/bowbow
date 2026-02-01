import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-brown/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-cream font-heading text-xl font-semibold">Bow Bow Bliss</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-cream/80 hover:text-cream transition-colors font-medium">About</a>
            <a href="/gallery" className="text-cream/80 hover:text-cream transition-colors font-medium">Gallery</a>
            <a href="/#contact" className="text-cream/80 hover:text-cream transition-colors font-medium">Contact</a>
            <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cream/50 text-cream rounded-full hover:bg-cream/10 transition-all font-medium">Reservations</a>
            <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20order%20online" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-all font-medium">Order Online</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-cream/20">
            <div className="flex flex-col gap-4">
              <a href="/#about" className="text-cream/80 hover:text-cream transition-colors font-medium">About</a>
              <a href="/gallery" className="text-cream/80 hover:text-cream transition-colors font-medium">Gallery</a>
              <a href="/#contact" className="text-cream/80 hover:text-cream transition-colors font-medium">Contact</a>
              <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cream/50 text-cream rounded-full hover:bg-cream/10 transition-all font-medium text-center">Reservations</a>
              <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20order%20online" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-all font-medium text-center">Order Online</a>
            </div>
          </nav>
        )}
      </div>


    </header>
  );
};

export default Header;
