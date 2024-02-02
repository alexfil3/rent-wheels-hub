import icon from '../../images/svg-sprite.svg';
import css from './CarBrands.module.css';

function CarBrands() {
  return (
    <section>
      <div className={css.container}>
        <ul className={css.list}>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mercedes`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-bmw`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-lamborghini`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mitsubishi`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-subaru`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-volvo`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-aston-martin`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-gmc`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-tesla`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-pontiac`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-kia`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-lincoln`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-mini`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-audi`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#icon-infiniti`} />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CarBrands;
