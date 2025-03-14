
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Spain Power Washing Logo" className="h-12 md:h-16" />
            <div className="ml-3">
              <h1 className="text-lg md:text-xl font-bold text-spw-blue">Spain Power Washing</h1>
              <p className="text-xs md:text-sm text-spw-darkgray">Professional Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-spw-blue font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-spw-blue font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-spw-blue font-medium">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-800 hover:text-spw-blue font-medium">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-800 hover:text-spw-blue font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-spw-blue font-medium">Contact</button>
            <Button className="bg-spw-blue hover:bg-spw-darkblue text-white">
              <Phone className="mr-2 h-4 w-4" />
              +34 123 456 789
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="py-4 container-custom flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">About</button>
            <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Contact</button>
            <Button className="bg-spw-blue hover:bg-spw-darkblue text-white">
              <Phone className="mr-2 h-4 w-4" />
              +34 123 456 789
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
