import { NavLink } from 'react-router-dom';
import icon from '../../images/svg-sprite.svg';
import css from './Navigation.module.css';
import { useEffect, useState } from 'react';

function Navigation() {
  // const [current, setCurrent] = useState();
  // const currentPath = window.location.pathname;

  // useEffect(() => {
  //   setCurrent(currentPath);
  //   console.log(current);
  // }, [current, currentPath]);

  // const onClick = () => {
  //   const currentPath = window.location.pathname;
  //   setCurrent(currentPath);
  // };

  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <NavLink className={css.iconLink} to="/">
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${icon}#icon-car`} />
            </svg>
            <p className={css.name}>Rent Wheels Hub</p>
          </div>
        </NavLink>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.linkActive}` : css.navLink
              }
              to="/"
              // onClick={onClick}
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.linkActive}` : css.navLink
              }
              to="/catalog"
              // onClick={onClick}
            >
              Catalog
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.linkActive}` : css.navLink
              }
              to="/favorites"
              // onClick={onClick}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
