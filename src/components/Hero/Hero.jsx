import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';

function Hero() {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>
          Rent Wheels Hub - the best service to provide the best cars
        </h1>
        <NavLink className={css.heroButton} to="/catalog">
          Available cars
        </NavLink>
      </div>
    </section>
  );
}

export default Hero;
