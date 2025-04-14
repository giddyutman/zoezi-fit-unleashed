
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrainerCard from "../components/TrainerCard";
import { Check } from "lucide-react";

// Sample trainers data
const trainers = [
  {
    id: 1,
    name: "John Doe",
    role: "Head Trainer / Founder",
    bio: "Certified personal trainer with 10+ years of experience in strength training and weight management.",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1230&q=80",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Yoga Specialist",
    bio: "200-hour certified yoga instructor specializing in vinyasa flow and mindfulness practices.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    socialMedia: {
      instagram: "#",
      facebook: "#"
    }
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Strength Coach",
    bio: "Former college athlete with a passion for helping clients build strength and power.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    socialMedia: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Cardio & HIIT Specialist",
    bio: "Energetic trainer with expertise in high-intensity interval training and cardiovascular fitness.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1652622550740-f90b9f2b1439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h1 className="heading-xl text-white mb-6">About Zoezi Fit</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn about our journey, philosophy, and the dedicated team behind your fitness success.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, Zoezi Fit began with a simple vision: to create a fitness community where everyone feels welcome, supported, and empowered to achieve their personal best.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small studio with just a handful of members has grown into a comprehensive fitness center that maintains the personal touch and community spirit that made us special from day one.
              </p>
              <p className="text-lg text-gray-600">
                Our name "Zoezi" comes from the Swahili word for "exercise," reflecting our connection to the local community and our belief that fitness is a universal language that brings people together.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="Gym equipment" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <div className="w-16 h-1 bg-zoezi-purple mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                To empower individuals of all fitness levels to achieve their health and wellness goals through expert guidance, innovative programming, and a supportive community environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Provide accessible fitness solutions for everyone</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Create a welcoming environment for all fitness levels</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Deliver measurable results through science-based methods</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <div className="w-16 h-1 bg-zoezi-purple mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading fitness community that transforms lives by making health and wellness accessible, enjoyable, and sustainable for everyone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Be the most trusted name in fitness in our community</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Continuously innovate our programs and facilities</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Expand our positive impact on community health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified trainers are passionate about helping you achieve your fitness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map(trainer => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="hero-gradient section-padding text-white">
        <div className="max-container text-center">
          <h2 className="heading-lg mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start your fitness journey with Zoezi Fit today and experience the difference a supportive community can make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="btn-primary bg-white text-zoezi-purple hover:bg-gray-200">
              Explore Memberships
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
