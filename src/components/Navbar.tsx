
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-spw-blue flex items-center justify-center text-white font-bold text-xl">
              SPW
            </div>
            <div className="ml-3">
              <h1 className="text-lg md:text-xl font-bold text-spw-blue">Spain Power Washing</h1>
              <p className="text-xs md:text-sm text-spw-darkgray">Professional Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-spw-blue font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-spw-blue font-medium transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-spw-blue font-medium transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-800 hover:text-spw-blue font-medium transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-800 hover:text-spw-blue font-medium transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-spw-blue font-medium transition-colors">Contact</button>
            <Button 
              className="bg-gradient-to-r from-spw-blue to-spw-lightblue hover:shadow-lg hover:scale-105 transition-all text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-50 relative" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 z-40 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          <button onClick={() => scrollToSection('home')} className="text-xl font-medium text-gray-800 hover:text-spw-blue transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-xl font-medium text-gray-800 hover:text-spw-blue transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-xl font-medium text-gray-800 hover:text-spw-blue transition-colors">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="text-xl font-medium text-gray-800 hover:text-spw-blue transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-xl font-medium text-gray-800 hover:text-spw-blue transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-xl font-medium text-gray-800 hover:text-spw-blue transition-colors">Contact</button>
          <Button 
            size="lg"
            className="mt-6 bg-gradient-to-r from-spw-blue to-spw-lightblue hover:shadow-lg hover:scale-105 transition-all text-white"
            onClick={() => scrollToSection('contact')}
          >
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
