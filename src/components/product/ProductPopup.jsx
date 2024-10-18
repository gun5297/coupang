import { useNavigate } from 'react-router-dom';
import { ProductPopupWrap } from './styled';
import { useSelector } from 'react-redux';

const ProductPopup = () => {
    const navigate = useNavigate();
    const { selloginUser } = useSelector((state) => state.auth);
    return (
        <ProductPopupWrap className='popup'>
            <p>{selloginUser.cart.product.length}개의 상품이 장바구니에 담겼습니다.</p>
            <button className='buy' onClick={() => navigate('/cart')}>
                장바구니 이동하기 <i className='xi-angle-right-min' />
            </button>
        </ProductPopupWrap>
    );
};

export default ProductPopup;
