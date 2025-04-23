import React, { useEffect, useRef } from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

// Note: You'll need to replace this with your actual video asset
import databaseVideo from "../assets/video1.mp4"; 
import pictures from "../assets/place hoder.png";
import picturess from "../assets/placeholder 3.jpg";
import picture from "../assets/place holder 2.png";



const First = () => {
  <Navbar />
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Data-themed particle system
    const particles = [];
    const numParticles = 120;
    const connectionDistance = 180;

    // Add interactive cursor effect
    let mouse = {
      x: undefined,
      y: undefined,
      radius: 150
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Particle {
      constructor() {
        // Create a grid-like distribution for a more organized, database-like feel
        this.x = Math.floor(Math.random() * 20) * (canvas.width / 20);
        this.y = Math.floor(Math.random() * 20) * (canvas.height / 20);
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        // Create a data-like color scheme
        this.color = Math.random() > 0.8 ? 'rgba(79, 209, 197, 0.8)' : 
                    (Math.random() > 0.5 ? 'rgba(64, 145, 247, 0.8)' : 'rgba(255, 255, 255, 0.6)');
      }

      update() {
        // Slight movement for a "data flow" effect
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check with smoother transition
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1;
        }

        // Mouse interaction for interactive feel
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            const directionX = forceDirectionX * force * this.density * -0.8;
            const directionY = forceDirectionY * force * this.density * -0.8;
            
            this.x += directionX;
            this.y += directionY;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      // Create data network visualization
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            const lineColor = particles[a].color === particles[b].color ? 
                             particles[a].color.replace('0.8', opacity * 0.4) : 
                             'rgba(255, 255, 255, ' + opacity * 0.2 + ')';
            
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = opacity * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark professional background with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(13, 17, 40, 1)');
      gradient.addColorStop(1, 'rgba(8, 12, 30, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw data grid nodes and connections
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen overflow-hidden">
     
      
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0" 
      />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-700/30">
              <span className="text-blue-400 text-sm font-medium">Enterprise-Grade • Free Access</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
              <span className="text-white">Powerful </span>
              <span className="text-blue-400">Database</span>
              <span className="text-white"> Solutions</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
              <span className="text-white">With </span>
              <span className="text-orange-400">Invoice Control </span>
              <span className="text-white">& </span>
              <span className="text-teal-400">Transparency</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Streamline your business operations with our advanced database management system. 
              Track invoices, monitor transactions, and maintain complete transparency—all at zero cost.
            </p>
           
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link to="./about">
              <a href="">
                <button className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Learn More
                </button>
              </a>
              </Link>
              <Link to="/wishlist">
              <a href="">
                <button className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-gray-800 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Get Started Free
                </button>
              </a>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={pictures} alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={picture} alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={picturess} alt="" />
              </div>
              <p className="ml-4 text-sm text-gray-400">Trusted by 10,000+ businesses</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Database-themed glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-teal-400/30 rounded-xl opacity-70 blur-xl"></div>
              
              {/* Decorative elements for database/invoice theme */}
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
              
              {/* Main video container with professional styling */}
              <div className="relative p-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl shadow-2xl">
                <video 
                  className="w-full max-w-md lg:max-w-lg rounded-lg shadow-inner"
                  src={databaseVideo} 
                  type="video/mp4" 
                  autoPlay 
                  loop 
                  muted
                  playsInline
                />
                
                {/* Business feature badges */}
                <div className="absolute -bottom-3 -left-3 px-3 py-1 bg-blue-900/80 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-blue-700/50">
                  Database Management
                </div>
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-teal-900/80 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-teal-700/50">
                  Invoice Tracking
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Feature highlights section */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg">
            <div className="w-12 h-12 mb-4 rounded-full bg-blue-900/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Free Database Access</h3>
            <p className="text-gray-400">Unlimited storage and queries with our enterprise-grade database solution.</p>
          </div>
          
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg">
            <div className="w-12 h-12 mb-4 rounded-full bg-orange-900/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Invoice Control</h3>
            <p className="text-gray-400">Generate, track, and manage invoices seamlessly with our integrated tools.</p>
          </div>
          
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg">
            <div className="w-12 h-12 mb-4 rounded-full bg-teal-900/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Full Transparency</h3>
            <p className="text-gray-400">Real-time monitoring and detailed reporting for complete operational visibility.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;