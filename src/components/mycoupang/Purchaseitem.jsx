import { useDispatch } from 'react-redux';
import { PurchaseitemWrap } from './styled';
import { cartAddProduct, purchaseDelProduct } from '../../store/modules/authSlice';

const Purchaseitem = ({ product, user_type }) => {
    const dispatch = useDispatch();
    return (
        <PurchaseitemWrap>
            <div className='img-wrap'>
                <img src={product.product_img} alt={product.product_name} />
            </div>
            <div className='text-wrap'>
                <p>
                    {product.product_name}, {product.product_in_cnt}개
                </p>
                <p>
                    {user_type === 'wow'
                        ? (product.product_sale_price * product.cnt)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : (product.product_price * product.cnt)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원, <span>{product.cnt}개</span>
                </p>
            </div>
            <div className='btn-wrap'>
                <button onClick={() => dispatch(purchaseDelProduct(product.id))}>삭제</button>
                <button onClick={() => dispatch(cartAddProduct(product))}>장바구니 담기</button>
            </div>
        </PurchaseitemWrap>
    );
};

export default Purchaseitem;
