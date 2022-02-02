import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      {/* <img src={logo} alt="React Logo" /> */}
      <ul>
        <li>
          <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/reservaciones" activeClassName="nav-active" exact>Reservaciones</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
