import { useDispatch, useSelector } from 'react-redux';
import css from './MenuPriceItem.module.css';
import {
  changeFilterValue,
  changeIsOpenPrice,
} from '../../../redux/filter/filterOperations';
import { selectFormData } from '../../../redux/filter/filterSelectors';

function MenuItemPrice(props, ref) {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  // const { active, disabled, children, ...rest } = props;

  const handleClick = e => {
    if (e.currentTarget.textContent === 'To $') {
      dispatch(
        changeFilterValue({
          ...formData,
          price: '',
        })
      );
    } else {
      dispatch(
        changeFilterValue({
          ...formData,
          price: e.currentTarget.textContent,
        })
      );
    }
    dispatch(changeIsOpenPrice(false));
  };

  return (
    <div className={css.item} onClick={e => handleClick(e)}>
      {props.children}
    </div>
  );
}

export default MenuItemPrice;
