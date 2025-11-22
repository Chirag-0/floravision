import { useState } from "react";
import { X } from 'lucide-react';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white  top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 p-1.5">
            <img src="/plant.png" alt="FloraVision" className="h-5 w-5 " />
            <span className="text-xl font-bold ">FloraVision</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 indie-flower">
            <a href="#" className="hover:scale-105 transition">
              Home
            </a>
            <div className="relative group flex items-center gap-2">
              <button className="flex items-center gap-1 hover:scale-105 transition">
                Plants Type
              </button>
              <img src="polygon-2.png" alt="arrow" className='w-2 h-2 transition hover:scale-110 rotate-90 '/>
            </div>
            <a href="#" className="hover:scale-105 transition">
              About
            </a>
            <a href="#" className="hover:scale-105 transition">
              Contact
            </a>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className=" transition hover:scale-105">
              <img src="/searchIcon.png" alt="search" className="w-3 " />
            </button>
            <button className="transition hover:scale-105">
              <img src="/cart.png" alt="cart" className="w-3" />
            </button>
            <button className="transition hover:scale-105">
              <div className="flex flex-col gap-1.5 ">
                <div className="border w-2 h-0.5 bg-white"></div>
                <div className="border-e-5  h-0.5 "></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : (
                <>
                <div className="flex flex-col gap-1.5 hover:scale-105 transition ">
                    <div className="border w-2 h-0.5 bg-white"></div>
                    <div className="border-e-5  h-0.5 "></div>
                </div> 
               </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 indie-flower">
            <a href="#" className="block py-2 hover:scale-95">
              Home
            </a>
            <a href="#" className="block py-2 hover:scale-95">
              Plants
            </a>
            <a href="#" className="block py-2 hover:scale-95">
              About
            </a>
            <a href="#" className="block py-2 hover:scale-95">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
