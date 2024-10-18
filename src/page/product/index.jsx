import { useParams } from 'react-router-dom';
import { InnerWrap } from '../../style/styled';
import { ProductWrap } from './styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/product/ProductList';
import { getAllProducts } from '../../store/modules/ProductSlice';
import ProductPaging from '../../components/product/ProductPaging';
import { usePaging } from '../../hooks/usePaging';
import SortMenu from '../../components/product/SortMenu';
import { useSort } from '../../hooks/useSort';

const Product = () => {
    const { category, search } = useParams();
    const { Product, allProducts } = useSelector((state) => state.Product);
    const [onProduct, setOnProduct] = useState([]);
    const { sort, selSort, setSelSort, sortedProducts } = useSort(onProduct);
    const { state, pageChange, onCurrent, onProducts, pageNumber } = usePaging(sortedProducts, 16);

    const dispatch = useDispatch();
    useEffect(() => {
        if (category === 'All') {
            if (search) {
                const secProduct = allProducts.filter((item) => item.product_name.includes(search));
                setOnProduct(secProduct);
            } else {
                setOnProduct(allProducts);
            }
        } else {
            if (search) {
                setOnProduct(
                    Product[category].product.filter((item) => item.product_name.includes(search))
                );
            } else {
                setOnProduct(Product[category].product);
            }
        }
    }, [category, search, allProducts, Product]);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [state]);

    return (
        <ProductWrap>
            <InnerWrap className='inner'>
                <h2>
                    {search
                        ? `"${search}" 검색 결과`
                        : category === 'All'
                        ? '전체 상품'
                        : `${Product[category].name} 상품`}
                </h2>
                <SortMenu sort={sort} selSort={selSort} setSelSort={setSelSort} />
                {onProducts.length > 0 ? (
                    <>
                        <ProductList product={onProducts} />
                        <ProductPaging
                            pageNumber={pageNumber}
                            onCurrent={onCurrent}
                            pageChange={pageChange}
                            currentProduct={state}
                        />
                    </>
                ) : (
                    <p>찾으시는 상품이 없습니다</p>
                )}
            </InnerWrap>
        </ProductWrap>
    );
};

export default Product;
