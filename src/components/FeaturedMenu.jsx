import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';

const featuredDishes = [
  {
    id: 'dish1',
    name: 'Paneer Butter Masala',
    category: 'Punjabi',
    price: 220,
    description: 'Creamy tomato curry with soft paneer cubes, flavored with aromatic spices and butter.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'dish2',
    name: 'Veg Biryani',
    category: 'Companion',
    price: 180,
    description: 'Fragrant basmati rice cooked with mixed vegetables and authentic biryani spices.',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'dish3',
    name: 'Masala Dosa',
    category: 'South Indian',
    price: 140,
    description: 'Crispy rice pancake filled with spiced potato filling, served with sambar and chutney.',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  }
];

const FeaturedMenu = () => {
  const { addToCart } = useCart();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredDishes.map((dish) => (
        <div key={dish.id} className="menu-card overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <span className="bg-primary px-2 py-1 text-xs rounded">
                {dish.category}
              </span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display text-xl font-semibold">{dish.name}</h3>
              <span className="text-primary font-bold">₹{dish.price}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
            
            <button 
              className="w-full flex items-center justify-center bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
              onClick={() => addToCart(dish)}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedMenu;