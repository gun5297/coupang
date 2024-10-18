const Product_sale_price = ({ onProduct, cnt }) => {
    return (
        <p className='product_sale_price'>
            {(onProduct.product_sale_price * cnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
            <span>
                (1개당
                {Math.floor(onProduct.product_sale_price / onProduct.product_in_cnt)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원) 와우할인가
            </span>
        </p>
    );
};

export default Product_sale_price;
