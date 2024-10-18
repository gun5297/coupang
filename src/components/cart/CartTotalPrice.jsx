import { useDispatch, useSelector } from 'react-redux';
import { CartTotalPriceWrap } from './styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { purchaseAddProduct } from '../../store/modules/authSlice';
import PaymentPC from '../payment-pc/PaymentPC';
import { useDate } from '../../hooks/useDate';
import { usePrice } from '../../hooks/usePrice';

const CartTotalPrice = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    const { wowPrice, notWowPrice, totalPrice } = usePrice();
    const [buyPopup, setBuyPopup] = useState(false);
    const [phone, setPhone] = useState(false);
    const [pay, setPay] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buyClick = () => {
        if (pay) {
            alert('결제완료');
            setBuyPopup(false);
            dispatch(purchaseAddProduct(selloginUser.cart.product));
            navigate('/mycoupang');
        } else {
            alert('결제를 진행해 주세요');
        }
    };
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
                <button
                    onClick={() => {
                        setTimeout(() => {
                            setPhone(true);
                        }, 3000);
                        setBuyPopup(true);
                    }}
                >
                    구매하기 ({selloginUser.cart.product.length})
                </button>
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
            {buyPopup && (
                <div className='kakaopay'>
                    <div className='img-wrap'>
                        <img src='payment.svg' alt='' />
                    </div>
                    <div className='btn-wrap'>
                        <button onClick={buyClick}>결제완료</button>
                    </div>
                </div>
            )}
            {phone && (
                <div className='phone-wrap'>
                    <PaymentPC setPhone={setPhone} totalPrice={totalPrice} setPay={setPay} />
                </div>
            )}
        </CartTotalPriceWrap>
    );
};

export default CartTotalPrice;
