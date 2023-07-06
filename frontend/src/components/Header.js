import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom'
import   WelcomeBanner  from './WelcomeBanner';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { isAuthenticated, user } = auth;

  const handleLogout = () => {
    navigate('/')
    dispatch(logOut());
    localStorage.removeItem('token');
  };

  return (
    <header>
      { isAuthenticated && user ? (
        <div className="bannerContainer">
          <WelcomeBanner />
        </div>
      ) : null }
      <nav>
        <ul className="navLinks">
          <li><Link to="/" className="navLinks-item">Home</Link></li>
          <li><Link to="/about" className="navLinks-item">About</Link></li>
          <li><Link to="/blog" className="navLinks-item">Blog</Link></li>
          <li><Link to="/halo" className="navLinks-item">Halos</Link></li>

          { isAuthenticated && user ? (
            <>
                <li><Link to="/profile" className="navLinks-item">{`${user.username}'s Profile`}</Link></li>
                <li onClick={handleLogout} className="navLinks-item">Log out</li>
            </>
            ) : (
            <>
                <li><Link to="/sign-in" className="navLinks-item">Sign-in</Link></li>
                <li><Link to="/sign-up" className="navLinks-item">Sign-up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;