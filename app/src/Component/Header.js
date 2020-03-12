import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/styles.scss';

const Header = () => {
  return (<header className="header">
    <div className="header-container">
      <div className="header-link-container">
        <NavLink activeClassName="header-is-active" className="header-link" to="/login">Login</NavLink>
        <NavLink activeClassName="header-is-active" className="header-link" to="/register">Register</NavLink>
      </div>
    </div>
  </header>)

};

export default Header;
