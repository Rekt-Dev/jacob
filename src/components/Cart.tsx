// Cart.tsx

import React, { useState } from 'react';

interface SkateboardPants {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<SkateboardPants[]>([]);
  
  const addCartItem = (item: SkateboardPants) => {
    setCartItems([...cartItems, item]);
  };

  const removeCartItem = (itemId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeCartItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;
