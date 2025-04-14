
import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitted: false,
    loading: false,
    error: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      // This would be replaced with actual form submission logic
      const success = Math.random() > 0.2; // 80% success rate for demo
      
      if (success) {
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
          submitted: true,
          loading: false,
          error: false
        });
      } else {
        setFormState(prev => ({
          ...prev,
          loading: false,
          error: true
        }));
      }
    }, 1500);
  };
  
  return (
    <div className="card p-8">
      {formState.submitted ? (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Message sent successfully!
          </div>
          <p className="mb-6">Thank you for contacting us. We'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {formState.error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
              There was an error sending your message. Please try again.
            </div>
          )}
          
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zoezi-purple"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zoezi-purple"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zoezi-purple"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zoezi-purple"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={formState.loading}
            className="btn-primary w-full flex items-center justify-center"
          >
            {formState.loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <Send size={18} className="mr-2" />
            )}
            {formState.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
