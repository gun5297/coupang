import { PaymentWrap } from './styled';
import { useEffect, useState } from 'react';

const Payment = () => {
    const [pop, setPop] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setPop(false);
        }, 3000);
    }, []);
    return (
        <PaymentWrap>
            <div className='title-wrap'>
                <p>상품 1개</p>
                <p>15,600원</p>
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
                        자동충전 <span>15,600원</span>
                    </p>
                </div>
                <span>카카오페이머니</span>
                <p>
                    충전계좌 <span>카카오뱅크 ****3812</span>
                </p>
            </div>
            <div className='btn-wrap'>
                <button className='pay-buy'>15,600원 결제하기</button>
            </div>
            {pop && (
                <div className='pop'>
                    <p>QR코드 까지 찍어봐주시다니 감사합니다 ^^</p>
                    <p>저를 봅아주신다면 신입 프론트엔드 개발자 라고</p>
                    <p>느끼지 못하도록 최고의 역량을 뿜어내겠습니다.</p>
                </div>
            )}
        </PaymentWrap>
    );
};

export default Payment;
