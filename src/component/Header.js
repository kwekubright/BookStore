import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-container ">
        <div className="container flex padding-3 flex-gap-3 flex-align-center">
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
      </header>
    );
  }
}

export default Header;