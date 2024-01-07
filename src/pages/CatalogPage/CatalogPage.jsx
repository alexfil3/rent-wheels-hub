import Filter from 'components/Filter/Filter';
import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectIsModalWindowOpen } from '../../redux/catalog/catalogSelectors';
import ModalWindow from 'components/ModalWindow/ModalWindow';

function CatalogPage() {
  const isModalWindowOpen = useSelector(selectIsModalWindowOpen);

  return (
    <div>
      <Filter />
      <CatalogList />
      {isModalWindowOpen && <ModalWindow />}
    </div>
  );
}

export default CatalogPage;
