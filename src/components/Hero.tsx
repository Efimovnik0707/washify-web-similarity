
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-cyan-700 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/5fda4877-21ff-4b05-8e8f-69ab027ce43c.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            #1 Professional Exterior Pressure Washing
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4 opacity-0 animate-fade-in" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Top Rated Exterior Cleaning in Costa Blanca
          </h2>
          <p className="text-white/90 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
            At Spain Power Washing, we specialize in restoring the beauty of your home. Our expert team uses top-quality equipment and eco-friendly products to remove dirt, mold, and grime from any surface. Whether it's your driveway, walls, or roof, we ensure a spotless finish, making your property look fresh and well-maintained — all starting at just €2.5 per square meter.
          </p>
          <div className="mt-8 opacity-0 animate-fade-in" style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
            <Button 
              variant="default"
              onClick={scrollToContact} 
              size="lg" 
              className="bg-cyan-500 text-white hover:bg-cyan-600 transition-all shadow-lg"
            >
              GET A FREE QUOTE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
