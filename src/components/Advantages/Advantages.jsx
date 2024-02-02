import icon from '../../images/svg-sprite.svg';
import css from './Advantages.module.css';

function Advantages() {
  return (
    <section className={css.wrapper}>
      <h2 className={css.visuallyHidden}>Advantages</h2>
      <ul className={css.flexBox}>
        <li className={css.item}>
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mercedes`} />
            </svg>
            <h3 className={css.title}>Diversity</h3>
          </div>
          <p>
            Description: Offering a wide range of car rental options to meet
            various customer needs.
          </p>
        </li>
        <li className={css.item}>
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mercedes`} />
            </svg>
            <h3 className={css.title}>Convenience</h3>
          </div>
          <p>
            Description: A simple and convenient booking process for saving
            customers' time.
          </p>
        </li>
        <li className={css.item}>
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mercedes`} />
            </svg>
            <h3 className={css.title}>Quality</h3>
          </div>
          <p>
            Description: Assurance of high service standards and thorough
            inspection of the technical condition of each car.
          </p>
        </li>
        <li className={css.item}>
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mercedes`} />
            </svg>
            <h3 className={css.title}>Flexibility</h3>
          </div>
          <p>
            Description: Flexible rental terms, allowing customization of orders
            to meet individual customer requirements.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Advantages;
