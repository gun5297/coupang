import { useDispatch, useSelector } from 'react-redux';
import { CartItemWrap } from './styled';
import Product_no_price from '../../ui/Product_no_price';
import Product_sale_percent from '../../ui/Product_sale_percent';
import { useState } from 'react';
import {
    cartAllDelProduct,
    cartDelProduct,
    cartProductCntChange,
} from '../../store/modules/authSlice';

const CartItem = ({
    product_category,
    product_id,
    product_img,
    cnt,
    product_price,
    product_sale_price,
    product_name,
    cart,
}) => {
    const { selloginUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <CartItemWrap>
            <div className='con-box'>
                <div className='img-wrap'>
                    <img src={product_img} alt={product_name} />
                </div>
                <div className='text-wrap'>
                    <div className='name'>
                        <p className='name'>{product_name}</p>
                    </div>
                    <div className='sale'>
                        <Product_sale_percent onProduct={cart} />
                        <Product_no_price
                            product_price={product_price * cnt}
                            className='Product_no_price'
                        />
                    </div>
                    <div className='price'>
                        <p>
                            {selloginUser.user_type === 'wow'
                                ? (product_sale_price * cnt)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : (product_price * cnt)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                        </p>
                    </div>
                    <div className='product-cnt'>
                        <input
                            type='number'
                            name='product-cnt'
                            value={cnt}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                dispatch(
                                    cartProductCntChange({
                                        product_id,
                                        product_category,
                                        cnt: !isNaN(value) && value >= 1 ? value : 1,
                                    })
                                );
                            }}
                        />
                    </div>
                </div>
                <span
                    className='del-btn'
                    onClick={() => dispatch(cartDelProduct({ product_category, product_id }))}
                >
                    삭제
                </span>
            </div>
            <div className='product-info'>
                <p>
                    상품가격
                    <span>
                        {selloginUser.user_type === 'wow'
                            ? (product_sale_price * cnt)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            : (product_price * cnt)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    원 +
                </p>
                <p>
                    배송비 <span>무료</span> =
                </p>

                <p>
                    주문금액
                    <span>
                        {selloginUser.user_type === 'wow'
                            ? (product_sale_price * cnt)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            : (product_price * cnt)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                    </span>
                </p>
            </div>
        </CartItemWrap>
    );
};

export default CartItem;
