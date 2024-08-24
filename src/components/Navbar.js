import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description Navbar component that provides navigation links to the Home and Products pages.
 * @function Navbar
 * @returns {JSX.Element} The JSX element representing the Navbar.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React Store
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;