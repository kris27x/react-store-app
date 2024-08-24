import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description ProductList component that renders a list of products.
 * Each product links to its respective Product Details page.
 * @function ProductList
 * @param {Array} products - The list of products to display.
 * @returns {JSX.Element} The JSX element representing the Product List.
 */
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;