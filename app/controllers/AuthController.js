import {useSelector, useDispatch} from 'react-redux';
import {login} from '../store/actions/mainActions';

const AuthController = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);

  const loginProcess = (userName, password) => {
    dispatch(login(userName, password));
  };

  return {
    auth,
    loginProcess,
    loading,
  };
};
export default AuthController;
