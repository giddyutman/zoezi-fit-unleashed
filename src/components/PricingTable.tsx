
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49,
    interval: 'month',
    description: 'Perfect for beginners looking to start their fitness journey.',
    features: [
      'Access to gym facilities',
      'Basic fitness assessment',
      'Access to standard group classes',
      'Locker room access',
    ],
    recommended: false,
    buttonText: 'Get Started'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 89,
    interval: 'month',
    description: 'Our most popular plan for dedicated fitness enthusiasts.',
    features: [
      'Access to gym facilities',
      'Comprehensive fitness assessment',
      'Access to all group classes',
      'One free personal training session/month',
      'Nutrition consultation',
      'Locker room access',
    ],
    recommended: true,
    buttonText: 'Get Premium'
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 149,
    interval: 'month',
    description: 'The ultimate fitness experience with personalized coaching.',
    features: [
      'Access to gym facilities',
      'Advanced fitness assessment',
      'Access to all group classes',
      'Four personal training sessions/month',
      'Customized nutrition plan',
      'Wellness coaching',
      'Priority class booking',
      'Premium locker room access',
    ],
    recommended: false,
    buttonText: 'Go Elite'
  }
];

const PricingTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div 
          key={plan.id} 
          className={`card p-8 border transition-all duration-300 hover:translate-y-[-10px] relative ${
            plan.recommended 
              ? 'border-zoezi-purple shadow-lg' 
              : 'border-gray-200'
          }`}
        >
          {plan.recommended && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zoezi-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-500 mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500">/{plan.interval}</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1">
                  <Check size={16} className="text-zoezi-purple" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center">
            <Link
              to="/contact"
              className={`w-full block py-3 px-4 rounded-md font-semibold transition-colors ${
                plan.recommended
                  ? 'bg-zoezi-purple hover:bg-zoezi-dark-purple text-white'
                  : 'bg-white border-2 border-zoezi-purple text-zoezi-purple hover:bg-zoezi-light-purple/20'
              }`}
            >
              {plan.buttonText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
