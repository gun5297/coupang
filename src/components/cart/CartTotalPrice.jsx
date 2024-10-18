import { useSelector } from 'react-redux';
import { CartTotalPriceWrap } from './styled';

const CartTotalPrice = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    const wowPrice = selloginUser.cart.product
        .map((item) => item.product_sale_price * item.cnt)
        .reduce((arr, crr) => arr + crr, 0);
    const notWowPrice = selloginUser.cart.product
        .map((item) => item.product_price * item.cnt)
        .reduce((arr, crr) => arr + crr, 0);
    const totalPrice = selloginUser.user_type === 'wow' ? wowPrice : notWowPrice;

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
            {selloginUser.user_type !== 'wow' && (
                <p className='end wow-end'>
                    <span>WOW 회원 변경시</span>
                    <div>
                        {wowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        <em>원</em>
                    </div>
                </p>
            )}

            <div className='btn-wrap'>
                <button>구매하기 ({selloginUser.cart.product.length})</button>
            </div>
            {selloginUser.user_type !== 'wow' && (
                <div className='wow-change'>
                    <p>WOW 회원으로 변경하고</p>
                    <p>
                        {(notWowPrice - wowPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                    </p>
                    <p>추가 할인받으세요</p>
                </div>
            )}
        </CartTotalPriceWrap>
    );
};

export default CartTotalPrice;
