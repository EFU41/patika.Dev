// ShoppingCart.js

import React from "react";

const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h2>Alışveriş Sepeti</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - Adet: {item.quantity}, Toplam: ${item.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
