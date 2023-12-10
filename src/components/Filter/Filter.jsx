import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCars,
  changeFilterValue,
} from '../../redux/filter/filterOperations';
import css from './Filter.module.css';
import { selectFormData } from '../../redux/filter/filterSelectors';
import Dropdown from 'components/Dropdown/Dropdown';
import MenuItem from 'components/Dropdown/MenuItem/MenuItem';
import items from './items';
import price from './price';
import DropdownForPrice from 'components/DropdownForPrice/DropdownForPrice';
import MenuItemPrice from 'components/DropdownForPrice/MenuPriceItem/MenuPriceItem';

function Filter() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    dispatch(fetchAllCars(formData));
  };

  const handleValueComma = value => {
    let commaValue = value;
    if (value.length >= 4) {
      commaValue =
        value.slice(0, value.length - 3) + ',' + value.slice(value.length - 3);
    }
    return commaValue;
  };

  const handleChange = e => {
    const updatedValue = e.target.value.replace(/,/g, '');
    dispatch(changeFilterValue({ ...formData, [e.target.name]: updatedValue }));
  };

  return (
    <form className={css.filter} onSubmit={handleSubmit}>
      <div className={css.brandWrapper}>
        <p className={css.brandLabel}>Car brand</p>
        <Dropdown>
          {items.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Dropdown>
      </div>
      <div className={css.priceWrapper}>
        <p className={css.priceLabel}>Price/ 1 hour</p>
        <DropdownForPrice>
          {price.map(item => (
            <MenuItemPrice key={item} value={item}>
              {item}
            </MenuItemPrice>
          ))}
        </DropdownForPrice>
      </div>
      <div className={css.mileageWrapper}>
        <p className={css.mileageText}>Car mileage / km</p>
        <input
          type="text"
          name="mileageFrom"
          onChange={handleChange}
          value={handleValueComma(formData.mileageFrom)}
          className={css.mileageFrom}
          maxLength="6"
        />
        <p className={css.textFrom}>From</p>
        <input
          type="text"
          name="mileageTo"
          onChange={handleChange}
          value={handleValueComma(formData.mileageTo)}
          className={css.mileageTo}
          maxLength="6"
        />
        <p className={css.textTo}>To</p>
      </div>
      <button className={css.submitButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default Filter;
