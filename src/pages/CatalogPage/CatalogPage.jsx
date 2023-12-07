import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/catalog/catalogOperations';
import Filter from 'components/Filter/Filter';
import CatalogList from 'components/CatalogList/CatalogList';

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <CatalogList />
    </div>
  );
}

export default CatalogPage;
