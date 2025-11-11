import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-yellow text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">📋 About Us</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">💼 Impact Program</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">❓ Why Choose Us?</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">🤝 Partners</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">📱 Social Wall</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Products & Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">📚 Online Courses</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">🔧 DIY Products</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">🧪 Atal Tinkering Lab</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">🎯 Workshop</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">💬 Consultation</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">🏆 Competition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-foreground">+91 91140 36376</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-foreground">contact@edutech.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Bangalore, Karnataka</span>
              </li>
            </ul>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">GET MORE STUFF</h4>
            <p className="text-foreground mb-4 text-sm">
              Subscribe to our mailing list and get interesting stuff and updates to your email inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email here..."
                className="bg-white border-2 border-primary/20 rounded-lg"
              />
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-xs text-foreground">
                  I consent to my submitted data being collected via this form.
                </span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">
                SIGN UP NOW
              </Button>
              <p className="text-xs text-muted-foreground">
                Your privacy matters to us, and we will not share your information.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-primary/20 text-center">
          <p className="text-foreground">&copy; 2025 EduTech. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
