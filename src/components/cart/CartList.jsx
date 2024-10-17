import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { CartListWrap } from './styled';

const CartList = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    return (
        <CartListWrap>
            {selloginUser.cart.product.map((cart) => (
                <CartItem key={cart.product_category + cart.product_id} {...cart} cart={cart} />
            ))}
        </CartListWrap>
    );
};

export default CartList;
