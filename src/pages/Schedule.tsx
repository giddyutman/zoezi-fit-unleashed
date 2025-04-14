
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClassSchedule from "../components/ClassSchedule";
import { Link } from "react-router-dom";
import { Clock, Calendar, Users } from "lucide-react";

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h1 className="heading-xl text-white mb-6">Class Schedule</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find the perfect class to fit your schedule and fitness goals.
          </p>
        </div>
      </section>
      
      {/* Schedule Information */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Weekly Class Schedule</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With a variety of classes throughout the week, there's always something to suit your schedule and fitness preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Clock size={28} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Monday - Friday:</span> 5:30 AM - 10:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 7:00 AM - 8:00 PM</p>
                <p><span className="font-medium">Sunday:</span> 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Calendar size={28} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Class Duration</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Standard Classes:</span> 45-60 minutes</p>
                <p><span className="font-medium">Express Classes:</span> 30 minutes</p>
                <p><span className="font-medium">Specialized Classes:</span> 75-90 minutes</p>
              </div>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="bg-zoezi-light-purple/30 p-4 rounded-full mb-4">
                <Users size={28} className="text-zoezi-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Booking Policy</h3>
              <div className="space-y-2">
                <p>Classes can be booked up to 7 days in advance</p>
                <p>Members can cancel up to 3 hours before class</p>
                <p>Late cancellations may result in a fee</p>
              </div>
            </div>
          </div>
          
          {/* Class Schedule */}
          <ClassSchedule />
        </div>
      </section>
      
      {/* Class Descriptions */}
      <section className="section-padding bg-gray-50">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Class Descriptions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our diverse range of classes to find the perfect fit for your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2 text-zoezi-purple">HIIT Training</h3>
              <p className="text-gray-600 mb-4">
                High-Intensity Interval Training alternates between intense bursts of activity and fixed periods of less-intense activity or rest. This class improves cardiovascular fitness, builds strength, and maximizes calorie burn.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Intensity Level:</span> High | <span className="font-medium">Duration:</span> 45 minutes
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Yoga Flow</h3>
              <p className="text-gray-600 mb-4">
                Connect breath to movement in this dynamic yoga class designed to increase flexibility, strength, and mindfulness. Suitable for all levels with modifications provided.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Intensity Level:</span> Low to Moderate | <span className="font-medium">Duration:</span> 60-75 minutes
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2 text-green-600">Strength Training</h3>
              <p className="text-gray-600 mb-4">
                Build muscle, increase strength, and improve body composition with our comprehensive strength training program. Uses a mix of free weights, resistance bands, and bodyweight exercises.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Intensity Level:</span> Moderate to High | <span className="font-medium">Duration:</span> 60 minutes
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-600">Spin Class</h3>
              <p className="text-gray-600 mb-4">
                An energetic indoor cycling workout that combines rhythm, music, and instructor-guided visualization to create an engaging, high-energy cardio experience.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Intensity Level:</span> Moderate to High | <span className="font-medium">Duration:</span> 45 minutes
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-600">Pilates</h3>
              <p className="text-gray-600 mb-4">
                Focus on core strength, posture, and flexibility through controlled movements. Pilates improves muscular balance, coordination, and builds a strong foundation for all physical activities.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Intensity Level:</span> Low to Moderate | <span className="font-medium">Duration:</span> 60 minutes
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2 text-red-600">Boxing</h3>
              <p className="text-gray-600 mb-4">
                Learn boxing techniques while getting a full-body workout. This class improves cardiovascular fitness, strength, coordination, and is a great stress reliever.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Intensity Level:</span> High | <span className="font-medium">Duration:</span> 60 minutes
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="hero-gradient section-padding text-white">
        <div className="max-container text-center">
          <h2 className="heading-lg mb-6">Ready to Join a Class?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Book your spot today and experience the energy and motivation of our group fitness classes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-zoezi-purple hover:bg-gray-200">
              Book a Class
            </Link>
            <Link to="/pricing" className="btn-secondary border-white text-white hover:bg-white/20">
              View Memberships
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Schedule;
