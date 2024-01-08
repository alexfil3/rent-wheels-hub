import { NavLink } from 'react-router-dom';
import aboutImage from '../../images/about.jpg';
import css from './Catalog.module.css';

function Catalog() {
  return (
    <div className={css.wrapper}>
      <div>
        <img className={css.image} src={aboutImage} alt="" />
      </div>
      <div className={css.textWrapper}>
        <h2 className={css.title}>Catalog</h2>
        <p className={css.text}>
          Welcome to Rent Wheels Hub, your premier destination for hassle-free
          car rentals. Our extensive fleet of vehicles, ranging from sleek
          sedans to spacious SUVs, ensures that you find the perfect ride for
          any occasion. With a commitment to exceptional customer service, we
          strive to make your rental experience seamless and memorable.
        </p>
        <NavLink className={css.button} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
}

export default Catalog;
