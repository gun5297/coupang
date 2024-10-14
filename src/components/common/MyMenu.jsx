import { MyMenuWrap } from './styled';

const MyMenu = () => {
    return (
        <MyMenuWrap>
            <li>
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
