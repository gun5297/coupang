const Product_no_price = ({ product_price }) => {
    return <span>{product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>;
};

export default Product_no_price;
