import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
