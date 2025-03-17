import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon."
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };
  return <section id="contact" className="section-padding bg-spw-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-spw-darkgray max-w-3xl mx-auto">
            Ready to restore your property's appearance? Get in touch with us today for a free quote or to schedule your power washing service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 px-[127px] py-[8px] my-0 mx-0">
          {/* Contact Form */}
          <Card className="shadow-lg overflow-hidden px-[6px] py-[34px] my-[61px]">
            <CardContent className="p-0">
              <div className="p-6 rounded bg-cyan-700 px-[13px] mx-[35px]">
                <h3 className="text-2xl font-bold text-white mb-2 my-0 py-0 mx-[17px]">Get a Free Quote</h3>
                <p className="text-white/90 mx-[18px]">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <div className="p-6 px-[37px] py-[31px]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+34 123 456 789" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                      <option value="" disabled>Select a service</option>
                      <option value="Patio & Driveway Cleaning">Patio & Driveway Cleaning</option>
                      <option value="Pool Area Cleaning">Pool Area Cleaning</option>
                      <option value="Roof & Exterior Cleaning">Roof & Exterior Cleaning</option>
                      <option value="Fence & Deck Cleaning">Fence & Deck Cleaning</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Graffiti Removal">Graffiti Removal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your needs..." rows={4} required />
                  </div>
                  
                  <Button type="submit" disabled={isLoading} className="w-full bg-cyan-800 hover:bg-cyan-700">
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6 py-[37px] px-[4px] my-[22px]">
            <Card className="shadow-md">
              <CardContent className="p-6 px-[21px] my-0 py-[13px] mx-0">
                <div className="flex items-start py-0">
                  <div className="h-10 w-10 rounded-full bg-spw-blue/10 flex items-center justify-center text-spw-blue mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">We're available Monday to Saturday, 8am - 7pm</p>
                    <a href="tel:+34123456789" className="text-spw-blue font-medium hover:underline flex items-center mt-1">
                      +34 123 456 789 <ArrowUpRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6 py-[16px]">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-spw-blue/10 flex items-center justify-center text-spw-blue mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">For quotes or general inquiries</p>
                    <a href="mailto:info@spainpowerwashing.es" className="text-spw-blue font-medium hover:underline flex items-center mt-1">
                      info@spainpowerwashing.es <ArrowUpRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6 py-[13px]">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-spw-blue/10 flex items-center justify-center text-spw-blue mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Areas</h3>
                    <p className="text-gray-600">We serve the following regions in Spain:</p>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>- Costa del Sol (Malaga, Marbella, Estepona)</li>
                      <li>- Costa Blanca (Alicante, Benidorm, Torrevieja)</li>
                      <li>- Valencia Region</li>
                      <li>- Barcelona Area</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6 py-[18px]">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-spw-blue/10 flex items-center justify-center text-spw-blue mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 7:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;