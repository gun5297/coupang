import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SideBanner: [
        { id: 1, img: 'images/SideBanner/img1.jpg', name: '이,쓸때잘하자' },
        { id: 2, img: 'images/SideBanner/img2.jpg', name: '비스코프원바디탑핏' },
        { id: 3, img: 'images/SideBanner/img3.jpg', name: '쿠팡Only' },
        { id: 4, img: 'images/SideBanner/img4.jpg', name: '가을여행특가' },
        { id: 5, img: 'images/SideBanner/img5.png', name: '해외상품도로켓배송으로' },
        { id: 6, img: 'images/SideBanner/img6.png', name: '금주의특가왕' },
        { id: 7, img: 'images/SideBanner/img7.png', name: '쿠팡에서판매시작하기' },
    ],
};

export const SideBannerSlice = createSlice({
    name: 'SideBannerSlice',
    initialState,
    reducers: {},
});

export default SideBannerSlice.reducer;
