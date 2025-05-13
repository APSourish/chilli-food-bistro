import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingCart, ChefHat } from 'lucide-react';
import logo from '../assets/logo.svg'

const Navbar = ({ navigateTo, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > -10);
  //   };
    
  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer rounded-full h-[80px] w-[80px] overflow-hidden border" 
            onClick={() => navigateTo('home')}
          >
            <img src={logo} className='' />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              className={`nav-link cursor-pointer ${currentPage === 'home' ? 'active' : ''} ${
                isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => navigateTo('home')}
            >
              Home
            </a>
            <a 
              className={`nav-link cursor-pointer ${currentPage === 'menu' ? 'active' : ''} ${
                isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => navigateTo('menu')}
            >
              Menu
            </a>
            <a 
              className={`nav-link cursor-pointer ${currentPage === 'about' ? 'active' : ''} ${
                isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-white'
              }`}
              onClick={()=>navigateTo('about')}
            >
              About
            </a>
            <a 
              className={`nav-link cursor-pointer ${currentPage === 'contact' ? 'active' : ''} ${
                isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-white'
              }`}
              onClick={()=>navigateTo('contact')}
            >
              Contact
            </a>
            
            {/* Cart Button */}
            <button 
              className={`flex items-center px-3 py-2 rounded-full ${
                isScrolled || currentPage !== 'home' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary'
              }`}
              onClick={toggleCart}
            >
              <ShoppingCart size={18} className="mr-1" />
              <span className="font-medium">
                {totalItems > 0 ? `(${totalItems})` : 'Cart'}
              </span>
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleCart}
              className="mr-4 relative"
            >
              <ShoppingCart 
                size={24} 
                className={isScrolled || currentPage !== 'home' ? 'text-primary' : 'text-white'} 
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X 
                  size={28} 
                  className={isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-white'} 
                />
              ) : (
                <Menu 
                  size={28} 
                  className={isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-white'} 
                />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <a 
                className={`nav-link text-lg ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => {
                  navigateTo('home');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </a>
              <a 
                className={`nav-link text-lg ${currentPage === 'menu' ? 'active' : ''}`}
                onClick={() => {
                  navigateTo('menu');
                  setIsMobileMenuOpen(false);
                }}
              >
                Menu
              </a>
              <a className="nav-link text-lg">About</a>
              <a className="nav-link text-lg">Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;