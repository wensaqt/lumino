import './WelcomeBanner.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const WelcomeBanner = () => {
  const [visible, setVisible] = useState(true);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="welcome-banner">
      Welcome back, {user.username}!
    </div>
  );
};

export default WelcomeBanner;