import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const About = () => {
  return <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Spain Power Washing</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're professional power washing experts serving homeowners and businesses across Spain with high-quality exterior cleaning services.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-stretch px-[194px] py-[11px] mx-0 rounded-none my-[4px]">
          <div className="h-full flex items-center">
            <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
              <img src="/lovable-uploads/About_1.jpg" alt="Power washing service" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">The Right Way, The Right Time</h3>
            <p className="mb-6 text-gray-700">
              With years of experience and a commitment to excellence, Spain Power Washing delivers outstanding results that rejuvenate your property's appearance. We use professional-grade equipment and eco-friendly cleaning solutions to safely and effectively clean all exterior surfaces.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mr-3" />
                <div>
                  <h4 className="font-semibold">Experienced Professionals</h4>
                  <p className="text-sm text-gray-600">Our trained technicians know exactly how to treat every surface.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mr-3" />
                <div>
                  <h4 className="font-semibold">High-Quality Equipment</h4>
                  <p className="text-sm text-gray-600">We use commercial-grade machines for superior cleaning performance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mr-3" />
                <div>
                  <h4 className="font-semibold">Eco-Friendly Solutions</h4>
                  <p className="text-sm text-gray-600">Our cleaning products are effective yet safe for your family and the environment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mr-3" />
                <div>
                  <h4 className="font-semibold">100% Satisfaction Guarantee</h4>
                  <p className="text-sm text-gray-600">We're not happy until you're completely satisfied with our work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                </div>
                <h3 className="text-xl font-bold">Quality Service</h3>
                <p className="text-gray-600 mt-2">We deliver exceptional results that meet and exceed expectations.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <h3 className="text-xl font-bold">Prompt Service</h3>
                <p className="text-gray-600 mt-2">We value your time and always arrive as scheduled.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-euro"><path d="M4 10h12" /><path d="M4 14h9" /><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" /></svg>
                </div>
                <h3 className="text-xl font-bold">Competitive Pricing</h3>
                <p className="text-gray-600 mt-2">Fair, transparent rates without compromising on quality.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2H2.39a2 2 0 0 0-1.73 3l6.33 8.41a2 2 0 0 0 3.06.24L12 12l1.94 1.65a2 2 0 0 0 3.06-.24L23.33 5a2 2 0 0 0-1.73-3h-2.72L13 12" /><circle cx="12" cy="17" r="5" /><path d="M12 18v-2" /><path d="M10.5 13.5a3.5 3.5 0 0 0-2.8 5.6" /><path d="M13.5 13.5a3.5 3.5 0 0 1 2.8 5.6" /></svg>
                </div>
                <h3 className="text-xl font-bold">Experienced Team</h3>
                <p className="text-gray-600 mt-2">Our professionals have years of industry experience.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;