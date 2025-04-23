import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { ArrowRight, CheckCircle, XCircle, BarChart3, CreditCard, Package, Users, FileText, Globe } from 'lucide-react';

const MoreFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Invoice Management",
      description: "Automate invoicing, send reminders, and download invoices in PDF format."
    },
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: "Smart Inventory Tracking",
      description: "Monitor stock in real-time and get alerts for low inventory."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Multi-User Access",
      description: "Grant different roles for admins, managers, and sales reps."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Integrated Payments",
      description: "Customers can pay invoices instantly via Paystack."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Business Analytics",
      description: "Track sales trends and generate revenue reports."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Multi-Currency & Language",
      description: "Support for multiple currencies and languages for global sales."
    }
  ];

  const comparisonData = [
    { feature: "Invoice Automation", cyriox: true, manual: false },
    { feature: "Real-time Inventory", cyriox: true, manual: false },
    { feature: "Online Payment Integration", cyriox: true, manual: false },
    { feature: "Cloud-Based Access", cyriox: true, manual: false },
    { feature: "Business Analytics", cyriox: true, manual: false }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-16 px-6">
      <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-6">Why Choose Cyriox?</h2>
        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
          Empowering distributors with seamless cloud-based invoice and inventory management.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white border-opacity-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-3 mb-3">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            <p className="text-blue-100">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className={`max-w-6xl mx-auto mt-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '600ms' }}>
        <h3 className="text-3xl font-bold text-center mb-8">Cyriox vs. Traditional Methods</h3>
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <table className="w-full text-left bg-gradient-to-r from-blue-900 to-blue-800">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 border-b border-blue-600">Feature</th>
                <th className="p-4 border-b border-blue-600">Cyriox</th>
                <th className="p-4 border-b border-blue-600">Traditional</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-blue-800 bg-opacity-40' : 'bg-blue-900 bg-opacity-40'}>
                  <td className="p-4 border-b border-blue-700">{row.feature}</td>
                  <td className="p-4 border-b border-blue-700">
                    <CheckCircle className="text-green-400 w-5 h-5" />
                  </td>
                  <td className="p-4 border-b border-blue-700">
                    <XCircle className="text-red-400 w-5 h-5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className={`text-center mt-14 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '800ms' }}>
            <Link to ="./wishlist">
        <a 
          href="" 
          className="group px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
        >
          <span>Get Started Today</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        </Link>
      </div>
    </section>
  );
};

export default MoreFeatures;