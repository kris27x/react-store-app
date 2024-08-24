import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description ProductItem component that displays individual product details within a product list.
 * It includes the product's image, title, and price, and links to the Product Details page.
 * @function ProductItem
 * @param {Object} product - The product object containing details to display.
 * @returns {JSX.Element} The JSX element representing an individual Product Item.
 */
function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}

export default ProductItem;