import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Package, 
  CreditCard, 
  BarChart2, 
  Lock, 
  ShieldCheck, 
  Cloud, 
  Users, 
  TrendingUp, 
  UserPlus, 
  Edit, 
  Bell 
} from "lucide-react";

const features = [
  
  {
    title: "Invoice Management",
    description:
      "Easily create, manage, and send invoices to your customers with Cyriox's smart invoicing system.",
    icon: FileText
  },
  {
    title: "Inventory Tracking",
    description:
      "Keep track of stock levels, get low-stock alerts, and manage your products efficiently.",
    icon: Package
  },
  {
    title: "Payment Integration",
    description:
      "Seamlessly receive payments through Paystack, ensuring secure and easy transactions.",
    icon: CreditCard
  },
  {
    title: "Analytics Dashboard",
    description:
      "Gain insights into sales, invoices, and customer activity with real-time data analytics.",
    icon: BarChart2
  },
  {
    title: "User Access Control",
    description:
      "Different subscription plans allow different levels of access, from invoice viewing to full activity tracking.",
    icon: Lock
  },
  {
    title: "Two-Factor Authentication (2FA)",
    description:
      "Enhance security with 2FA, ensuring that only authorized users can access sensitive data.",
    icon: ShieldCheck
  },
  {
    title: "Cloud-Based Access",
    description:
      "Access your data from anywhere, on any device, with our secure cloud infrastructure.",
    icon: Cloud
  },
  {
    title: "Role-Based Permissions",
    description:
      "Assign roles and permissions to different users within your organization for better security and workflow control.",
    icon: Users
  },
  {
    title: "Automated Reports",
    description:
      "Generate automated reports on sales, inventory, and payments to make data-driven decisions.",
    icon: TrendingUp
  },
  {
    title: "Multi-User Collaboration",
    description:
      "Allow multiple team members to collaborate efficiently with controlled access and real-time updates.",
    icon: UserPlus
  },
  {
    title: "Customizable Invoices",
    description:
      "Personalize invoices with your brand logo, custom fields, and tax calculations for a professional look.",
    icon: Edit
  },
  {
    title: "Real-Time Notifications",
    description:
      "Receive instant alerts for payments, stock levels, and customer activities to stay informed at all times.",
    icon: Bell
  }
];

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function CyrioxFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
    
    // Set the footer to visible after a short delay
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
            Welcome to Cyriox
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
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 px-4 leading-relaxed"
        >
          Cyriox is a powerful cloud-based platform designed to simplify invoice and database
          management for distributors. With features like real-time inventory
          tracking, secure payments, and analytics, Cyriox helps businesses operate
          efficiently.
        </motion.p>
      
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 px-4 leading-relaxed"
        >
          Built with cutting-edge technology, Cyriox offers role-based permissions,
          ensuring the right people have access to the right data at the right time.
        </motion.p>
      </div>
    
      {/* Features Section with Staggered Animation */}
      <motion.div 
        className="w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-blue-600 text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          Powerful Features for Your Business
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-4 md:px-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
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
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-700 text-base flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      
      {/* CTA Section with Lucide Icon */}
      <motion.div
        className="w-full max-w-4xl mx-auto mt-16 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl mb-8">Experience the power of Cyriox today and take your business operations to the next level.</p>
          <motion.button 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </div>
      </motion.div>
      
      {/* Fixed Footer */}
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