import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Winchester Water Craft" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 max-w-md">
              We Beautify Water Through Technology. Specialists in waterfalls, bubble walls, and custom water features.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <a
              href="https://www.facebook.com/wwatercrafts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity text-sm"
            >
              <Facebook size={20} />
              Follow us on Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Winchester Water Craft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
