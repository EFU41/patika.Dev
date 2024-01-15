// ProductList.js

import React, { useState } from "react";

const ProductList = ({ products, onBuy, onSell }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: value });
  };

  return (
    <div>
      <h2>Ürün Listesi</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <input
              type="number"
              value={quantities[product.id] || 0}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value, 10))
              }
            />
            <button onClick={() => onBuy(product, quantities[product.id])}>
              Buy
            </button>
            <button onClick={() => onSell(product, quantities[product.id])}>
              Sell
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
