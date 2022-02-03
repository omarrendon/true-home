import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact='true'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/reservaciones" exact='true'>Reservaciones</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
