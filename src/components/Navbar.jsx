import { useState } from "react";
import { Menu, X, Search, Heart, ShoppingCart, Star, ChevronRight } from 'lucide-react';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 p-1.5">
            <img src="/plant.png" alt="FloraVision" className="h-5 w-5 " />
            <span className="text-xl font-bold">FloraVision</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-green-400 transition">
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                Plants Type
              </button>
            </div>
            <a href="#" className="hover:text-green-400 transition">
              About
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Contact
            </a>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="hover:text-green-400 transition">
              <img src="/searchIcon.png" alt="search" className="w-3 " />
            </button>
            <button className="hover:text-green-400 transition">
              <img src="/cart.png" alt="cart" className="w-3" />
            </button>
            <button className="hover:text-green-400 transition">
              <div className="flex flex-col gap-1.5 ">
                <div className="border w-2 h-0.5 "></div>
                <div className="border-e-5  h-0.5 "></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : (
                <>
                <div className="flex flex-col gap-1.5 ">
                    <div className="border w-2 h-0.5 "></div>
                    <div className="border-e-5  h-0.5 "></div>
                </div> 
               </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block py-2 hover:text-green-400">
              Home
            </a>
            <a href="#" className="block py-2 hover:text-green-400">
              Plants
            </a>
            <a href="#" className="block py-2 hover:text-green-400">
              About
            </a>
            <a href="#" className="block py-2 hover:text-green-400">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
