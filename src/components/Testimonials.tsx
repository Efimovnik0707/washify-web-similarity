
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    location: 'Marbella',
    quote: 'Spain Power Washing completely transformed our patio area. It looked like new again! Professional service from start to finish.',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    location: 'Malaga',
    quote: 'I was amazed at the difference in our driveway. Years of dirt and grime gone in just a few hours. Highly recommend their services!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sofia Garcia',
    location: 'Alicante',
    quote: 'Great company with excellent customer service. They cleaned our pool area and it looks amazing. Very thorough and professional.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Williams',
    location: 'Barcelona',
    quote: 'We use Spain Power Washing for all our rental properties. Reliable, efficient, and they always do a fantastic job. Highly recommended.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ana Fernandez',
    location: 'Valencia',
    quote: 'The team was professional and did an amazing job cleaning our roof and gutters. Will definitely use their services again!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Robert Johnson',
    location: 'Ibiza',
    quote: 'Outstanding service! They cleaned our villa exterior before the summer season and it looks brand new. Very impressed!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-spw-darkgray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied customers have to say about Spain Power Washing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="h-10 w-10 bg-spw-blue/10 rounded-full flex items-center justify-center text-spw-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
