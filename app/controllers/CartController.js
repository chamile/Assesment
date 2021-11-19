import {ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, clearCart} from '../store/actions/cartActions';

const CartController = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.items);
  const orderSuccess = useSelector(state => state.cart.orderSuccess);

  const addItem = item => {
    ToastAndroid.show(`${item.title} addded to the cart`, ToastAndroid.SHORT);
    dispatch(addToCart(item));
  };
  const clearItemsCart = clear => {
    dispatch(clearCart(clear));
  };

  return {
    itemsInCart,
    clearItemsCart,
    addItem,
    orderSuccess,
  };
};
export default CartController;
