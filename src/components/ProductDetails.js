import React from 'react';

/**
 * @description ProductDetails component that displays detailed information about a selected product.
 * It includes the product's image, title, description, price, category, and rating.
 * @function ProductDetails
 * @param {Object} product - The product object containing all the details to display.
 * @returns {JSX.Element} The JSX element representing the Product Details.
 */
function ProductDetails({ product }) {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-details-image" />
      <div className="product-details-info">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-price">Price: ${product.price.toFixed(2)}</p>
        <p className="product-details-category">Category: {product.category}</p>
        <div className="product-details-rating">
          <p>Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;