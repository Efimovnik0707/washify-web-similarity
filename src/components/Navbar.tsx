import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              SPW
            </div>
            <div className="ml-3">
              <h1 className="text-lg md:text-xl font-bold text-cyan-600">Spain Power Washing</h1>
              <p className="text-xs md:text-sm text-gray-600">Professional Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-cyan-50 text-gray-700")} onClick={() => scrollToSection('home')}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-cyan-50 text-gray-700")} onClick={() => scrollToSection('services')}>
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-cyan-50 text-gray-700")} onClick={() => scrollToSection('gallery')}>
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-cyan-50 text-gray-700")} onClick={() => scrollToSection('about')}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-cyan-50 text-gray-700")} onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-cyan-50 text-gray-700")} onClick={() => scrollToSection('contact')}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="tel:+34123456789" className="mr-4 flex items-center text-cyan-600 hover:text-cyan-800 transition-colors">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+34 123 456 789</span>
            </a>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold text-lg bg-slate-700 hover:bg-slate-600">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 z-50 relative" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col space-y-6 text-center">
          <button onClick={() => scrollToSection('home')} className="text-xl font-medium text-gray-800 hover:text-cyan-600 transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-xl font-medium text-gray-800 hover:text-cyan-600 transition-colors">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="text-xl font-medium text-gray-800 hover:text-cyan-600 transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('about')} className="text-xl font-medium text-gray-800 hover:text-cyan-600 transition-colors">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-xl font-medium text-gray-800 hover:text-cyan-600 transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-xl font-medium text-gray-800 hover:text-cyan-600 transition-colors">Contact</button>
          
          <div className="pt-6 flex flex-col space-y-4">
            <a href="tel:+34123456789" className="flex items-center justify-center text-cyan-600 hover:text-cyan-800 transition-colors">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+34 123 456 789</span>
            </a>
            <Button size="lg" className="mt-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg hover:scale-105 transition-all text-white" onClick={() => scrollToSection('contact')}>
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>;
};
export default Navbar;