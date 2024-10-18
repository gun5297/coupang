import { useSelector } from 'react-redux';
import { PaymentPCWrap } from './styled';

const PaymentPC = ({ setPhone, totalPrice, setPay }) => {
    const { selloginUser } = useSelector((state) => state.auth);
    return (
        <PaymentPCWrap>
            <div className='title-wrap'>
                <p>상품 {selloginUser.cart.product.length}개</p>
                <p>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
            <div className='no-point'>
                <p>해당 결제수단에서는 페이포인트 사용이 불가합니다.</p>
            </div>
            <div className='card-wrap'>
                <div className='card'>
                    <p>Pay 머니</p>
                    <p>
                        현재잔액 <span>0원</span>
                    </p>
                    <p>
                        자동충전{' '}
                        <span>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
                    </p>
                </div>
                <span>카카오페이머니</span>
                <p>
                    충전계좌 <span>카카오뱅크 ****3812</span>
                </p>
            </div>
            <div className='btn-wrap'>
                <button
                    className='pay-buy'
                    onClick={() => {
                        setPay(true);
                        setPhone(false);
                    }}
                >
                    {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 결제하기
                </button>
            </div>
        </PaymentPCWrap>
    );
};

export default PaymentPC;
