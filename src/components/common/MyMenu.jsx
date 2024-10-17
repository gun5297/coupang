import { useNavigate } from 'react-router-dom';
import { MyMenuWrap } from './styled';
import { useSelector } from 'react-redux';

const MyMenu = () => {
    const { selloginUser, isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    return (
        <MyMenuWrap>
            <li onClick={() => navigate('/mycoupang')}>
                <i className='xi-user-o' />
                <em>마이쿠팡</em>
            </li>
            <li onClick={() => navigate('/cart')}>
                <i className='xi-cart-o' />
                <em>장바구니</em>
                <span className='cart-length'>{isAuth ? selloginUser.cart.product.length : 0}</span>
            </li>
        </MyMenuWrap>
    );
};

export default MyMenu;
