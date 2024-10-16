import { useNavigate } from 'react-router-dom';
import { MyMenuWrap } from './styled';

const MyMenu = () => {
    const navigate = useNavigate();
    return (
        <MyMenuWrap>
            <li onClick={() => navigate('/mycoupang')}>
                <i className='xi-user-o' />
                <em>마이쿠팡</em>
            </li>
            <li>
                <i className='xi-cart-o' />
                <em>장바구니</em>
                <span className='cart-length'>0</span>
            </li>
        </MyMenuWrap>
    );
};

export default MyMenu;
