import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navLinks">
          <li><Link to="/" className="navLinks-item">Home</Link></li>
          <li><Link to="/about" className="navLinks-item">About</Link></li>
          <li><Link to="/blog" className="navLinks-item">Blog</Link></li>
          <li><Link to="/halos" className="navLinks-item">Halos</Link></li>
          <li><Link to="/sign-in" className="navLinks-item">Sign-in</Link></li>
          <li><Link to="/sign-up" className="navLinks-item">Sign-up</Link></li>
          {/* More links to come */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;