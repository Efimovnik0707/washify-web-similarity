
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/759e5d05-1b3d-4f44-a776-93acafa826d5.png" 
                alt="Patio & Driveway Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Patio & Driveway Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Remove dirt, grime, weeds, and stains from your patios, walkways, and driveways to restore their appearance and prevent slipping hazards.
              </p>
              <Button variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={scrollToContact}>
                Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 2 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/430f99a8-a2f5-4843-90f7-5b2f03681610.png" 
                alt="Pool Area Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Pool Area Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Safely clean pool decks, coping stones, and surrounding areas to remove algae, mildew, and dirt for a pristine swimming environment.
              </p>
              <Button variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={scrollToContact}>
                Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 3 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/886ca08f-27c1-4896-850f-9a09ba5d8db1.png" 
                alt="Walkway Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Walkway Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Remove moss, lichen, and stains from walkways to improve appearance and prevent slipping hazards.
              </p>
              <Button variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={scrollToContact}>
                Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 4 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/208c62a2-202a-4f4c-a4be-c08b18675b75.png" 
                alt="Fence & Deck Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Fence & Deck Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Restore the natural beauty of your wooden or composite decks and fences by removing dirt, mold, and weathering.
              </p>
              <Button variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={scrollToContact}>
                Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 5 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/86e9cd2c-c127-4c0e-a69f-c41c4c198ea3.png" 
                alt="Commercial Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Maintain a professional appearance for your business with our commercial pressure washing services for storefronts, sidewalks, and more.
              </p>
              <Button variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={scrollToContact}>
                Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 6 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/b25eef69-bae7-4cdb-87b0-7a26df8c0495.png" 
                alt="Outdoor Furniture Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Outdoor Furniture Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Revitalize your outdoor furniture and make it look like new again with our specialized cleaning techniques.
              </p>
              <Button variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={scrollToContact}>
                Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
