import { useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import Favorite from 'components/FavoriteList/Favorite';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import { selectIsModalWindowOpen } from '../../redux/catalog/catalogSelectors';

function FavoritesPage() {
  const isModalWindowOpen = useSelector(selectIsModalWindowOpen);

  return (
    <div>
      <Filter />
      <Favorite />
      {isModalWindowOpen && <ModalWindow />}
    </div>
  );
}

export default FavoritesPage;
