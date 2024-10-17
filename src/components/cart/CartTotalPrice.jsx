import { useSelector } from 'react-redux';
import { CartTotalPriceWrap } from './styled';

const CartTotalPrice = () => {
    const { selloginUser } = useSelector((state) => state.auth);

    const totalPrice =
        selloginUser.user_type === 'wow'
            ? selloginUser.cart.product
                  .map((item) => item.product_sale_price * item.cnt)
                  .reduce((arr, crr) => arr + crr, 0)
            : selloginUser.cart.product
                  .map((item) => item.product_price * item.cnt)
                  .reduce((arr, crr) => arr + crr, 0);

    return (
        <CartTotalPriceWrap>
            <h3>주문 예상 금액</h3>
            <p className='total'>
                총 상품가격{' '}
                <span>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </p>
            <p className='total-sale'>
                총 할인<span>- 0원</span>
            </p>
            <p className='total-baesong'>
                총 배송비 <span>+ 0원</span>
            </p>
            <p className='end'>
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                <em>원</em>
            </p>
            <div className='btn-wrap'>
                <button>구매하기 ({selloginUser.cart.product.length})</button>
            </div>
        </CartTotalPriceWrap>
    );
};

export default CartTotalPrice;
