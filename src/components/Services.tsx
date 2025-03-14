
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
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-spw-darkgray max-w-3xl mx-auto">
            We offer a comprehensive range of power washing services to keep your property looking its best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Patio & Driveway Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Patio & Driveway Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Remove dirt, grime, weeds, and stains from your patios, walkways, and driveways to restore their appearance and prevent slipping hazards.
              </p>
              <Button variant="outline" className="text-spw-blue border-spw-blue hover:bg-spw-blue hover:text-white" onClick={scrollToContact}>
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 2 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0ae7d1d6f79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Pool Area Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Pool Area Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Safely clean pool decks, coping stones, and surrounding areas to remove algae, mildew, and dirt for a pristine swimming environment.
              </p>
              <Button variant="outline" className="text-spw-blue border-spw-blue hover:bg-spw-blue hover:text-white" onClick={scrollToContact}>
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 3 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620576537665-c58adb255ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Roof & Exterior Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Roof & Exterior Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Remove moss, lichen, and black streaks from roofs and walls to improve appearance and extend the life of your building materials.
              </p>
              <Button variant="outline" className="text-spw-blue border-spw-blue hover:bg-spw-blue hover:text-white" onClick={scrollToContact}>
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 4 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Fence & Deck Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Fence & Deck Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Restore the natural beauty of your wooden or composite decks and fences by removing dirt, mold, and weathering.
              </p>
              <Button variant="outline" className="text-spw-blue border-spw-blue hover:bg-spw-blue hover:text-white" onClick={scrollToContact}>
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 5 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582480840967-a381e2f0c44e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Commercial Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Maintain a professional appearance for your business with our commercial pressure washing services for storefronts, sidewalks, and more.
              </p>
              <Button variant="outline" className="text-spw-blue border-spw-blue hover:bg-spw-blue hover:text-white" onClick={scrollToContact}>
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Service 6 */}
          <Card className="service-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562884994-d27003d92abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Graffiti Removal" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Graffiti Removal</h3>
              <p className="text-gray-600 mb-4">
                Quickly and effectively remove unwanted graffiti from walls, fences, and other surfaces without damaging the underlying material.
              </p>
              <Button variant="outline" className="text-spw-blue border-spw-blue hover:bg-spw-blue hover:text-white" onClick={scrollToContact}>
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-spw-blue hover:bg-spw-darkblue" onClick={scrollToContact}>
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
