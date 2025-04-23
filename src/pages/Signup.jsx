import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) newErrors.username = "Username is required";
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Handle successful signup
        console.log("Form submitted:", formData);
      }, 1500);
    }
  };

  const signInWithGoogle = () => {
    // Google authentication logic would go here
    console.log("Sign in with Google clicked");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950">
      {/* Left Section - Hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-slate-900 to-slate-950 flex-col justify-center items-center p-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
        >
          <p className="text-white text-4xl md:text-5xl font-bold">
            Build Modern <span className="text-orange-400">Applications</span> with 
            <span className="text-orange-400"> Free</span> Database on 
            <motion.span 
              className="text-blue-400 ml-2"
              animate={{ 
                textShadow: ["0 0 5px rgba(96, 165, 250, 0)", "0 0 15px rgba(96, 165, 250, 0.7)", "0 0 5px rgba(96, 165, 250, 0)"] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >CYRIOX</motion.span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <div className="flex space-x-2 justify-center mt-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="h-2 w-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Section */}
      <main className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-slate-950">
        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white"> Welcome</h1>
            <p className="text-gray-200 mt-2">Signup With Us</p>
          </motion.div>
          
          <form className="w-full" onSubmit={handleSubmit}>
            <motion.div variants={itemVariants} className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
              <input
                type="username"
                id="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </motion.div>
            <motion.div variants={itemVariants} className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </motion.div>
            <motion.div variants={itemVariants} className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 flex justify-center items-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Signup"}
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4">
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-700"></div>
                <p className="mx-4 text-sm text-gray-500">or</p>
                <div className="flex-grow h-px bg-gray-700"></div>
              </div>
              
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
              >
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2" alt="Google Logo" />
                Sign in with Google
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="text-xs mt-6 text-gray-500 text-center">
              <p>By signing in, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 text-sm font-medium flex justify-center space-x-4">
           
              <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">Forgot Password?</a>
              <span className="text-gray-500">|</span>
               <Link to="./login" >
             
              <a href="" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">Already have an account? Login</a>
           </Link>
            </motion.div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;