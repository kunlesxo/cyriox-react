import React, { useState, useEffect } from 'react';

const WhyCyriox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % 3;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Reliable",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "99.9% uptime guarantee with redundant systems"
    },
    {
      title: "Efficient",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Streamline operations and save valuable time"
    },
    {
      title: "Scalable",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: "Grow your business without IT limitations"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-60 h-60 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-20 left-1/3 w-40 h-40 bg-purple-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className={`max-w-3xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 transition-all duration-700 transform">
          Why choose <span className="text-indigo-600">Cyriox</span>?
        </h2>
        
        <h3 className="text-xl font-semibold text-center text-indigo-700 mb-6 transition-all duration-700 delay-100 transform">
          Custom IT Solutions for Your Business
        </h3>
        
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 transform">
          Cyriox is the ultimate cloud-based solution for distributors, making invoice management, 
          inventory tracking, and payments seamless. Our platform helps you streamline operations 
          and focus on growing your business.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 ${activeCard === index ? 'ring-2 ring-indigo-500 shadow-xl' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveCard(index)}
            >
              <div className={`text-indigo-600 mb-4 transition-all duration-300 transform ${activeCard === index ? 'scale-110' : ''}`}>
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyCyriox;