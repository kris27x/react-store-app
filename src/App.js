import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import './App.css';

/**
 * @description The main application component. It sets up the routing for the app and includes the Navbar for navigation.
 * @function App
 * @returns {JSX.Element} The root JSX element for the application.
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is included on every page to allow navigation */}
        <Navbar />

        {/* Define the routes for different pages in the application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;