import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: "Home", href: "." },
    { name: "About Us", href: "./about" },
    { name: "Services", href: "./service" },
    { name: "Pricing", href: "./" },
    { name: "Contact", href: "#" }
  ];
  
  const services = [
    { name: "Invoice Management", href: "#" },
    { name: "Inventory Tracking", href: "#" },
    { name: "Analytics & Reports", href: "#" },
    { name: "Payment Integration", href: "#" }
  ];
  
  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/cyriox" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/cyriox" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/cyriox" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/cyriox" }
  ];

  // WhatsApp phone number
  const whatsappNumber = "+2348115212158";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}`;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">C</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Cyriox</h2>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Cloud-based solutions for seamless invoice management, inventory tracking, and payments.
            </p>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '100ms' }}>
            <h3 className="text-lg font-semibold border-b border-blue-700 pb-2 inline-block">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-semibold border-b border-blue-700 pb-2 inline-block">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '300ms' }}>
            <h3 className="text-lg font-semibold border-b border-blue-700 pb-2 inline-block">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="ml-2 text-gray-300">34, Nujimu street Alakuko lagos</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:support@cyriox.com" className="ml-2 text-gray-300 hover:text-blue-400 transition-colors">
                  support@cyriox.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+2348115212158" className="ml-2 text-gray-300 hover:text-blue-400 transition-colors">
                  +234 8115212158
                </a>
              </li>
              
              {/* WhatsApp Link - Added */}
              <li className="flex items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-300 hover:text-green-400 transition-colors">
                  Chat on WhatsApp
                </a>
              </li>

              <li className="pt-4">
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="mt-3 flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                    >
                      <span className="text-blue-400">{social.icon}</span>
                      <span className="text-sm text-gray-300">{social.name}</span>
                    </a>
                  ))}
                  
                  {/* WhatsApp Social Button - Added */}
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                  >
                    <span className="text-green-500">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300">WhatsApp</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionDelay: '400ms' }}>
          <p>© 2025 Cyriox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;