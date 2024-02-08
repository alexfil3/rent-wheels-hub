import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ModalWindow.module.css';
import { openModalWindow } from '../../redux/catalog/catalogOperations';
import { selectCar } from '../../redux/catalog/catalogSelectors';
import icon from '../../images/svg-sprite.svg';

function ModalWindow() {
  const dispatch = useDispatch();
  const car = useSelector(selectCar);

  const handleBackgroundClick = e => {
    if (!e.target.classList.contains(css.box)) {
      dispatch(openModalWindow(false));
      document.body.classList.remove('backdrop-active');
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      dispatch(openModalWindow(false));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={css.backdrop} onClick={e => handleBackgroundClick(e)}>
      <div className={css.box}>
        <div className={css.close}>
          <svg className={css.svg}>
            <use href={`${icon}#icon-mercedes`} />
          </svg>
        </div>
        <div className={css.imgWrapper}>
          <img className={css.image} src={car.img} alt={car.model} />
        </div>
        <p className={css.name}>
          {car.make} <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <ul className={css.list}>
          <li>{car.address}</li>
          <li>Id: {car.id}</li>
          <li>Year: {car.year}</li>
          <li>Type: {car.type}</li>
          <li>Fuel Consumption: {car.fuelConsumption} </li>
          <li>Engine Size: {car.engineSize}</li>
        </ul>
        <p className={css.description}>{car.description}</p>
        <p className={css.access}>Accessories and functionalities:</p>
        <ul className={css.listTwo}>
          {car.accessories.map(item => {
            return <li key={car.id}>{item}</li>;
          })}
        </ul>
        <ul className={css.listTwo}>
          {car.functionalities.map(item => {
            return <li key={car.id}>{item}</li>;
          })}
        </ul>
        <p className={css.access}>Rental Conditions: </p>
        <ul className={css.rent}>
          <li>
            Minimum age:{' '}
            <span className={css.age}>
              {car.rentalConditions.slice(13, 15)}
            </span>
          </li>
          <li>{car.rentalConditions.slice(16, 38)}</li>
          <li>{car.rentalConditions.slice(39)}</li>
          <li>
            Mileage: <span className={css.age}>{car.mileage}</span>
          </li>
          <li>
            Price: <span className={css.age}>{car.rentalPrice}</span>
          </li>
        </ul>
        <a className={css.tel} href="tel:+380508074755">
          Rental car
        </a>
      </div>
    </div>
  );
}

export default ModalWindow;
