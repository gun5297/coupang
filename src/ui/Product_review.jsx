const Product_review = ({ product_review }) => {
    return (
        <p className='product_review'>
            {product_review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개 상품평
        </p>
    );
};

export default Product_review;
