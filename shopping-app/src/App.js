// App.js

import React, { useState } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const initialBalance = 100000000000;
  const [balance, setBalance] = useState(initialBalance);
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Ürün 1", price: 10 },
    { id: 2, name: "Ürün 2", price: 20 },
    { id: 3, name: "Ürün 3", price: 30 },
  ]);

  const handleBuy = (product, quantity) => {
    if (balance >= product.price * quantity) {
      setCart([
        ...cart,
        { product, quantity, total: product.price * quantity },
      ]);
      setBalance(balance - product.price * quantity);
    }
  };

  const handleSell = (product, quantity) => {
    const itemIndex = cart.findIndex((item) => item.product.id === product.id);
    if (itemIndex !== -1 && cart[itemIndex].quantity >= quantity) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity -= quantity;
      updatedCart[itemIndex].total -= product.price * quantity;

      setCart(updatedCart);
      setBalance(balance + product.price * quantity);
    }
  };

  return (
    <div>
      <h1>Bill Gates'in Alışveriş Uygulaması</h1>
      <p>Bakiye: ${balance}</p>
      <ProductList products={products} onBuy={handleBuy} onSell={handleSell} />
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default App;
