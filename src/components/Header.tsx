import { useState } from "react";
<<<<<<< HEAD
import { Menu, X } from "lucide-react";
=======
import { Menu, X, MessageCircle } from "lucide-react";
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-brown/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<<<<<<< HEAD
          <div className="flex items-center">
=======
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
              <span className="text-warm-brown font-heading font-bold text-lg">🐾</span>
            </div>
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
            <span className="text-cream font-heading text-xl font-semibold">Bow Bow Bliss</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
<<<<<<< HEAD
            <a href="/#about" className="text-cream/80 hover:text-cream transition-colors font-medium">About</a>
            <a href="/gallery" className="text-cream/80 hover:text-cream transition-colors font-medium">Gallery</a>
            <a href="/#contact" className="text-cream/80 hover:text-cream transition-colors font-medium">Contact</a>
            <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cream/50 text-cream rounded-full hover:bg-cream/10 transition-all font-medium">Reservations</a>
            <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20order%20online" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-all font-medium">Order Online</a>
=======
            <a href="#about" className="text-cream/80 hover:text-cream transition-colors font-medium">About</a>
            <a href="#gallery" className="text-cream/80 hover:text-cream transition-colors font-medium">Gallery</a>
            <a href="#contact" className="text-cream/80 hover:text-cream transition-colors font-medium">Contact</a>
            <a href="#reservations" className="px-4 py-2 border border-cream/50 text-cream rounded-full hover:bg-cream/10 transition-all font-medium">Reservations</a>
            <a href="#order" className="px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-all font-medium">Order Online</a>
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
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
<<<<<<< HEAD
              <a href="/#about" className="text-cream/80 hover:text-cream transition-colors font-medium">About</a>
              <a href="/gallery" className="text-cream/80 hover:text-cream transition-colors font-medium">Gallery</a>
              <a href="/#contact" className="text-cream/80 hover:text-cream transition-colors font-medium">Contact</a>
              <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cream/50 text-cream rounded-full hover:bg-cream/10 transition-all font-medium text-center">Reservations</a>
              <a href="https://wa.me/918599869964?text=Hi,%20I%20would%20like%20to%20order%20online" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-all font-medium text-center">Order Online</a>
=======
              <a href="#about" className="text-cream/80 hover:text-cream transition-colors font-medium">About</a>
              <a href="#gallery" className="text-cream/80 hover:text-cream transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-cream/80 hover:text-cream transition-colors font-medium">Contact</a>
              <a href="#reservations" className="px-4 py-2 border border-cream/50 text-cream rounded-full hover:bg-cream/10 transition-all font-medium text-center">Reservations</a>
              <a href="#order" className="px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-all font-medium text-center">Order Online</a>
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
            </div>
          </nav>
        )}
      </div>

<<<<<<< HEAD

=======
      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50 flex items-center gap-2">
        <MessageCircle size={20} />
        <span className="hidden sm:inline font-medium">Let's Chat!</span>
      </button>
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
    </header>
  );
};

export default Header;
