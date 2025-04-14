
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-container flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-zoezi-purple">Zoezi</span>
          <span className="text-2xl font-bold text-zoezi-dark">Fit</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-zoezi-purple transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-zoezi-purple transition-colors">About</Link>
          <Link to="/services" className="font-medium hover:text-zoezi-purple transition-colors">Services</Link>
          <Link to="/pricing" className="font-medium hover:text-zoezi-purple transition-colors">Pricing</Link>
          <Link to="/schedule" className="font-medium hover:text-zoezi-purple transition-colors">Schedule</Link>
          <Link to="/gallery" className="font-medium hover:text-zoezi-purple transition-colors">Gallery</Link>
          <Link to="/contact" className="font-medium hover:text-zoezi-purple transition-colors">Contact</Link>
        </div>
        
        {/* Join Now Button */}
        <div className="hidden md:block">
          <Link to="/pricing" className="btn-primary">Join Now</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/pricing" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>Pricing</Link>
            <Link to="/schedule" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>Schedule</Link>
            <Link to="/gallery" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link to="/contact" className="font-medium hover:text-zoezi-purple transition-colors" onClick={toggleMenu}>Contact</Link>
            <Link to="/pricing" className="btn-primary text-center" onClick={toggleMenu}>Join Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
