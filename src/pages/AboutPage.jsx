import React from 'react';
import { Star, Award, Users, Utensils } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            About Chili Food Bistro
          </h1>
          <p className="text-white/90 max-w-2xl">
            Serving authentic vegetarian cuisine with love and passion since 2010
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Chili Food Bistro began with a simple mission: to serve authentic vegetarian Indian cuisine that delights both locals and visitors alike. Our recipes have been passed down through generations, preserving the authentic taste of traditional Indian cooking.
            </p>
            <p className="text-gray-600">
              What started as a small family-run restaurant has grown into one of the most loved vegetarian destinations in the city, thanks to our commitment to quality, taste, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-4xl text-primary mb-2">13+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-4xl text-primary mb-2">50+</h3>
              <p className="text-gray-600">Dishes</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-4xl text-primary mb-2">100k+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-4xl text-primary mb-2">4.8</h3>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and maintain the highest standards of cleanliness and food preparation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to exceed their expectations every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Authentic Taste</h3>
              <p className="text-gray-600">
                We preserve the authenticity of traditional recipes while innovating to create unique dining experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;