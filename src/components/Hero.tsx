
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80')",
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 max-container min-h-[80vh] flex flex-col justify-center items-start py-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Body, <span className="text-zoezi-purple">Transform Your Life</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            At Zoezi Fit, we're committed to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a supportive community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Join Now
            </Link>
            <Link to="/services" className="btn-secondary text-white border-white hover:text-zoezi-dark hover:border-zoezi-light-purple">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
