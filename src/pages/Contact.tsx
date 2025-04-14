
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1527266237111-a4989d028b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h1 className="heading-xl text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're here to help with any questions you may have about Zoezi Fit.
          </p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="heading-lg mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have questions about our services, need help with your membership, or want to provide feedback, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-zoezi-light-purple/30 p-3 rounded-lg mr-4">
                    <MapPin className="text-zoezi-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Fitness Avenue, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zoezi-light-purple/30 p-3 rounded-lg mr-4">
                    <Phone className="text-zoezi-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">+254 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zoezi-light-purple/30 p-3 rounded-lg mr-4">
                    <Mail className="text-zoezi-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">info@zoezifit.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zoezi-light-purple/30 p-3 rounded-lg mr-4">
                    <Clock className="text-zoezi-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 5:30 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday: 7:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zoezi-light-purple/30 p-3 rounded-lg mr-4">
                    <MessageSquare className="text-zoezi-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-gray-600 hover:text-zoezi-purple transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-zoezi-purple transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-zoezi-purple transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.3 7.9-4.9A8 8 0 0 0 22 4z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-zoezi-purple transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
          
          {/* Map Section */}
          <div>
            <h2 className="heading-md mb-6 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              {/* Replace with actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.61066936123!2d36.7792599!3d-1.300517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1649855499746!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Zoezi Fit Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
