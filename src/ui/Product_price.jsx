const Product_price = ({ onProduct, cnt }) => {
    return (
        <p className='product_price'>
            {(onProduct.product_price * cnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            <span>
                (1개당{' '}
                {(onProduct.product_price / onProduct.product_in_cnt)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원) 쿠팡판매가
            </span>
        </p>
    );
};

export default Product_price;
