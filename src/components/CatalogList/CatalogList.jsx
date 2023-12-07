import { useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/catalogSelectors';

function CatalogList() {
  const cars = useSelector(selectCatalog);
  if (cars) {
    console.log(cars);
  }

  return (
    <ul>
      <li>ulList!!!</li>
    </ul>
  );
}

export default CatalogList;
