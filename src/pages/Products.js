import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * @description Products page component that fetches and displays a list of products.
 * It includes sorting options and links to individual Product Details pages.
 * @function Products
 * @returns {JSX.Element} The JSX element representing the Products page.
 */
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    // Fetch products from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  /**
   * @description Function to handle sorting of products based on the selected option.
   * @function handleSortChange
   * @param {Event} event - The event triggered by changing the sort option.
   */
  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);

    const sortedProducts = [...products];
    switch (option) {
      case 'title':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        // Default is API order, reset to original order
        sortedProducts.sort((a, b) => a.id - b.id);
        break;
    }

    setProducts(sortedProducts);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="products-container">
      <h1>Products</h1>

      <div className="sort-options">
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className="products-list">
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
    </div>
  );
}

export default Products;