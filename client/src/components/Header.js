import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Photo Gallery Manager</h1>
    <div className="links">
      <NavLink to="/" className="link">
        Photo Upload
      </NavLink>
      <NavLink to="/gallery-list" className="link">
        Galleries
      </NavLink>
    </div>
  </header>
);

export default Header;
