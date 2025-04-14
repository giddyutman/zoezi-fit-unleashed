
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zoezi-dark-card text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Zoezi Fit</h3>
            <p className="text-gray-400 mb-4">
              Your premier fitness destination with state-of-the-art equipment, expert trainers, and a supportive community to help you achieve your health and fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-zoezi-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-zoezi-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-zoezi-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Personal Training</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Group Classes</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Nutrition Counseling</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Custom Fitness Plans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Wellness Programs</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-zoezi-purple" size={18} />
                <span className="text-gray-400">123 Fitness Avenue, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0 text-zoezi-purple" size={18} />
                <span className="text-gray-400">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0 text-zoezi-purple" size={18} />
                <span className="text-gray-400">info@zoezifit.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Zoezi Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
