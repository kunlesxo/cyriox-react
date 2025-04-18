import {  Routes, Route } from 'react-router-dom';
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Service from './pages/Services';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login'
function App() {
  return (
    <div>
   
      <Navbar/>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Service />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />

        </Routes>
  
    </div>
  );
}

export default App;
