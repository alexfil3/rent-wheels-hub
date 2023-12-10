import css from './DropdownForPrice.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFormData,
  selectIsOpenPrice,
} from '../../redux/filter/filterSelectors';
import { changeIsOpenPrice } from '../../redux/filter/filterOperations';

function DropdownForPrice({ children }) {
  const dispatch = useDispatch();
  const isOpenPrice = useSelector(selectIsOpenPrice);
  const { price } = useSelector(selectFormData);

  const handleOpen = () => {
    if (isOpenPrice) {
      dispatch(changeIsOpenPrice(false));
    } else {
      dispatch(changeIsOpenPrice(true));
    }
  };

  return (
    <div className={css.dropdownWrapper}>
      <button onClick={handleOpen} type="button" className={css.button}>
        {price ? `To ${price}$` : 'To $'}
        <span></span>
      </button>
      {isOpenPrice && <menu className={css.menu}>{children}</menu>}
    </div>
  );
}

export default DropdownForPrice;
