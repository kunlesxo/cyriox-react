import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Info, 
  Settings, 
  Heart, 
  LogIn, 
  Menu, 
  X, 
  ChevronRight, 
  Grid, 
  User 
} from "lucide-react";

const Navbar = () => {
  const canvasRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    const numDots = 300;

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
      }

      move() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numDots; i++) {
        dots.push(new Dot());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.move();
        dot.draw();
      });
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Enhanced Mobile Side Navigation with Lucide Icons - Updated with slate gradient */}
      <div className={`mobile-menu fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl z-30 transform transition-transform duration-300 ease-in-out rounded-r-3xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Grid size={24} className="text-blue-400" />
            <h1 className="text-xl font-bold text-blue-400">CYRIOX</h1>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-slate-700 transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* User profile section */}
        <div className="p-5 border-b border-slate-700/50 flex items-center space-x-4">
          <div className="bg-blue-500 rounded-full p-2">
            <User size={24} className="text-white" />
          </div>
          <div>
            <p className="text-white font-medium">Guest User</p>
            <p className="text-gray-400 text-sm">Sign in to access your account</p>
          </div>
        </div>
        
        <nav className="p-5">
          <p className="text-gray-400 text-xs uppercase font-semibold mb-3 ml-2">Menu</p>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="flex items-center space-x-3 text-gray-300 hover:bg-blue-500/10 p-3 rounded-xl transition-colors duration-200 group" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home size={20} className="text-gray-400 group-hover:text-blue-400" />
                <span className="font-medium group-hover:text-blue-400">Home</span>
                <ChevronRight size={16} className="text-gray-500 ml-auto group-hover:text-blue-400" />
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="flex items-center space-x-3 text-gray-300 hover:bg-blue-500/10 p-3 rounded-xl transition-colors duration-200 group" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Info size={20} className="text-gray-400 group-hover:text-blue-400" />
                <span className="font-medium group-hover:text-blue-400">About</span>
                <ChevronRight size={16} className="text-gray-500 ml-auto group-hover:text-blue-400" />
              </Link>
            </li>
            <li>
              <Link 
                to="/service" 
                className="flex items-center space-x-3 text-gray-300 hover:bg-blue-500/10 p-3 rounded-xl transition-colors duration-200 group" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings size={20} className="text-gray-400 group-hover:text-blue-400" />
                <span className="font-medium group-hover:text-blue-400">Services</span>
                <ChevronRight size={16} className="text-gray-500 ml-auto group-hover:text-blue-400" />
              </Link>
            </li>
            <li>
              <Link 
                to="/wishlist" 
                className="flex items-center space-x-3 text-gray-300 hover:bg-blue-500/10 p-3 rounded-xl transition-colors duration-200 group" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={20} className="text-gray-400 group-hover:text-blue-400" />
                <span className="font-medium group-hover:text-blue-400">Wishlist</span>
                <ChevronRight size={16} className="text-gray-500 ml-auto group-hover:text-blue-400" />
              </Link>
            </li>
          </ul>
          
          <div className="mt-8">
            <Link 
              to="/signup" 
              className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors duration-200 w-full" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn size={18} />
              <span className="font-medium">Sign In</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Navbar - Updated with slate gradient */}
      <header className="sticky relative z-10 mt-4 mx-auto max-w-5xl top-4 w-full border border-blue-600 rounded-full py-2.5 px-5 h-12 shadow-lg animate-pulse md:mt-10 lg:mt-10 bg-gradient-to-b from-slate-900">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full rounded-full" />

        <div className="flex justify-between items-center relative">
          {/* Hamburger menu for mobile */}
          <button onClick={toggleMobileMenu} className="hamburger md:hidden text-gray-500 hover:text-blue-600 p-1">
            <Menu size={20} />
          </button>

          <div className="flex items-center space-x-2">
            <Grid size={18} className="text-gray-500" />
            <h1 className="text-lg md:text-xl text-gray-500 font-bold">CYRIOX</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li className="text-sm font-semibold text-gray-500 hover:text-blue-600">
                <Link to="/" className="flex items-center gap-1">
                  <Home size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-sm font-semibold text-gray-500 hover:text-blue-600">
                <Link to="/about" className="flex items-center gap-1">
                  <Info size={14} />
                  <span>About</span>
                </Link>
              </li>
              <li className="text-sm font-semibold text-gray-500 hover:text-blue-600">
                <Link to="/service" className="flex items-center gap-1">
                  <Settings size={14} />
                  <span>Services</span>
                </Link>
              </li>
              <li className="text-sm font-semibold text-gray-500 hover:text-blue-600">
                <Link to="/wishlist" className="flex items-center gap-1">
                  <Heart size={14} />
                  <span>Wishlist</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sign-in button (visible on all screens) */}
          <Link to="/signup" className="hidden md:block">
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-1 flex items-center gap-1">
              <LogIn size={14} />
              <span>Sign In</span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;