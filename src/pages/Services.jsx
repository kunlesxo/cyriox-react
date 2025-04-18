import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import { 
  Database, 
  FileText, 
  Package, 
  CreditCard, 
  BarChart2, 
  Users, 
  Calculator, 
  Globe, 
  UserCheck, 
  Bell, 
  FileBarChart, 
  Plug 
} from "lucide-react";

const services = [
  {
    title: "Cloud Database Management",
    description:
      "Secure and scalable cloud database solutions for distributors to store and manage product, customer, and invoice data with ease.",
    icon: Database
  },
  {
    title: "Custom Invoice Solutions",
    description:
      "Tailored invoicing systems that allow businesses to generate, send, and track invoices effortlessly with automated reminders.",
    icon: FileText
  },
  {
    title: "Inventory Control & Optimization",
    description:
      "Real-time inventory tracking, automated stock alerts, and analytics to help distributors maintain optimal stock levels.",
    icon: Package
  },
  {
    title: "Secure Payment Processing",
    description:
      "Seamless integration with Paystack and other payment gateways, ensuring safe and reliable transactions for businesses and customers.",
    icon: CreditCard
  },
  {
    title: "Analytics & Business Insights",
    description:
      "Detailed reports and analytics dashboards that provide insights into sales trends, customer behavior, and financial performance.",
    icon: BarChart2
  },
  {
    title: "User Role & Access Management",
    description:
      "Control who has access to specific data with multi-user role-based permissions, ensuring security and operational efficiency.",
    icon: Users
  },
  {
    title: "Automated Tax Calculations",
    description:
      "Simplify tax compliance with automated tax calculations, ensuring accurate tax reporting and effortless financial management.",
    icon: Calculator
  },
  {
    title: "Multi-Currency Support",
    description:
      "Enable transactions in multiple currencies, allowing businesses to expand globally with seamless financial operations.",
    icon: Globe
  },
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Track and manage customer interactions, streamline communication, and enhance customer satisfaction with built-in CRM tools.",
    icon: UserCheck
  },
  {
    title: "Automated Email & SMS Notifications",
    description:
      "Keep customers and team members informed with automated email and SMS notifications for payments, stock alerts, and order updates.",
    icon: Bell
  },
  {
    title: "Customizable Reporting Tools",
    description:
      "Generate detailed reports tailored to your business needs, providing insights for better decision-making and growth strategies.",
    icon: FileBarChart
  },
  {
    title: "API Integration Services",
    description:
      "Integrate Cyriox with other business tools and third-party applications using our robust API services for a seamless workflow.",
    icon: Plug
  }
];

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

export default function CyrioxServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-gray-800 p-6 md:p-8 flex flex-col items-center">
      {/* Hero Section with Enhanced Animation */}
      <div className="w-full max-w-6xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Our Services
          </motion.h1>
          
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 px-4 leading-relaxed"
        >
          Cyriox provides a comprehensive suite of services to help distributors efficiently manage their business operations. From cloud-based databases to secure payment processing, we ensure seamless and secure transactions for businesses of all sizes.
        </motion.p>
      </div>
      
      {/* Services Section with Staggered Animation */}
      <motion.div 
        className="w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-4 md:px-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white shadow-md hover:shadow-xl p-6 rounded-xl border-l-4 border-blue-500 flex flex-col h-full transition-all duration-300"
              >
                <div className="mb-4 text-blue-500">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-3">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-700 text-base flex-grow">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      
      {/* Contact CTA Section */}
      <motion.div
        className="w-full max-w-4xl mx-auto mt-16 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Business Operations?</h2>
          <p className="text-lg md:text-xl mb-8">Contact our team today to discover how Cyriox services can be tailored to your specific business needs.</p>
          <motion.button 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Contact Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </motion.button>
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.div 
        className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p>© 2025 Cyriox. All rights reserved.</p>
      </motion.div>
    </div>
  );
}