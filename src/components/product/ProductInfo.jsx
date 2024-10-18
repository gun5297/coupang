import { useParams } from 'react-router-dom';
import { ProductInfoWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Recommended from './Recommended';
import Product_sale_price from '../../ui/Product_sale_price';
import Product_price from '../../ui/Product_price';
import Product_review_percent from '../../ui/Product_review_percent';
import { useDate } from '../../hooks/useDate';
import { cartAddProduct } from '../../store/modules/authSlice';
import Product_review from '../../ui/Product_review';
import Product_sale_percent from '../../ui/Product_sale_percent';
import Product_no_price from '../../ui/Product_no_price';
import ProductPopup from './ProductPopup';

const ProductInfo = () => {
    const { category, product_id } = useParams();
    const [cartPopup, setCartPopup] = useState(false);
    const [cnt, setCnt] = useState(1);
    const { Product } = useSelector((state) => state.Product);
    const onProduct = Product[category].product.find(
        (item) => item.product_id === Number(product_id)
    );
    const isProduct = Product[category].product.filter(
        (item) => item.product_id !== onProduct.product_id
    );
    const { month, date } = useDate();
    const dispatch = useDispatch();
    const addCartClick = () => {
        setCartPopup(true);
        dispatch(cartAddProduct({ ...onProduct, cnt }));
        setTimeout(() => {
            setCartPopup(false);
        }, 3000);
    };

    useEffect(() => {
        setCnt(1);
        window.scrollTo({
            top: 0,
        });
        setCartPopup(false);
    }, [onProduct, category, product_id]);
    return (
        <ProductInfoWrap>
            <div className='top-wrap'>
                <div className='img-wrap'>
                    <img src={onProduct.product_img} alt={onProduct.product_name} />
                </div>
                <div className='text-wrap'>
                    <h2 className='product_name'>
                        {onProduct.product_name},{onProduct.product_in_cnt}개 , {cnt}개
                    </h2>
                    <div className='review'>
                        <Product_review_percent
                            product_review_percent={onProduct.product_review_percent}
                        />
                        <Product_review product_review={onProduct.product_review} />
                    </div>
                    <div className='price'>
                        <Product_sale_percent onProduct={onProduct} />
                        <Product_no_price product_price={onProduct.product_price} />
                        <Product_price onProduct={onProduct} cnt={cnt} />
                        <Product_sale_price onProduct={onProduct} cnt={cnt} />
                    </div>
                    <div className='product-cnt'>
                        <span>수량 : {cnt}개</span>
                    </div>
                    <div className='shipping-information'>
                        <p className='shipping-type'>무료배송</p>
                        <p className='shipping-day'>
                            모레 {month}/{date + 2} 도착예정
                        </p>
                    </div>
                    <div className='product_seller'>
                        <p>
                            판매자 : <span>{onProduct.product_seller}</span>
                        </p>
                    </div>
                    <div className='cj'>
                        <span>배송사 : CJ대한통운</span>
                    </div>
                    <div className='btn-wrap'>
                        <input
                            type='number'
                            name=''
                            id=''
                            value={cnt}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setCnt(!isNaN(value) && value >= 1 ? value : 1);
                            }}
                        />
                        <button className='cart' onClick={addCartClick}>
                            장바구니
                        </button>
                        <button className='buy'>
                            바로구매 <i className='xi-angle-right-min' />
                        </button>
                        {cartPopup && <ProductPopup />}
                    </div>
                </div>
            </div>
            <Recommended isProduct={isProduct} />
            <div className='btm-wrap'>
                <div className='tab-menu-wrap'>
                    <ul>
                        <li className='active'>상품상세</li>
                        <li>
                            상품평 (
                            {onProduct.product_review
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            )
                        </li>
                        <li>상품문의</li>
                        <li>배송/교환/반품 안내</li>
                    </ul>
                </div>
                <div className='product_info_img'>
                    {onProduct.product_info_img.map((img, idx) => (
                        <img src={img} key={idx}></img>
                    ))}
                </div>
            </div>
        </ProductInfoWrap>
    );
};

export default ProductInfo;
