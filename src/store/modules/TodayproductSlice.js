import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Todayproduct: [
        {
            id: 1,
            img: 'images/Todays/img1.jpg',
            name: '미샤환절기케어',
            category: 'Beauty',
            product_id: 6,
        },
        {
            id: 2,
            img: 'images/Todays/img2.jpg',
            name: '종근당건강홈삼정스틱',
            category: 'Food',
            product_id: 5,
        },
        {
            id: 3,
            img: 'images/Todays/img3.jpg',
            name: '손편한고무장갑',
            category: 'Household',
            product_id: 6,
        },
        {
            id: 4,
            img: 'images/Todays/img4.jpg',
            name: '스위트한국내멀티탭',
            category: 'Household',
            product_id: 7,
        },
        {
            id: 5,
            img: 'images/Todays/img5.jpg',
            name: 'Wi-Fi7',
            category: 'Electronics',
            product_id: 6,
        },
        {
            id: 6,
            img: 'images/Todays/img6.jpg',
            name: '아침앤두유제조기',
            category: 'Kitchen',
            product_id: 6,
        },
        {
            id: 7,
            img: 'images/Todays/img7.jpg',
            name: '고농축 피죤 보타닉',
            category: 'Household',
            product_id: 8,
        },
        {
            id: 8,
            img: 'images/Todays/img8.jpg',
            name: '혈압관리는오므론',
            category: 'Health',
            product_id: 3,
        },
        { id: 9, img: 'images/Todays/img9.jpg', name: '부산어묵', category: 'Food', product_id: 6 },
    ],
    selTodayProduct: {},
};

export const TodayproductSlice = createSlice({
    name: 'TodayproductSlice',
    initialState,
    reducers: {
        isSelTodayproduct: (state, action) => {
            state.selTodayProduct = state.Todayproduct.find((item) => item.id === action.payload);
        },
        isDelTodayproduct: (state) => {
            state.selTodayProduct = {};
        },
    },
});

export const { isSelTodayproduct, isDelTodayproduct } = TodayproductSlice.actions;
export default TodayproductSlice.reducer;
