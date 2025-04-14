
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Member since 2020",
    quote: "Zoezi Fit has completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the community feels like family. I've achieved results I never thought possible!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "David Mwangi",
    role: "Member since 2021",
    quote: "The personal training at Zoezi Fit is next level. My trainer understood my goals and created a customized plan that's helped me lose 15kg in just 6 months. The facility is clean and the equipment is top-notch.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Amina Kimathi",
    role: "Member since 2019",
    quote: "I've been to many gyms over the years, but none compare to Zoezi Fit. The class variety keeps my workouts interesting, and the trainers really care about proper form and technique. I feel stronger and more confident.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    ));
  };
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isAutoplay) {
      interval = window.setInterval(() => {
        nextTestimonial();
      }, 8000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoplay, currentIndex]);
  
  // Pause autoplay when user interacts with controls
  const handleControlClick = (callback: () => void) => {
    setIsAutoplay(false);
    callback();
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };
  
  return (
    <section className="hero-gradient section-padding text-white">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Members Say</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Don't just take our word for it. Hear from our community of fitness enthusiasts who have transformed their lives with Zoezi Fit.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="mb-6 text-center">
              <Quote size={48} className="mx-auto opacity-60" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="opacity-80">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={() => handleControlClick(prevTestimonial)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleControlClick(nextTestimonial)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleControlClick(() => setCurrentIndex(index))}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
