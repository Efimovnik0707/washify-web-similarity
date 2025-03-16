
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, WashingMachine, Home, Fence, Building, Umbrella } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of power washing services to keep your property looking its best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Card className="service-card overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <WashingMachine size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Patio & Driveway Cleaning</h3>
              <p className="text-gray-600 mb-auto">
                Remove dirt, grime, weeds, and stains from your patios, walkways, and driveways to restore their appearance and prevent slipping hazards.
              </p>
            </CardContent>
          </Card>
          
          {/* Service 2 */}
          <Card className="service-card overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Droplets size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pool Area Cleaning</h3>
              <p className="text-gray-600 mb-auto">
                Safely clean pool decks, coping stones, and surrounding areas to remove algae, mildew, and dirt for a pristine swimming environment.
              </p>
            </CardContent>
          </Card>
          
          {/* Service 3 */}
          <Card className="service-card overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Home size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Walkway Cleaning</h3>
              <p className="text-gray-600 mb-auto">
                Remove moss, lichen, and stains from walkways to improve appearance and prevent slipping hazards.
              </p>
            </CardContent>
          </Card>
          
          {/* Service 4 */}
          <Card className="service-card overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Fence size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fence & Deck Cleaning</h3>
              <p className="text-gray-600 mb-auto">
                Restore the natural beauty of your wooden or composite decks and fences by removing dirt, mold, and weathering.
              </p>
            </CardContent>
          </Card>
          
          {/* Service 5 */}
          <Card className="service-card overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Building size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-auto">
                Maintain a professional appearance for your business with our commercial pressure washing services for storefronts, sidewalks, and more.
              </p>
            </CardContent>
          </Card>
          
          {/* Service 6 */}
          <Card className="service-card overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Umbrella size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Outdoor Furniture Cleaning</h3>
              <p className="text-gray-600 mb-auto">
                Revitalize your outdoor furniture and make it look like new again with our specialized cleaning techniques.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600" onClick={scrollToContact}>
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
