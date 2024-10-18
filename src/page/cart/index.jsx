import { useEffect } from 'react';
import { CartWrap } from './styled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../common/Footer';
import { InnerWrap } from '../../style/styled';
import CartList from '../../components/cart/CartList';
import CartTotalPrice from '../../components/cart/CartTotalPrice';

const Cart = () => {
    const { isAuth, selloginUser } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth]);
    if (isAuth)
        return (
            <>
                <CartWrap>
                    <InnerWrap>
                        <div className='top'>
                            <div className='img-wrap' onClick={() => navigate('/')}>
                                <img src='images/coupang-logo.png' alt='' />
                            </div>
                        </div>
                        <section className='containner'>
                            <div className='title' onClick={() => navigate('/')}>
                                <h3>
                                    <i className='xi-angle-left' />
                                    장바구니
                                </h3>
                            </div>
                            <div className='cart'>
                                {selloginUser.cart.product.length > 0 ? (
                                    <>
                                        <CartList />
                                        <CartTotalPrice />
                                    </>
                                ) : (
                                    <p className='no'>장바구니에 담은 상품이 없습니다.</p>
                                )}
                            </div>
                            <div className='go-product' onClick={() => navigate('/')}>
                                <img
                                    src='https://img1a.coupangcdn.com/image/static/product/cart/img_nonebasket4.jpg'
                                    alt='go'
                                />
                            </div>
                        </section>
                    </InnerWrap>
                </CartWrap>
                <Footer />
            </>
        );
};

export default Cart;
