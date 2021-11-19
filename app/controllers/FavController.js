import {useSelector, useDispatch} from 'react-redux';
import LocalStorageService from '../services/LocalStorageService';
import {setFavItems} from '../store/actions/favoriteActions';

const FavController = () => {
  const dispatch = useDispatch();
  const favList = useSelector(state => state.favorites.favList);

  const addFavItem = async item => {
    const likedList = await LocalStorageService.addItemToFavorites(item);
    const numberArray = JSON.parse(likedList);
    dispatch(setFavItems(numberArray));
  };

  return {
    favList,
    addFavItem,
  };
};
export default FavController;
