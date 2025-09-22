import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
const Navbar: React.FC = () => {
  return (
    
    <nav className="bg-white shadow-md">
      
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
         
          <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
          <span className="text-xl font-bold text-gray-800">E-Com</span>
        </div>
        
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#bag" className="hover:text-blue-600 transition-colors">
              Bag
            </a>
          </li>
          <li>
            <a href="#sneakers" className="hover:text-blue-600 transition-colors">
              Sneakers
            </a>
          </li>
          <li>
            <a href="#belt" className="hover:text-blue-600 transition-colors">
              Belt
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <IoCartOutline />
          <span className="hover:text-blue-600 transition-colors">items</span>
        </div>
       
      </div>
    </nav>
  );
};
export default Navbar;