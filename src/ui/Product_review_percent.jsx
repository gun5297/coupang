import styled from 'styled-components';
const Product_review_percent_Wrap = styled.div`
    position: relative;
    margin-right: 10px;
    width: 70px;
    height: 14px;
    .product_review_percent0 {
        position: absolute;
        left: 0;
        top: 0;
        background-image: url('/images/Review/nostar.svg');
        background-position: 0 0;
        width: 100%;
        height: 12px;
        background-size: 14px;
    }
    .product_review_percent1 {
        position: absolute;
        left: 0;
        top: 0;
        background-image: url('/images/Review/star.svg');
        background-position: 0 0;
        width: ${(props) => (props.width ? props.width : '0%')};
        height: 12px;
        background-size: 14px;
        z-index: 1;
    }
`;
const Product_review_percent = ({ product_review_percent }) => {
    return (
        <Product_review_percent_Wrap width={product_review_percent + '%'}>
            <span className='product_review_percent0'></span>
            <span className='product_review_percent1'></span>
        </Product_review_percent_Wrap>
    );
};

export default Product_review_percent;
