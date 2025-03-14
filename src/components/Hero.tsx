
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-gradient-to-r from-spw-blue to-spw-lightblue text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Professional Power Washing Services in Spain
            </h1>
            <p className="text-lg mb-8 text-white/90 max-w-lg">
              We clean patios, driveways, pool decks, roofs, and more. Restore your property's appearance with our high-quality power washing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-white text-spw-blue hover:bg-gray-100">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" /> Call Us: +34 123 456 789
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Our Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <span>Patio & Driveway Cleaning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <span>Pool Area Cleaning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <span>Roof & Exterior Wall Cleaning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <span>Commercial Property Cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
