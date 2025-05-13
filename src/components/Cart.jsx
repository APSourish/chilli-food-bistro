import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ChevronRight, Minus, Plus, ShoppingCart, AlertTriangle, Loader2, MapPin } from 'lucide-react';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePincode = (pincode) => {
    // Check if delivery is possible within 15km radius of 360003
    return pincode === '360003' || 
           pincode === '360001' || 
           pincode === '360002' || 
           pincode === '360004' || 
           pincode === '360005';
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    
    if (getCartTotal() < 200) {
      setCheckoutError('Minimum order value should be ₹200 for home delivery');
      return;
    }

    if (!validatePincode(checkoutForm.pincode)) {
      setCheckoutError('Sorry, delivery is not available in your area. We only deliver within 15km radius of 360003.');
      return;
    }

    try {
      setIsCheckingOut(true);
      setCheckoutError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Prepare order details
      const orderDetails = {
        items: cartItems,
        total: getCartTotal(),
        customerInfo: checkoutForm,
        orderDate: new Date().toISOString()
      };
      
      console.log('Order placed:', orderDetails);
      
      // Clear cart after successful checkout
      clearCart();
      toggleCart();
      
      // Show success message
      alert('Order placed successfully! Thank you for ordering.');
    } catch (error) {
      setCheckoutError('Failed to process checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
      setShowCheckoutForm(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={toggleCart}
      ></div>
      
      {/* Cart Panel */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-primary text-white">
            <h2 className="text-xl font-display font-semibold flex items-center">
              <ShoppingCart className="mr-2" size={20} />
              Your Order
            </h2>
            <button onClick={toggleCart} className="p-1 hover:bg-white/10 rounded-full">
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some delicious items to your cart and start ordering</p>
                <button 
                  className="btn-primary"
                  onClick={toggleCart}
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-b border-gray-100 pb-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-800">
                        <h3>{item.name}</h3>
                        <p className="ml-4">₹{item.price * item.quantity}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                          <button 
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <button 
                          className="text-primary hover:text-primary-dark"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-2">
                  <button 
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-primary flex items-center"
                  >
                    <X size={14} className="mr-1" />
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer/Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              {!showCheckoutForm ? (
                <>
                  <div className="flex justify-between text-base font-medium text-gray-800 mb-2">
                    <p>Subtotal</p>
                    <p>₹{getCartTotal()}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <p>Delivery Fee</p>
                    <p>₹40</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-800 mb-4">
                    <p>Total</p>
                    <p>₹{getCartTotal() + 40}</p>
                  </div>
                  
                  <button 
                    className="btn-primary w-full mb-2"
                    onClick={() => setShowCheckoutForm(true)}
                  >
                    Proceed to Checkout
                  </button>
                </>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={checkoutForm.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={checkoutForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      required
                      value={checkoutForm.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows="2"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={checkoutForm.pincode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Method
                    </label>
                    <select
                      name="paymentMethod"
                      value={checkoutForm.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="cod">Cash on Delivery</option>
                      <option value="online">Online Payment</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit"
                    className={`btn-primary w-full flex items-center justify-center ${
                      isCheckingOut ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? (
                      <>
                        <Loader2 size={20} className="animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                  
                  <button 
                    type="button"
                    className="w-full text-gray-500 text-sm"
                    onClick={() => setShowCheckoutForm(false)}
                  >
                    Back to Cart
                  </button>
                </form>
              )}
              
              {checkoutError && (
                <div className="text-red-500 text-sm flex items-center mt-2">
                  <AlertTriangle size={14} className="mr-1" />
                  {checkoutError}
                </div>
              )}
              
              <div className="text-xs text-gray-500 flex items-center mt-2">
                <AlertTriangle size={14} className="mr-1" />
                Minimum order value is ₹200 for home delivery
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};