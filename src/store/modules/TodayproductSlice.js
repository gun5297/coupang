import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Todayproduct: [
        { id: 1, img: '/images/Todays/img1.jpg', name: '미샤환절기케어', category: 'Health' },
        { id: 2, img: '/images/Todays/img2.jpg', name: '종근당건강홈삼정스틱', category: 'Health' },
        { id: 3, img: '/images/Todays/img3.jpg', name: '손편한고무장갑', category: 'Household' },
        {
            id: 4,
            img: '/images/Todays/img4.jpg',
            name: '스위트한국내멀티탭',
            category: 'Household',
        },
        { id: 5, img: '/images/Todays/img5.jpg', name: 'Wi-Fi7', category: 'Electronics' },
        { id: 6, img: '/images/Todays/img6.jpg', name: '아침앤두유제조기', category: 'Kitchen' },
        {
            id: 7,
            img: '/images/Todays/img7.jpg',
            name: '고농축 피죤 보타닉',
            category: 'Household',
        },
        { id: 8, img: '/images/Todays/img8.jpg', name: '혈압관리는오므론', category: 'Health' },
        { id: 9, img: '/images/Todays/img9.jpg', name: '부산어묵', category: 'Food' },
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
