import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import './header.css';

function Header() {
  return (
    <header className="header-container ">
      <div className="container flex flex-justify-space-between flex-align-center">
        <div className="flex padding-3 flex-gap-3 flex-align-center">
          <div className="header-logo">
            <h1 className="color-primary">Bookstore CMS</h1>
          </div>
          <div className="header-nav">
            <ul className="flex flex-gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
        </div>
        <FontAwesomeIcon icon={faUserCircle} size="xl" color="#0092fa" />
      </div>
    </header>
  );
}

export default Header;
