import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartProvider from './context/CartContext';
import { CartDrawer } from './components/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simulating route change
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar navigateTo={navigateTo} currentPage={currentPage} />
        
        <main className="flex-grow">
          {currentPage === 'home' && <Homepage navigateTo={navigateTo} />}
          {currentPage === 'menu' && <MenuPage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
        
        <CartDrawer />
        <Footer navigateTo={navigateTo} />
      </div>
    </CartProvider>
  );
}

export default App;