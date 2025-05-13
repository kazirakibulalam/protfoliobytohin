
import { useState } from 'react';
import { Eye, X, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  type?: 'image' | 'video';
  videoUrl?: string;
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showVideos, setShowVideos] = useState(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Color Killer",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      type: 'image'
    },
    {
      id: 2,
      title: "UX UI Concept",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      type: 'image'
    },
    {
      id: 3,
      title: "App Interface",
      category: "Mobile UI",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      type: 'image'
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      type: 'image'
    },
    {
      id: 5,
      title: "Website Mockup",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      type: 'image'
    },
    {
      id: 6,
      title: "Social Media Kit",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      type: 'image'
    }
  ];
  
  const videoItems: PortfolioItem[] = [
    {
      id: 7,
      title: "Video Project 1",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      type: 'video',
      videoUrl: "https://shrinkme.ink/vY4vVRIq"
    },
    {
      id: 8,
      title: "Video Project 2",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80",
      type: 'video',
      videoUrl: "https://shrinkme.ink/uuKhypJ4"
    },
    {
      id: 9,
      title: "Video Project 3",
      category: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1496559249665-c7e2874707ea?auto=format&fit=crop&w=800&q=80",
      type: 'video',
      videoUrl: "https://shrinkme.ink/KimoaP"
    }
  ];

  const allItems = showVideos ? [...portfolioItems, ...videoItems] : portfolioItems;

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <section id="portfolio" className="bg-navy-light py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Portfolio</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">Recent design projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-card group"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 object-cover"
              />
              <div className="portfolio-card-overlay">
                <div className="text-center">
                  <div className="bg-gold rounded-full p-3 inline-block mb-3">
                    {item.type === 'video' ? (
                      <Play size={24} className="text-navy" />
                    ) : (
                      <Eye size={24} className="text-navy" />
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={toggleVideos} 
            className="btn btn-primary"
          >
            {showVideos ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>

      {/* Lightbox for Images */}
      {selectedItem && selectedItem.type === 'image' && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl w-full bg-navy-light p-4 rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-gold">{selectedItem.category}</p>
              </div>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
            </div>
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}

      {/* Dialog for Videos */}
      <Dialog open={selectedItem?.type === 'video'} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="sm:max-w-[900px] bg-navy-light border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{selectedItem?.title}</h3>
              <p className="text-gold">{selectedItem?.category}</p>
            </div>
            <DialogClose className="text-gray-400 hover:text-white">
              <X size={24} />
            </DialogClose>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded">
            <iframe 
              src={selectedItem?.videoUrl} 
              className="w-full h-full" 
              allowFullScreen
              title={selectedItem?.title}
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
