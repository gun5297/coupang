import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Category: [
        { id: 1, value: 'All', name: '전체' },
        { id: 2, value: 'WomensFashion', name: '여성패션' },
        { id: 3, value: 'MensFashion', name: '남성패션' },
        { id: 6, value: 'Beauty', name: '뷰티' },
        { id: 8, value: 'Food', name: '식품' },
        { id: 9, value: 'Kitchen', name: '주방용품' },
        { id: 10, value: 'Household', name: '생활용품' },
        { id: 11, value: 'HomeInterior', name: '홈인테리어' },
        { id: 12, value: 'Electronics', name: '가전디지털' },
        { id: 14, value: 'AutoAccessories', name: '자동차용품' },
        { id: 17, value: 'Office', name: '문구/오피스' },
        { id: 19, value: 'Health', name: '헬스/건강식품' },
        { id: 28, value: 'SingleLife', name: '싱글라이프' },
        { id: 30, value: 'WeddingPrep', name: '결혼준비' },
        { id: 31, value: 'ArtCrafts', name: '아트/공예' },
    ],
    selCategory: { id: 1, value: 'All', name: '전체' },
};

export const CategorySlice = createSlice({
    name: 'CategorySlice',
    initialState,
    reducers: {
        isSelCategory: (state, action) => {
            state.selCategory = state.Category.find((item) => item.id === action.payload);
        },
    },
});

export const { isSelCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
