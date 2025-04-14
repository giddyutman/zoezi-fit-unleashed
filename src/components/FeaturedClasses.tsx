
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const classes = [
  {
    id: 1,
    name: "HIIT Training",
    description: "High-intensity interval training that alternates between intense bursts of activity and fixed periods of less-intense activity.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80",
    trainer: "John Doe"
  },
  {
    id: 2,
    name: "Yoga Flow",
    description: "Connect breath to movement in this dynamic yoga class designed to increase flexibility, strength, and mindfulness.",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    trainer: "Jane Smith"
  },
  {
    id: 3,
    name: "Strength Training",
    description: "Build muscle, increase strength, and improve body composition with our comprehensive strength training program.",
    image: "https://images.unsplash.com/photo-1533560777802-046814bc297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    trainer: "Michael Brown"
  }
];

const FeaturedClasses = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Featured Classes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular classes designed to help you achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <div key={cls.id} className="card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{cls.name}</h3>
                  <p className="text-sm text-gray-200">Instructor: {cls.trainer}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{cls.description}</p>
                <Link to="/schedule" className="inline-flex items-center text-zoezi-purple font-semibold hover:text-zoezi-dark-purple transition-colors">
                  Book a Class <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;
