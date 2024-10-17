import { useState } from 'react';

export const usePaging = (onProduct, posts) => {
    const [state, setState] = useState(1);
    const postsPerPage = posts;
    const totalPage = onProduct.length;
    const lastPost = state * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const onProducts = onProduct.slice(firstPost, lastPost);

    const onCurrent = (id) => {
        setState(id);
    };
    const pageChange = (x) => {
        if (x == 'next') {
            setState((cnt) => (cnt < pageNumber ? cnt + 1 : cnt));
        } else if (x == 'prev') {
            setState((cnt) => (cnt > 1 ? cnt - 1 : cnt));
        }
    };

    return { state, onProducts, pageNumber, pageChange, onCurrent };
};
