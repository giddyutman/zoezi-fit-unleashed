
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Clock, Users, User, Dumbbell, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Personal Training",
    description: "One-on-one customized training sessions tailored to your specific goals and fitness level.",
    features: [
      "Personalized workout plans",
      "Nutritional guidance",
      "Regular progress assessments",
      "Flexible scheduling"
    ],
    icon: User,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    pricing: [
      {
        name: "Single Session",
        price: 60,
        duration: "60 minutes"
      },
      {
        name: "5 Sessions",
        price: 275,
        duration: "60 minutes each"
      },
      {
        name: "10 Sessions",
        price: 500,
        duration: "60 minutes each"
      }
    ]
  },
  {
    id: 2,
    name: "Group Classes",
    description: "Energetic, instructor-led classes designed to motivate and challenge you in a supportive group environment.",
    features: [
      "Various class types (HIIT, Yoga, Spinning, etc.)",
      "Expert instructors",
      "Motivating group atmosphere",
      "All fitness levels welcome"
    ],
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    pricing: [
      {
        name: "Single Class",
        price: 20,
        duration: "45-60 minutes"
      },
      {
        name: "10 Class Pass",
        price: 180,
        duration: "Valid for 3 months"
      },
      {
        name: "Unlimited Monthly",
        price: 99,
        duration: "Unlimited classes"
      }
    ]
  },
  {
    id: 3,
    name: "Custom Fitness Packages",
    description: "Comprehensive fitness solutions combining personal training, group classes, and nutritional guidance.",
    features: [
      "Holistic approach to fitness",
      "Combined individual and group training",
      "Nutrition and recovery plans",
      "Regular progress tracking"
    ],
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    pricing: [
      {
        name: "Starter Package",
        price: 199,
        duration: "3 personal training sessions + 5 group classes"
      },
      {
        name: "Transformation Package",
        price: 399,
        duration: "8 personal training sessions + unlimited classes for 1 month"
      },
      {
        name: "Elite Package",
        price: 899,
        duration: "16 personal training sessions + unlimited classes for 3 months"
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h1 className="heading-xl text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our comprehensive range of fitness services designed to help you achieve your goals.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center text-white">
                        <Clock size={20} className="mr-2" />
                        <span>{
                          service.pricing[0].duration.includes("minutes")
                            ? service.pricing[0].duration
                            : "Flexible Duration"
                        }</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center justify-center p-3 bg-zoezi-light-purple/30 rounded-lg mb-4">
                    <service.icon size={28} className="text-zoezi-purple" />
                  </div>
                  <h2 className="heading-lg mb-4">{service.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-zoezi-purple">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4">Pricing Options</h3>
                  <div className="space-y-4 mb-8">
                    {service.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-zoezi-purple transition-colors">
                        <div>
                          <h4 className="font-bold">{price.name}</h4>
                          <p className="text-sm text-gray-500">{price.duration}</p>
                        </div>
                        <div className="text-xl font-bold text-zoezi-purple">
                          ${price.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="btn-primary">
                      Book Now
                    </Link>
                    <Link to="/contact" className="inline-flex items-center text-zoezi-purple font-semibold hover:text-zoezi-dark-purple transition-colors">
                      Request More Info <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="hero-gradient section-padding text-white">
        <div className="max-container text-center">
          <h2 className="heading-lg mb-6">Need Help Choosing the Right Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Our fitness experts are here to help you find the perfect solution for your goals. Schedule a free consultation today.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-zoezi-purple hover:bg-gray-200">
            Book a Free Consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
