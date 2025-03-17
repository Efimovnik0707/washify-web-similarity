
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

// Before/after gallery items with the uploaded images
const galleryItems = [
  {
    id: 1,
    title: 'Patio with Table Cleaning',
    before: '/lovable-uploads/B_1.JPEG',
    after: '/lovable-uploads/A_1.JPEG',
  },
  {
    id: 2,
    title: 'Corridor Tile Cleaning',
    before: '/lovable-uploads/B_2.JPEG',
    after: '/lovable-uploads/A_2.JPEG',
  },
  {
    id: 3,
    title: 'Outdoor Kitchen Area',
    before: '/lovable-uploads/B_4.JPEG',
    after: '/lovable-uploads/A_4.JPEG',
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const handleOpenDialog = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Results</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference our power washing services can make. Before and after results that speak for themselves.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item cursor-pointer" onClick={() => handleOpenDialog(item)}>
              <div className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full overflow-hidden relative">
                    <img src={item.before} alt={`${item.title} Before`} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 bg-black/70 text-white text-xs py-1 px-2">Before</div>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden relative">
                    <img src={item.after} alt={`${item.title} After`} className="w-full h-full object-cover" />
                    <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs py-1 px-2">After</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-medium text-center">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl">
            {selectedItem && (
              <div className="p-4">
                <DialogTitle className="text-2xl font-bold mb-6 text-center">{selectedItem.title}</DialogTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="bg-black/70 text-white text-sm py-1 px-3 inline-block">Before</div>
                    <img 
                      src={selectedItem.before} 
                      alt={`${selectedItem.title} Before`} 
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-cyan-500 text-white text-sm py-1 px-3 inline-block">After</div>
                    <img 
                      src={selectedItem.after} 
                      alt={`${selectedItem.title} After`} 
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
