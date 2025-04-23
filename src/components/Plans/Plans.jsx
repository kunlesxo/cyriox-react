import React, { useEffect, useState } from 'react';
import { Check, X, ChevronRight, Crown, Star, Building } from 'lucide-react';
import { Link } from "react-router-dom";


const Plans = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const pricingPlans = [
    {
      name: "Basic",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      description: "For small businesses",
      price: "$9.99/mo",
      features: [
        { name: "Invoice Management", included: true },
        { name: "Inventory Tracking", included: true },
        { name: "24/7 Support", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Custom Branding", included: false }
      ],
      popular: false
    },
    {
      name: "Pro",
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      description: "Best for growing businesses",
      price: "$19.99/mo",
      features: [
        { name: "Everything in Basic", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom Branding", included: true },
        { name: "Multiple User Access", included: true },
        { name: "API Integration", included: false }
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: <Building className="w-6 h-6 text-yellow-400" />,
      description: "For large-scale operations",
      price: "$49.99/mo",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "API Integration", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Priority Support", included: true },
        { name: "Custom Workflows", included: true }
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">Choose Your Plan</h2>
        <p className="text-center text-blue-200 mt-3 max-w-2xl mx-auto">
          Flexible pricing tailored to your business needs
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`w-full md:w-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden transition-all duration-700 ease-out
                ${plan.popular ? 'shadow-2xl shadow-blue-500/20 border-2 border-blue-500' : 'shadow-xl border border-gray-700'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:transform hover:scale-105 hover:shadow-2xl`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {plan.icon}
                  <h3 className="text-xl font-bold text-center">{plan.name}</h3>
                </div>
                <p className="text-center text-gray-400 text-sm">{plan.description}</p>
                <div className="mt-4 text-center">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
                
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`flex items-center space-x-3 ${feature.included ? 'text-white' : 'text-gray-500'}`}
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      )}
                      <span className="text-sm">{feature.name}</span>
                    </div>
                  ))}
                </div>
                <Link to="./wishlist">
                <a href="" className="block mt-8">
                  <button 
                    className={`w-full group flex items-center justify-center space-x-2 py-3 rounded-lg transition-all duration-300
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white' 
                        : 'bg-blue-900 hover:bg-blue-800 text-white'}`}
                  >
                    <span>Get Started</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;