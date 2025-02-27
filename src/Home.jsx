import { useState } from 'react';
import ProductList from './components/POS/products';
import Cart from './components/POS/cart';
import Payment from './components/POS/payment';
import './Styles/pos.css';

export default function POSSystem() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pos-system">
      <div className="products-section">
        <h1>Products</h1>
        <ProductList addToCart={addToCart} />
      </div>
      <div className="cart-section">
        <h1>Cart</h1>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      <div className="payment-section">
        <h1>Payment</h1>
        <Payment total={total} />
      </div>
    </div>
  );
}