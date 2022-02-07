import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/truehome-1.png";
import PlaneCart from "../../assets/bolsa.png";
import style from './styles.module.css';
import { useSelector } from 'react-redux';


const Header = () => {
  const { flights } = useSelector(state => state.flightSelect);
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/" exact='true'>
          <img className={style.logo} src={Logo} alt='true-home' />
        </NavLink>
      </div>
      <div>
        {flights?.length > 0 && (
          <div className={style.counter}></div>
        )}
        <NavLink to="/reservaciones" exact='true'>
          <img className={style.icon} src={PlaneCart} alt='true-home' />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
