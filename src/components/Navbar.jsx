import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // If you don't have lucide, delete this and use text like "Menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 'fixed' makes it stay at the top. 'backdrop-blur' gives it that glass effect.
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-serif text-2xl font-bold text-gray-900">
              Horizon Courts
            </span>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-600 hover:text-green-700 font-medium transition-colors">About Us</a>
            <a href="#services" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Services</a>
            <a href="#coaches" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Coaches</a>
            <a href="#events" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Events</a>
          </div>

          {/* CTA Button (Hidden on mobile) */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <a href="#about" className="block w-full text-center px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-md">About Us</a>
            <a href="#services" className="block w-full text-center px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-md">Services</a>
            <a href="#coaches" className="block w-full text-center px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-md">Coaches</a>
            <a href="#events" className="block w-full text-center px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-md">Events</a>
            <button className="w-full mt-4 bg-blue-700 text-white px-6 py-3 rounded-xl font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;