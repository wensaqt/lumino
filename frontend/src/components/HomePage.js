import React from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <section className="homePageContainer">
      <div className="homePage">

        <div className="homePage-infos">
          <p>Welcome to...</p>
          <div className="luminoLogo"></div>
          <p>Create articles, comment, share with your friends, but most importantly: have fun!</p>
        </div>

        <div className="hotNewsContainer">
          <div className="hotNews">
            <div className="articleBanner"></div>
            <h2>Test</h2>
            <p className="articlePitch">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;