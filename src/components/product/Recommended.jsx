import { useNavigate, useParams } from 'react-router-dom';
import { RecommendedWrap } from './styled';
import Product_review_percent from '../../ui/Product_review_percent';

const Recommended = ({ isProduct }) => {
    const { category } = useParams();
    const navigate = useNavigate();
    return (
        <RecommendedWrap>
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
                            <Product_review_percent
                                product_review_percent={item.product_review_percent}
                            />
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
        </RecommendedWrap>
    );
};

export default Recommended;
