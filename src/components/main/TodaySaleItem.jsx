import { useNavigate } from 'react-router-dom';
import Product_review_percent from '../../ui/Product_review_percent';
import { TodaySaleItemWrap } from './styled';

const TodaySaleItem = ({
    product_category,
    product_id,
    product_img,
    product_name,
    product_review_percent,
    product_sale_price,
    product_review,
}) => {
    const navigate = useNavigate();
    return (
        <TodaySaleItemWrap
            onClick={() => navigate(`/product/${product_category}/info/${product_id}`)}
        >
            <div className='img-wrap'>
                <img src={product_img} alt={product_name} />
            </div>
            <p className='name'>{product_name}</p>
            <p className='product_sale_price'>
                {product_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </p>
            <div className='review'>
                <Product_review_percent product_review_percent={product_review_percent} />
                <span>({product_review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</span>
            </div>
        </TodaySaleItemWrap>
    );
};

export default TodaySaleItem;
