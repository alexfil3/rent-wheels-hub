import { useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/catalogSelectors';

function CatalogList() {
  const cars = useSelector(selectCatalog);
  console.log(cars, 'cars');
  return (
    <ul>
      <li>ulList!!!</li>
    </ul>
  );
}

export default CatalogList;
