import React from 'react';
import { ArrowRight, Star, Clock, ShoppingBag } from 'lucide-react';
import FeaturedMenu from '../components/FeaturedMenu';

const Homepage = ({ navigateTo }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Experience Authentic <span className="text-primary">Indian</span> Vegetarian Cuisine
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Discover the rich flavors and spices of traditional Indian dishes, crafted with care using fresh ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                onClick={() => navigateTo('menu')}
              >
                Order Now <ShoppingBag size={18} className="ml-2" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                View Our Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Authentic Taste</h3>
              <p className="text-gray-600">
                Experience the true flavors of Indian cuisine with our traditional recipes passed down through generations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Enjoy our delicious meals delivered hot and fresh to your doorstep in less than 30 minutes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Pure Vegetarian</h3>
              <p className="text-gray-600">
                All our dishes are 100% vegetarian, prepared with love and care for our health-conscious customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Popular <span className="text-primary">Dishes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most loved dishes that have won the hearts of our customers. Each dish is crafted with passion and authentic spices.
            </p>
          </div>
          
          <FeaturedMenu />
          
          <div className="text-center mt-12">
            <button 
              className="flex items-center mx-auto bg-white border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              onClick={() => navigateTo('menu')}
            >
              View Full Menu <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Customers</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied customers have to say about their dining experience at Chili Food Bistro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The food is absolutely amazing! The Paneer Butter Masala is to die for, and the service is always excellent. My go-to place for Indian food."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden mr-3">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-gray-500 text-sm">Regular Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Taste Our Delicious Food?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Order now and experience the authentic taste of Indian vegetarian cuisine delivered to your doorstep.
          </p>
          <button 
            className="bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300"
            onClick={() => navigateTo('menu')}
          >
            Order Online Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;