import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul class="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/halos">Halos</Link></li>
          {/* Ajoute ici d'autres liens selon tes besoins */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;