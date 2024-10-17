const Product_sale_percent = ({ onProduct }) => {
    return (
        <em>
            {Math.round(
                ((onProduct.product_price - onProduct.product_sale_price) /
                    onProduct.product_price) *
                    100
            ) + '%'}
        </em>
    );
};

export default Product_sale_percent;
