import ProductItem from './ProductItem';
import { ProductListWrap } from './styled';

const ProductList = ({ product }) => {
    return (
        <ProductListWrap>
            {product.map((item) => (
                <ProductItem key={item.product_category + item.product_id} {...item} />
            ))}
        </ProductListWrap>
    );
};

export default ProductList;
