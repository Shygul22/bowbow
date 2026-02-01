import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-section text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Contact Us */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-cream/70">
              <a href="tel:+918598893964" className="flex items-center gap-2 hover:text-cream transition-colors">
                <Phone size={16} />
                +91 8598893964
              </a>
              <a href="mailto:bowbowbliss@gmail.com" className="flex items-center gap-2 hover:text-cream transition-colors">
                <Mail size={16} />
                bowbowbliss@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Address</h4>
            <div className="flex items-start gap-2 text-cream/70">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p>
                12A, Kattur Street,<br />
                Kurumbapalayam Road,<br />
                Kalapatti,<br />
                Coimbatore-48.
              </p>
            </div>
          </div>

          {/* Dine-in Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Dine-in Hours</h4>
            <div className="text-cream/70 space-y-1">
              <p className="font-medium text-cream">Everyday:</p>
              <p>12:30pm-3:45pm</p>
              <p>5:30pm-9pm</p>
              
              <p className="font-medium text-cream mt-4">Puppies play Hours</p>
              <p className="text-sm">Everyday:</p>
              <p className="text-sm">12:30pm-2:30pm</p>
              <p className="text-sm">5:30pm-7:30pm</p>
              <p className="text-sm">8pm-10pm</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-cream/20 text-center text-cream/50 text-sm">
          <p>© 2025 Bow Bow Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
