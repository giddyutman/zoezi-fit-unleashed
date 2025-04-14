
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedClasses from "../components/FeaturedClasses";
import Testimonials from "../components/Testimonials";
import { ArrowRight, Dumbbell, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Welcome to Zoezi Fit</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zoezi Fit, we believe that fitness is not just a destination, but a lifelong journey. Our state-of-the-art facility is designed to help you achieve your fitness goals in a supportive and motivating environment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a beginner just starting out or an experienced athlete looking to push your limits, our expert trainers and diverse range of classes ensure there's something for everyone.
              </p>
              <Link to="/about" className="inline-flex items-center text-zoezi-purple font-semibold hover:text-zoezi-dark-purple transition-colors">
                Learn more about us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3031&q=80" 
                alt="Gym interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-zoezi-purple text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">5+ Years</p>
                <p>Of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Zoezi Fit?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a premium fitness experience designed to help you achieve real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Dumbbell size={32} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art fitness equipment to ensure effective and safe workouts.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Users size={32} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Trainers</h3>
              <p className="text-gray-600">
                Certified fitness experts dedicated to helping you reach your goals.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Calendar size={32} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">
                Wide range of class times to accommodate your busy lifestyle.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Award size={32} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Results Guaranteed</h3>
              <p className="text-gray-600">
                Customized fitness plans designed to deliver the results you want.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Classes Section */}
      <FeaturedClasses />
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join Zoezi Fit today and take the first step towards a healthier, stronger you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="btn-primary">
              View Membership Options
            </Link>
            <Link to="/contact" className="btn-secondary text-white border-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Index;
