import { ProductPagingWrap } from './styled';

const ProductPaging = ({ pageNumber, onCurrent, pageChange, currentProduct }) => {
    const arr = [];
    for (let i = 1; i <= pageNumber; i++) {
        arr.push(i);
    }

    return (
        <ProductPagingWrap>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('prev');
                }}
            >{`<`}</a>
            {arr.map((item) => (
                <a
                    className={currentProduct === item ? 'active' : ''}
                    href='#'
                    key={item}
                    onClick={(e) => {
                        e.preventDefault();
                        onCurrent(item);
                    }}
                >
                    {item}
                </a>
            ))}
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('next');
                }}
            >{`>`}</a>
        </ProductPagingWrap>
    );
};

export default ProductPaging;
