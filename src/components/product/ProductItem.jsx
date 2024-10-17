import { useNavigate } from 'react-router-dom';
import { ProductItemWrap } from './styled';
import Product_review_percent from '../../ui/Product_review_percent';

const ProductItem = ({
    product_id,
    product_img,
    product_name,
    product_price,
    product_sale_price,
    product_review_percent,
    product_review,
    product_category,
}) => {
    const navigate = useNavigate();
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    return (
        <ProductItemWrap
            onClick={() => navigate(`/product/${product_category}/info/${product_id}`)}
        >
            <div className='img-wrap'>
                <img src={product_img} alt={product_name} />
            </div>
            <div className='shipping-information'>
                <p className='shipping-type'>무료배송</p>
            </div>
            <div className='product_name'>
                <p>{product_name}</p>
            </div>
            <div className='price'>
                <span className='sale'>즉시할인가</span>
                <em>
                    {Math.round(((product_price - product_sale_price) / product_price) * 100) + '%'}
                </em>
                <span>{product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
                <p className='product_sale_price'>
                    {product_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </p>
            </div>
            <div className='shipping'>
                <p className='shipping-day'>
                    모레 {month}/{date + 2} 도착예정
                </p>
            </div>
            <div className='review'>
                <Product_review_percent product_review_percent={product_review_percent} />
                <span>({product_review})</span>
            </div>
        </ProductItemWrap>
    );
};

export default ProductItem;
