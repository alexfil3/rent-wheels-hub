import css from './Dropdown.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFormData,
  selectIsOpenBrand,
} from '../../redux/filter/filterSelectors';
import { changeIsOpen } from '../../redux/filter/filterOperations';

function Dropdown({ children }) {
  const dispatch = useDispatch();
  const isOpenBrand = useSelector(selectIsOpenBrand);
  const { brand } = useSelector(selectFormData);

  const handleOpen = () => {
    if (isOpenBrand) {
      dispatch(changeIsOpen(false));
    } else {
      dispatch(changeIsOpen(true));
    }
  };

  return (
    <div className={css.dropdownWrapper}>
      <button onClick={handleOpen} type="button" className={css.button}>
        {brand ? brand : 'Enter the text'}
        <span></span>
      </button>
      {isOpenBrand && <menu className={css.menu}>{children}</menu>}
    </div>
  );
}

export default Dropdown;
