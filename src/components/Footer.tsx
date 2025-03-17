import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 py-[4px] px-0 mx-0 my-0">
          {/* Company Info */}
          <div className="mx-0">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Spain Power Washing Logo" className="h-10 mr-3" />
              <div>
                <h3 className="font-bold text-base">Spain Power Washing</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional power washing services for residential and commercial properties across Spain.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-spw-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-spw-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-spw-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="my-0 mx-[47px] px-[14px]">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Our Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition-colors">Gallery</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Testimonials</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact Us</button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="mx-[22px]">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Patio & Driveway Cleaning</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Pool Area Cleaning</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Roof & Exterior Cleaning</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Fence & Deck Cleaning</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Commercial Cleaning</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Graffiti Removal</button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="my-0 mx-[13px]">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+34123456789" className="hover:text-white transition-colors">+34 123 456 789</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:info@spainpowerwashing.es" className="hover:text-white transition-colors">info@spainpowerwashing.es</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Hours:</span>
                <span>Mon-Fri: 8am - 7pm</span><br />
                <span>Sat: 9am - 5pm</span>
              </li>
            </ul>
            <Button className="mt-4 bg-spw-blue hover:bg-spw-darkblue" onClick={() => scrollToSection('contact')}>
              Get a Free Quote
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Spain Power Washing. All rights reserved.
            </p>
            <div className="flex space-x-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;