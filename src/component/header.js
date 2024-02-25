import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.scss'; // Import your SCSS file

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navigation ${showMenu ? 'show-menu' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className='bg-transparent text-[#D1D6DA]' />
      </div>
      <ul className={showMenu ? 'show' : ''}>
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
