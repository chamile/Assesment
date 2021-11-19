import {useSelector, useDispatch} from 'react-redux';
import {search} from '../store/actions/searchActions';

const HomeController = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.search.data);
  const searchProcess = searchText => {
    dispatch(search(searchText));
  };

  return {
    searchData,
    searchProcess,
  };
};
export default HomeController;
