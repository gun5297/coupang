import { useNavigate, useParams } from 'react-router-dom';
import { Product_review_percent, ProductInfoWrap } from './styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ProductInfo = () => {
    const { category, product_id } = useParams();
    const [cnt, setCnt] = useState(1);
    const { Product } = useSelector((state) => state.Product);
    const onProduct = Product[category].product.find(
        (item) => item.product_id === Number(product_id)
    );
    const isProduct = Product[category].product.filter(
        (item) => item.product_id !== onProduct.product_id
    );
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const navigate = useNavigate();

    useEffect(() => {
        setCnt(1);
        window.scrollTo({
            top: 0,
        });
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
                        <Product_review_percent width={onProduct.product_review_percent + '%'}>
                            <span className='product_review_percent0'></span>
                            <span className='product_review_percent1'></span>
                        </Product_review_percent>
                        <p className='product_review'>
                            {onProduct.product_review
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            개 상품평
                        </p>
                    </div>
                    <div className='price'>
                        <em>
                            {Math.round(
                                ((onProduct.product_price - onProduct.product_sale_price) /
                                    onProduct.product_price) *
                                    100
                            ) + '%'}
                        </em>
                        <span>
                            {onProduct.product_price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                        </span>
                        <p className='product_price'>
                            {(onProduct.product_price * cnt)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                            <span>
                                (1개당{' '}
                                {(onProduct.product_price / onProduct.product_in_cnt)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                원) 쿠팡판매가
                            </span>
                        </p>
                        <p className='product_sale_price'>
                            {(onProduct.product_sale_price * cnt)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                            <span>
                                (1개당{' '}
                                {(onProduct.product_sale_price / onProduct.product_in_cnt)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                원) 와우할인가
                            </span>
                        </p>
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
                        <button className='cart'>장바구니</button>
                        <button className='buy'>
                            바로구매 <i className='xi-angle-right-min' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='recommended-product'>
                <h2>
                    현재 보고있는 상품과 유사한 상품 <span>추천!</span>
                </h2>
                <ul>
                    {isProduct.map((item) => (
                        <li
                            key={item.product_id}
                            onClick={() => navigate(`/product/${category}/info/${item.product_id}`)}
                        >
                            <div className='img-wrap'>
                                <img src={item.product_img} alt={item.product_name} />
                            </div>
                            <div className='review'>
                                <Product_review_percent width={item.product_review_percent + '%'}>
                                    <span className='product_review_percent0'></span>
                                    <span className='product_review_percent1'></span>
                                </Product_review_percent>
                                <p className='product_review'>{item.product_review}개 상품평</p>
                            </div>
                            <div className='text-wrap'>
                                <p>{item.product_name}</p>
                            </div>
                            <div className='price-wrap'>
                                <span>
                                    {item.product_price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    원
                                </span>
                                <span>
                                    {item.product_sale_price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    원
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
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
