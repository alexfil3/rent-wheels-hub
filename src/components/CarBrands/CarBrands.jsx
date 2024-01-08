import icon from '../../images/svg-sprite.svg';
import css from './CarBrands.module.css';

function CarBrands() {
  return (
    <section>
      <div className={css.container}>
        <ul className={css.list}>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#mercedes`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#bmw`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#lamborghini`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#mitsubishi`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#subaru`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#volvo`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#aston-martin`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
          <li>
            <svg className={css.svg}>
              <use href={`${icon}#hummer`} />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CarBrands;
