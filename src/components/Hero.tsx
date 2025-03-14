
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroSlider from './HeroSlider';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 h-screen min-h-[600px] max-h-[800px] bg-spw-blue overflow-hidden">
      {/* Background Slider */}
      <HeroSlider />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Commercial & Residential Pressure Washing Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
            Restore your property's beauty with Spain's top-rated power washing service
          </p>
          <div className="flex flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
            <Button 
              variant="default"
              onClick={scrollToContact} 
              size="lg" 
              className="bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all shadow-lg"
            >
              Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20 hover:scale-105 transition-all shadow-lg"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
