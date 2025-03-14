
import { useState, useEffect } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Panel */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-800">Need help?</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleExpanded}
              aria-label="Close panel"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">Get a free quote for your power washing needs!</p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={scrollToContact}
              className="bg-spw-blue hover:bg-spw-darkblue text-white py-2 px-4 rounded-md text-sm flex items-center transition-colors"
            >
              <MessageSquare size={16} className="mr-2" /> Request a Quote
            </button>
            <a
              href="tel:+34123456789"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm flex items-center transition-colors"
            >
              <Phone size={16} className="mr-2" /> Call Us Now
            </a>
          </div>
        </div>
      )}
      
      {/* Floating Button */}
      <button
        onClick={toggleExpanded}
        className="bg-gradient-to-r from-spw-blue to-spw-lightblue text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-slow"
        aria-label="Get a quote"
      >
        {isExpanded ? (
          <X size={24} />
        ) : (
          <MessageSquare size={24} />
        )}
      </button>
    </div>
  );
};

export default FloatingCTA;
