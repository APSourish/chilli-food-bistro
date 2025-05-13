import React, { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { menuCategories, menuItems } from '../data/menuItems';
import { ShoppingCart, Plus, Search } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('punjabi');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRefs = useRef({});
  const { addToCart } = useCart();
  
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  
  const filteredItems = searchQuery
    ? menuItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menuItems;
  
  const itemsByCategory = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark py-10 mb-6">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Our Menu
          </h1>
          <p className="text-white/80 max-w-2xl">
            Explore our wide range of authentic vegetarian dishes made with fresh ingredients and traditional recipes.
          </p>
          
          {/* Search */}
          <div className="mt-6 max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Category Tabs (Horizontal Scrollable) */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-3 min-w-max">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`category-pill whitespace-nowrap ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* If searching, show search results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="font-display text-2xl font-semibold mb-4">
              Search Results for "{searchQuery}"
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <MenuItemCard 
                    key={item.id} 
                    item={item} 
                    addToCart={addToCart} 
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-full py-8 text-center">
                  No menu items found matching your search.
                </p>
              )}
            </div>
          </div>
        )}
        
        {/* Menu Sections */}
        {!searchQuery && menuCategories.map((category) => {
          const categoryItems = itemsByCategory[category.id] || [];
          
          if (categoryItems.length === 0) return null;
          
          return (
            <div 
              key={category.id}
              id={`category-${category.id}`}
              className="mb-10"
              ref={(el) => (categoryRefs.current[category.id] = el)}
            >
              <h2 className="font-display text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                {category.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((item) => (
                  <MenuItemCard 
                    key={item.id} 
                    item={item} 
                    addToCart={addToCart} 
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MenuItemCard = ({ item, addToCart }) => {
  return (
    <div className="menu-card overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.popular && (
          <div className="absolute top-2 right-2">
            <span className="bg-primary text-white px-2 py-1 text-xs rounded-full">
              Popular
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-semibold">{item.name}</h3>
          <span className="text-primary font-bold">₹{item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
            onClick={() => addToCart(item)}
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
          
          <button 
            className="p-2 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors duration-300"
            onClick={() => addToCart(item)}
          >
            <Plus size={18} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;