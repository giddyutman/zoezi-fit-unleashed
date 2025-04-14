
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    category: 'facilities',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Gym equipment area',
    title: 'State-of-the-art Equipment'
  },
  {
    id: 2,
    category: 'facilities',
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
    alt: 'Cardio area',
    title: 'Cardio Zone'
  },
  {
    id: 3,
    category: 'facilities',
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Weights area',
    title: 'Free Weights Area'
  },
  {
    id: 4,
    category: 'classes',
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Group fitness class',
    title: 'HIIT Class'
  },
  {
    id: 5,
    category: 'classes',
    src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Yoga class',
    title: 'Yoga Flow Session'
  },
  {
    id: 6,
    category: 'trainers',
    src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Personal trainer with client',
    title: 'Personal Training'
  },
  {
    id: 7,
    category: 'events',
    src: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80',
    alt: 'Community fitness event',
    title: 'Annual Fitness Challenge'
  },
  {
    id: 8,
    category: 'facilities',
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80',
    alt: 'Locker room',
    title: 'Modern Locker Rooms'
  },
  {
    id: 9,
    category: 'members',
    src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Happy gym members',
    title: 'Member Success Stories'
  },
  {
    id: 10,
    category: 'classes',
    src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Strength training class',
    title: 'Strength Training Class'
  },
  {
    id: 11,
    category: 'trainers',
    src: 'https://images.unsplash.com/photo-1533560777802-046814bc297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Trainer helping with weights',
    title: 'Expert Guidance'
  },
  {
    id: 12,
    category: 'events',
    src: 'https://images.unsplash.com/photo-1601412248910-33c1922ab15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    alt: 'Fitness workshop',
    title: 'Nutrition Workshop'
  }
];

// Gallery categories
const categories = [
  { value: 'all', label: 'All Photos' },
  { value: 'facilities', label: 'Facilities' },
  { value: 'classes', label: 'Classes' },
  { value: 'trainers', label: 'Trainers' },
  { value: 'members', label: 'Members' },
  { value: 'events', label: 'Events' }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);
  
  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1637666620963-babeebf9937a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2448&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h1 className="heading-xl text-white mb-6">Photo Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Take a visual tour of our facilities, classes, trainers, and community.
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-zoezi-purple text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-64"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-gray-200 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      {/* CTA Section */}
      <section className="hero-gradient section-padding text-white">
        <div className="max-container text-center">
          <h2 className="heading-lg mb-6">Experience Zoezi Fit in Person</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Pictures can only show so much. Visit us today to experience our facilities and community firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-zoezi-purple hover:bg-gray-200">
              Book a Tour
            </Link>
            <Link to="/pricing" className="btn-secondary border-white text-white hover:bg-white/20">
              Join Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
