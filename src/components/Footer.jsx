import React from 'react';
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-primary">
              Chili Food <span className="text-secondary">Bistro</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Authentic vegetarian Indian cuisine made with fresh ingredients and traditional recipes passed down through generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  className="text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1"
                  onClick={() => navigateTo('home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  className="text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1"
                  onClick={() => navigateTo('menu')}
                >
                  Menu
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Sector 18, Noida<br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-400">contact@chilifoodbistro.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Hours */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Monday - Friday</p>
                  <p className="text-white font-medium">10:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start mt-2">
                <Clock size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Saturday - Sunday</p>
                  <p className="text-white font-medium">9:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Chili Food Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;