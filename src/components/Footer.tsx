import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">EduTech</h3>
            <p className="text-background/80 mb-4">
              Empowering the next generation with cutting-edge technology education and hands-on learning experiences.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-background/80 hover:text-primary transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Online Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  DIY Kits
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  STEM Lab Setup
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Competitions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2 text-background/80">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+91 91140 36376</span>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>contact@edutech.in</span>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Bangalore, Karnataka</span>
              </li>
            </ul>
            
            <div>
              <h5 className="font-medium mb-2 text-primary">Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>&copy; 2025 EduTech. All rights reserved. Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
