import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * @description Product Details page component that fetches and displays detailed information about a specific product.
 * @function ProductDetailsPage
 * @returns {JSX.Element} The JSX element representing the Product Details page.
 */
function ProductDetailsPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the product details from Fake Store API based on the product ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);

        // Save the last visited product in localStorage
        localStorage.setItem('lastVisitedProduct', JSON.stringify({ id: data.id, title: data.title }));
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.title} className="product-details-image" />
      <div className="product-details-info">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-price">Price: ${product.price.toFixed(2)}</p>
        <p className="product-details-category">Category: {product.category}</p>
        <div className="product-details-rating">
          <p>Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
        </div>
        <Link to="/products" className="back-to-products-link">
          Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;