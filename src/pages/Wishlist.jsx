import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

export default function DistributorInterestForm() {
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    window.scrollTo(0, 0); // Ensure page starts at the top
    
    // Set the footer to visible after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.companyName.trim()) errors.companyName = "Company name is required";
    if (!formData.contactPerson.trim()) errors.contactPerson = "Contact person is required";
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    const phonePattern = /^\+?[0-9\s-()]{8,20}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.4 
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.01,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-gray-200 p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-blue-400 mb-4"
          >
            Distributor Interest Form
          </motion.h1>
          
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Express your interest in Cyriox's distribution platform by sharing your details below. Our team will promptly review your information and reach out to discuss partnership opportunities.
          </motion.p>
        </motion.div>

        <div className="w-full max-w-xl mx-auto">
          {submitted ? (
            <motion.div
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="bg-slate-800/60 backdrop-blur-sm border border-green-500/20 shadow-lg p-8 rounded-2xl"
            >
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-400 text-center mb-4">Thank You for Your Interest!</h2>
              <p className="text-gray-300 text-center mb-6">We've received your information and will be in touch shortly to discuss how Cyriox can benefit your business operations.</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSubmitted(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                Submit Another Request
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleSubmit}
              className="bg-slate-800/60 backdrop-blur-sm border border-blue-500/20 shadow-lg p-6 md:p-8 rounded-2xl"
            >
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div variants={formVariants} className="mb-5">
                  <label className="block text-gray-300 font-medium mb-2">Company Name</label>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full p-3 bg-slate-700/70 border ${formErrors.companyName ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-blue-500 text-white transition duration-300`}
                  />
                  {formErrors.companyName && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.companyName}</p>
                  )}
                </motion.div>

                <motion.div variants={formVariants} className="mb-5">
                  <label className="block text-gray-300 font-medium mb-2">Contact Person</label>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full p-3 bg-slate-700/70 border ${formErrors.contactPerson ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-blue-500 text-white transition duration-300`}
                  />
                  {formErrors.contactPerson && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.contactPerson}</p>
                  )}
                </motion.div>

                <motion.div variants={formVariants} className="mb-5">
                  <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-slate-700/70 border ${formErrors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-blue-500 text-white transition duration-300`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </motion.div>

                <motion.div variants={formVariants} className="mb-5">
                  <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 bg-slate-700/70 border ${formErrors.phone ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-blue-500 text-white transition duration-300`}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </motion.div>

                <motion.div variants={formVariants} className="mb-6">
                  <label className="block text-gray-300 font-medium mb-2">Message (Optional)</label>
                  <motion.textarea
                    whileFocus="focus"
                    variants={inputVariants}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition duration-300"
                    placeholder="Tell us about your business needs..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </motion.button>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-center text-gray-400 text-sm mt-6"
              >
                By submitting, you agree to our <span className="text-blue-400 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-blue-400 cursor-pointer hover:underline">Privacy Policy</span>
              </motion.p>
            </motion.form>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="mt-16 w-full"
      >
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