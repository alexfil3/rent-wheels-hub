import { useDispatch, useSelector } from 'react-redux';
import {
  selectCatalog,
  selectIsLoadMoreShown,
} from '../../redux/catalog/catalogSelectors';
import CatalogListItem from './CatalogListItem/CatalogListItem';
import { fetchCars } from '../../redux/catalog/catalogOperations';
import { useEffect, useState } from 'react';
import { selectFilteredCars } from '../../redux/filter/filterSelectors';
import css from './CatalogList.module.css';

function CatalogList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCatalog);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoadMoreShown = useSelector(selectIsLoadMoreShown);
  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <div className={css.catalogWrapper}>
      <ul className={css.flexList}>
        {(filteredCars.length !== 0 ? filteredCars : cars).map(
          ({
            year,
            make,
            model,
            rentalPrice,
            address,
            rentalCompany,
            type,
            id,
            functionalities,
            img,
          }) => {
            return (
              <CatalogListItem
                key={id}
                year={year}
                make={make}
                model={model}
                rentalPrice={rentalPrice}
                address={address}
                rentalCompany={rentalCompany}
                type={type}
                id={id}
                functionalities={functionalities}
                img={img}
              />
            );
          }
        )}
      </ul>
      {isLoadMoreShown && (
        <button className={css.loadMoreButton} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

export default CatalogList;
