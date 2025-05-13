export const menuCategories = [
  { id: 'punjabi', name: 'Punjabi' },
  { id: 'vegetable', name: 'Vegetable' },
  { id: 'special', name: 'Special' },
  { id: 'companion', name: 'Companion' },
  { id: 'south-indian', name: 'South Indian' },
  { id: 'fast-food', name: 'Fast Food' },
  { id: 'platter', name: 'Platter' },
  { id: 'appetizer', name: 'Appetizer' }
];

export const menuItems = [
  // Punjabi Section
  {
    id: 'matar-paneer',
    name: 'Matar Paneer',
    category: 'punjabi',
    price: 180,
    description: 'Soft paneer cubes and green peas cooked in a rich tomato-based gravy.',
    image: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    category: 'punjabi',
    price: 190,
    description: 'Cottage cheese cubes in a pureed spinach gravy, flavored with garlic and spices.',
    image: 'https://images.pexels.com/photos/14000522/pexels-photo-14000522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 'paneer-tikka-masala',
    name: 'Paneer Tikka Masala',
    category: 'punjabi',
    price: 210,
    description: 'Marinated and grilled paneer cubes in a spicy tomato-based sauce.',
    image: 'https://images.pexels.com/photos/14727369/pexels-photo-14727369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'paneer-toofani',
    name: 'Paneer Toofani',
    category: 'punjabi',
    price: 200,
    description: 'Spicy paneer dish with a storm of flavors, cooked with bell peppers and onions.',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 'paneer-angara',
    name: 'Paneer Angara',
    category: 'punjabi',
    price: 220,
    description: 'Smoky flavored paneer curry made with roasted spices and tomatoes.',
    image: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  
  // Vegetable Section
  {
    id: 'aloo-matar',
    name: 'Aloo Matar',
    category: 'vegetable',
    price: 150,
    description: 'Potatoes and green peas cooked in a tomato-onion gravy with Indian spices.',
    image: 'https://images.pexels.com/photos/6645917/pexels-photo-6645917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 'mix-veg-masala',
    name: 'Mix Veg Masala',
    category: 'vegetable',
    price: 170,
    description: 'Assorted vegetables in a flavorful tomato and onion based gravy.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  
  // Special Section
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    category: 'special',
    price: 220,
    description: 'Creamy tomato curry with soft paneer cubes, flavored with aromatic spices and butter.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta Sweet',
    category: 'special',
    price: 230,
    description: 'Soft cottage cheese dumplings in a creamy, mildly sweet gravy.',
    image: 'https://images.pexels.com/photos/5410428/pexels-photo-5410428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  
  // Companion Section
  {
    id: 'tandoori-roti',
    name: 'Tandoori Roti',
    category: 'companion',
    price: 25,
    description: 'Traditional Indian bread baked in a clay oven.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    category: 'companion',
    price: 40,
    description: 'Soft leavened bread brushed with butter.',
    image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'veg-biryani',
    name: 'Veg Biryani',
    category: 'companion',
    price: 180,
    description: 'Fragrant basmati rice cooked with mixed vegetables and authentic biryani spices.',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  
  // South Indian Section
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    category: 'south-indian',
    price: 140,
    description: 'Crispy rice pancake filled with spiced potato filling, served with sambar and chutney.',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 'uttapam',
    name: 'Uttapam',
    category: 'south-indian',
    price: 130,
    description: 'Thick rice pancake topped with vegetables, served with sambar and chutney.',
    image: 'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  
  // Fast Food Section
  {
    id: 'veg-sandwich',
    name: 'Veg Sandwich',
    category: 'fast-food',
    price: 90,
    description: 'Grilled sandwich filled with fresh vegetables and cheese.',
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 'veg-pizza',
    name: 'Veg Pizza',
    category: 'fast-food',
    price: 160,
    description: 'Crispy pizza topped with vegetables, cheese, and tangy sauce.',
    image: 'https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  }
];