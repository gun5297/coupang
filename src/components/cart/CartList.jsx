import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { CartListWrap } from './styled';
import { cartAllDelProduct } from '../../store/modules/authSlice';

const CartList = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <CartListWrap>
            {selloginUser.cart.product.map((cart) => (
                <CartItem key={cart.product_category + cart.product_id} {...cart} cart={cart} />
            ))}
            <span className='all-del-btn' onClick={() => dispatch(cartAllDelProduct())}>
                전체삭제
            </span>
        </CartListWrap>
    );
};

export default CartList;
