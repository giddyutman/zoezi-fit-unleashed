
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingTable from "../components/PricingTable";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const faqs = [
    {
      question: "What's included in the membership?",
      answer: "All memberships include access to our gym facilities during operational hours. Additional perks vary by membership level and may include group classes, personal training sessions, nutrition consultations, and more."
    },
    {
      question: "Is there a joining fee?",
      answer: "Yes, there is a one-time joining fee of $50 for all new memberships. However, we frequently run promotions where this fee is waived. Check our current promotions for details."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year. A small monthly maintenance fee may apply during the freeze period. Please contact our membership team for details."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Monthly memberships require 30 days' written notice for cancellation. Annual memberships cannot be cancelled unless in exceptional circumstances (e.g., relocation, medical issues)."
    },
    {
      question: "Are there any discounts available?",
      answer: "We offer discounts for students, seniors, military personnel, and corporate partners. Please bring valid ID or proof of status when signing up to receive your discount."
    },
    {
      question: "Can I try before I commit?",
      answer: "Absolutely! We offer a free day pass for first-time visitors. You can also purchase a weekly trial pass to experience all our facilities before committing to a membership."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 max-container text-center">
          <h1 className="heading-xl text-white mb-6">Membership Plans</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose the perfect membership option to fit your fitness goals and budget.
          </p>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Select Your Plan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All memberships include access to our state-of-the-art facilities, locker rooms, and basic amenities.
            </p>
          </div>
          
          <PricingTable />
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              All plans include a one-time $50 joining fee. Prices shown are monthly.
            </p>
            <p className="mb-6">
              Need help choosing the right plan? <Link to="/contact" className="text-zoezi-purple hover:text-zoezi-dark-purple">Contact us</Link> for personalized assistance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Additional Pricing Options */}
      <section className="section-padding bg-gray-50">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Additional Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible payment plans and specialized packages to complement your membership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">Day Pass</h3>
              <p className="text-3xl font-bold mb-2">$20<span className="text-base font-normal text-gray-500">/day</span></p>
              <p className="text-gray-600 mb-6">
                Perfect for visitors or those wanting to try our facilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Full gym access</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Access to group classes (space permitting)</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Locker room access</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-center">Get Day Pass</Link>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">10-Visit Pass</h3>
              <p className="text-3xl font-bold mb-2">$150<span className="text-base font-normal text-gray-500">/pack</span></p>
              <p className="text-gray-600 mb-6">
                Flexible option for occasional gym-goers. Valid for 3 months.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>10 gym visits to use at your convenience</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Access to standard group classes</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>No joining fee</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-center">Purchase Pass</Link>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">Annual Membership</h3>
              <p className="text-3xl font-bold mb-2">Save 20%<span className="text-base font-normal text-gray-500">/year</span></p>
              <p className="text-gray-600 mb-6">
                Commit annually and save 20% compared to monthly payments.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Available for all membership tiers</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>No price increases during your term</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-1 text-zoezi-purple" />
                  <span>Free joining fee (save $50)</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-center">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our membership options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6">
              Still have questions? We're here to help!
            </p>
            <Link to="/contact" className="inline-flex items-center text-zoezi-purple font-semibold hover:text-zoezi-dark-purple transition-colors">
              Contact our membership team <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="hero-gradient section-padding text-white">
        <div className="max-container text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join Zoezi Fit today and take the first step towards achieving your fitness goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-zoezi-purple hover:bg-gray-200">
              Join Now
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/20">
              Book a Tour
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
