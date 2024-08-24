import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * @description Home page component that serves as the landing page of the application.
 * It includes a link to the last visited product page if available.
 * @function Home
 * @returns {JSX.Element} The JSX element representing the Home page.
 */
function Home() {
  const [lastVisitedProduct, setLastVisitedProduct] = useState(null);

  useEffect(() => {
    // Retrieve the last visited product ID from localStorage
    const lastProduct = localStorage.getItem('lastVisitedProduct');
    if (lastProduct) {
      setLastVisitedProduct(JSON.parse(lastProduct));
    }
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the React Store!</h1>
      <p>Your one-stop shop for everything you need.</p>
      
      {lastVisitedProduct && (
        <div className="last-visited">
          <p>You last viewed:</p>
          <Link to={`/products/${lastVisitedProduct.id}`} className="last-visited-link">
            {lastVisitedProduct.title}
          </Link>
        </div>
      )}

      <div className="home-navigation">
        <Link to="/products" className="home-link">
          Browse Products
        </Link>
      </div>
    </div>
  );
}

export default Home;