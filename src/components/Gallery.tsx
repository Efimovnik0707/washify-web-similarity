
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Sample before/after images
const galleryItems = [
  {
    id: 1,
    title: 'Patio Cleaning',
    before: 'https://images.unsplash.com/photo-1621886292650-520f76c747d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    after: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    title: 'Driveway Cleaning',
    before: 'https://images.unsplash.com/photo-1628249474805-48885b7b9200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    after: 'https://images.unsplash.com/photo-1597677154540-bfca1f8d682d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Deck Restoration',
    before: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    after: 'https://images.unsplash.com/photo-1591156502610-3dcee0ed65d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: 4,
    title: 'Exterior Wall Cleaning',
    before: 'https://images.unsplash.com/photo-1615300236079-4bdb43bd9a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    after: 'https://images.unsplash.com/photo-1563320974-2edbd7d31b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: 5,
    title: 'Pool Deck Cleaning',
    before: 'https://images.unsplash.com/photo-1590561459725-74b0cc5de226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    after: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 6,
    title: 'Roof Cleaning',
    before: 'https://images.unsplash.com/photo-1631691621443-b0a4173fc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    after: 'https://images.unsplash.com/photo-1632833239869-a47e22373cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
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
    <section id="gallery" className="section-padding bg-spw-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-spw-darkgray max-w-3xl mx-auto">
            See the dramatic difference our power washing services can make. Before and after results that speak for themselves.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item cursor-pointer" onClick={() => handleOpenDialog(item)}>
              <div className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full overflow-hidden">
                    <img src={item.before} alt={`${item.title} Before`} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 bg-black/70 text-white text-xs py-1 px-2">Before</div>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden">
                    <img src={item.after} alt={`${item.title} After`} className="w-full h-full object-cover" />
                    <div className="absolute top-0 right-0 bg-spw-blue/90 text-white text-xs py-1 px-2">After</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
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
                    <div className="bg-spw-blue/90 text-white text-sm py-1 px-3 inline-block">After</div>
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
