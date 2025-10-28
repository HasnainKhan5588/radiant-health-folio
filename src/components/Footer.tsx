import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                HealthCare<span className="text-primary">Plus</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Providing quality healthcare services with compassion and excellence. Your health is our priority.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Our Doctors
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Emergency Care</li>
              <li className="text-muted-foreground text-sm">Surgery</li>
              <li className="text-muted-foreground text-sm">Diagnostic Services</li>
              <li className="text-muted-foreground text-sm">Rehabilitation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <span>123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@healthcareplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 HealthCare Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
