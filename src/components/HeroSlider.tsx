
import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const slides = [
  {
    id: 1,
    title: "House Washing",
    description: "Restore your home's exterior to its original beauty",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 2,
    title: "Deck & Patio Cleaning",
    description: "Revitalize your outdoor living spaces",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Driveway Cleaning",
    description: "First impressions matter - start with a spotless driveway",
    image: "https://images.unsplash.com/photo-1597677154540-bfca1f8d682d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    // Set loaded state after a short delay to allow for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isLoaded ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 10s ease-out'
          }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>
      
      {/* Slide content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 transition-colors rounded-full p-2"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 transition-colors rounded-full p-2"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Play video button */}
      <button 
        className="absolute left-1/2 -translate-x-1/2 bottom-24 z-30 flex items-center space-x-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all px-4 py-2 rounded-full text-white group"
        onClick={() => setIsVideoOpen(true)}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
          <div className="relative bg-white text-spw-blue rounded-full p-2 group-hover:scale-110 transition-transform">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
        <span>Watch Video</span>
      </button>
      
      {/* Video modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black">
          <div className="aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Power Washing Service Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSlider;
