import React from 'react';
import './header.scss'; // Import your SCSS file

const Header = () => {
  return (
    <nav className="navigation">
        <ul>
        <li>
        <div className="search-bar">
            <img src="/search.png" alt="search" />
            <input type="text" placeholder="" />
        </div>
        </li>
        <li>
            <a href="#">Categories</a>
        </li>
        <li>
            <a href="#">Website Builders</a>
        </li>
        <li>
            <a href="#">Today's Deals</a>
        </li>
        </ul>
    </nav>
  );
};

export default Header;
