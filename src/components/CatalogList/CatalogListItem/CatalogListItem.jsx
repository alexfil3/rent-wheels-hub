import { useDispatch } from 'react-redux';
import {
  fetchCarById,
  openModalWindow,
} from '../../../redux/catalog/catalogOperations';
import css from './CatalogListItem.module.css';
import icon from '../../../images/svg-sprite.svg';

function CatalogListItem({
  year,
  make,
  model,
  rentalPrice,
  address,
  rentalCompany,
  type,
  id,
  functionalities,
  img,
}) {
  const dispatch = useDispatch();

  const city = address.split(' ')[3].slice(0, -1);
  const country = address.split(' ')[4];
  const editedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  const feature = functionalities.reduce((acc, current) => {
    const accLength = acc
      .split(' ')
      .reduce((total, word) => total + word.length, 0);
    const currentLength = current
      .split(' ')
      .reduce((total, word) => total + word.length, 0);

    return accLength < currentLength ? acc : current;
  }, functionalities[0]);

  const handleOpenModal = () => {
    dispatch(fetchCarById(id)).then(() => dispatch(openModalWindow(true)));
    document.body.classList.add('backdrop-active');
  };

  return (
    <div className={css.flexItem}>
      <svg className={css.svg}>
        <use href={`${icon}#icon-mercedes`} />
      </svg>
      <div className={css.imageWrapper}>
        <img className={css.image} src={img} alt={model} />
      </div>
      <div className={css.labelWrapper}>
        <p>
          {make} <span className={css.model}>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <ul className={css.characteristics}>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        <li>{editedType}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{feature}</li>
      </ul>
      <button className={css.button} onClick={handleOpenModal}>
        Learn more
      </button>
    </div>
  );
}

export default CatalogListItem;
