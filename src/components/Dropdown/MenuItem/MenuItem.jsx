import { useDispatch, useSelector } from 'react-redux';
import css from './MenuItem.module.css';
import {
  changeFilterValue,
  changeIsOpen,
} from '../../../redux/filter/filterOperations';
import { selectFormData } from '../../../redux/filter/filterSelectors';

function MenuItem(props, ref) {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const handleClick = e => {
    dispatch(
      changeFilterValue({ ...formData, brand: e.currentTarget.textContent })
    );
    dispatch(changeIsOpen(false));
  };

  return (
    <div className={css.item} onClick={e => handleClick(e)}>
      {props.children}
    </div>
  );
}

export default MenuItem;
