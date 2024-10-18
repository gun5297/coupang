import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const sort = [
    { id: 1, name: '높은가격순', value: 'upprice' },
    { id: 2, name: '낮은가격순', value: 'downprice' },
    { id: 3, name: '만족도순', value: 'star' },
    { id: 4, name: '판매량순', value: 'good' },
];

export const useSort = (onProduct) => {
    const [selSort, setSelSort] = useState(sort[0].value);
    const [sortedProducts, setSortedProducts] = useState([...onProduct]);
    const { selloginUser } = useSelector((state) => state.auth);

    useEffect(() => {
        let sorted = [...onProduct];
        if (selSort === 'upprice') {
            if (selloginUser.user_type === 'wow') {
                sorted = sorted.sort((a, b) => b.product_sale_price - a.product_sale_price);
            } else {
                sorted = sorted.sort((a, b) => b.product_price - a.product_price);
            }
        } else if (selSort === 'downprice') {
            if (selloginUser.user_type === 'wow') {
                sorted = sorted.sort((a, b) => a.product_sale_price - b.product_sale_price);
            } else {
                sorted = sorted.sort((a, b) => a.product_price - b.product_price);
            }
        } else if (selSort === 'star') {
            sorted = sorted.sort((a, b) => b.product_review_percent - a.product_review_percent);
        } else if (selSort === 'good') {
            sorted = sorted.sort((a, b) => b.product_review - a.product_review);
        }
        setSortedProducts(sorted);
    }, [selSort, onProduct]);

    return { sort, selSort, setSelSort, sortedProducts };
};
