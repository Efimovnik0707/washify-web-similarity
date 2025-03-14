
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Before/after gallery items with the uploaded images
const galleryItems = [
  {
    id: 1,
    title: 'Patio Cleaning',
    before: '/lovable-uploads/886ca08f-27c1-4896-850f-9a09ba5d8db1.png',
    after: '/lovable-uploads/886ca08f-27c1-4896-850f-9a09ba5d8db1.png',
  },
  {
    id: 2,
    title: 'Driveway Cleaning',
    before: '/lovable-uploads/430f99a8-a2f5-4843-90f7-5b2f03681610.png',
    after: '/lovable-uploads/430f99a8-a2f5-4843-90f7-5b2f03681610.png',
  },
  {
    id: 3,
    title: 'Pavement Cleaning',
    before: '/lovable-uploads/208c62a2-202a-4f4c-a4be-c08b18675b75.png',
    after: '/lovable-uploads/208c62a2-202a-4f4c-a4be-c08b18675b75.png',
  },
  {
    id: 4,
    title: 'Walkway Restoration',
    before: '/lovable-uploads/86e9cd2c-c127-4c0e-a69f-c41c4c198ea3.png',
    after: '/lovable-uploads/86e9cd2c-c127-4c0e-a69f-c41c4c198ea3.png',
  },
  {
    id: 5,
    title: 'Patio Furniture Cleaning',
    before: '/lovable-uploads/b25eef69-bae7-4cdb-87b0-7a26df8c0495.png',
    after: '/lovable-uploads/b25eef69-bae7-4cdb-87b0-7a26df8c0495.png',
  },
  {
    id: 6,
    title: 'Pool Deck Cleaning',
    before: '/lovable-uploads/759e5d05-1b3d-4f44-a776-93acafa826d5.png',
    after: '/lovable-uploads/759e5d05-1b3d-4f44-a776-93acafa826d5.png',
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
                <h3 className="text-2xl font-bold mb-6 text-center">{selectedItem.title}</h3>
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
