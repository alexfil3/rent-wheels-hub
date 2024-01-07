import { useDispatch, useSelector } from 'react-redux';
import css from './ModalWindow.module.css';
import { openModalWindow } from '../../redux/catalog/catalogOperations';
import { selectCar } from '../../redux/catalog/catalogSelectors';

function ModalWindow() {
  const dispatch = useDispatch();
  const car = useSelector(selectCar);

  const handleBackgroundClick = e => {
    if (!e.target.classList.contains(css.box)) {
      dispatch(openModalWindow(false));
      document.body.classList.remove('backdrop-active');
    }
  };

  const city = car.address.split(' ')[3].slice(0, -1);
  // const country = car.address.split(' ')[4];
  // const editedType =
  //   car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase();

  // const inputString = car.rentalConditions;

  // const ageRegex = /Minimum age: (\d+)/;
  // const ageMatch = inputString.match(ageRegex);
  // const minimumAge = ageMatch ? ageMatch[1] : null;

  // const requirements = inputString
  //   .split('\n')
  //   .filter(line => !line.startsWith('Minimum age:'))
  //   .map(line => line.trim())
  //   .filter(line => line !== '');

  // const mileageEdited =
  //   String(car.mileage).slice(0, 1) + ',' + String(car.mileage).slice(1);

  return (
    <div className={css.backdrop} onClick={e => handleBackgroundClick(e)}>
      <div className={css.box}>
        <div className={css.close}>{car.make}</div>
        <div className={css.imgWrapper}></div>
        <p className={css.name}>
          {car.make} <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <ul className={css.list}>
          <li>{city}</li>
          <li>{/* {country} */}</li>
          <li>Id: {car.id}</li>
          <li>Year: {car.year}</li>
          <li>Type: {/* {editedType} */}</li>
          <li>Fuel Consumption: {car.fuelConsumption} </li>
          <li>Engine Size: {car.engineSize}</li>
        </ul>
        <p className={css.description}>{car.description}</p>
        <p className={css.access}>Accessories and functionalities:</p>
        <ul className={css.listTwo}>
          <li>{/* {car.accessories[0]} */}</li>
          <li>{/* {car.accessories[1]} */}</li>
          <li>{/* {car.accessories[2]} */}</li>
        </ul>
        <ul className={css.listTwo}>
          <li>{/* {car.functionalities[0]} */}</li>
          <li>{/* {car.functionalities[1]} */}</li>
          <li>{/* {car.functionalities[2]} */}</li>
        </ul>
        <p className={css.access}>Rental Conditions: </p>
        <ul className={css.rent}>
          <li>
            Minimum age: <span className={css.age}>{/* {minimumAge} */}</span>
          </li>
          <li>{/* {requirements[0]} */}</li>
          <li>{/* {requirements[1]} */}</li>
          <li>
            Mileage: <span className={css.age}>{/* {mileageEdited} */}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModalWindow;
