import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Category: [
        { id: 1, value: 'All', name: '전체' },
        { id: 2, value: 'WomensFashion', name: '여성패션' },
        { id: 3, value: 'MensFashion', name: '남성패션' },
        { id: 4, value: 'UnisexClothing', name: '남녀 공용 의류' },
        { id: 5, value: 'KidsFashion', name: '유아동패션' },
        { id: 6, value: 'Beauty', name: '뷰티' },
        { id: 7, value: 'MaternityBaby', name: '출산/유아동' },
        { id: 8, value: 'Food', name: '식품' },
        { id: 9, value: 'Kitchen', name: '주방용품' },
        { id: 10, value: 'Household', name: '생활용품' },
        { id: 11, value: 'HomeInterior', name: '홈인테리어' },
        { id: 12, value: 'Electronics', name: '가전디지털' },
        { id: 13, value: 'SportsLeisure', name: '스포츠/레저' },
        { id: 14, value: 'AutoAccessories', name: '자동차용품' },
        { id: 15, value: 'BooksMedia', name: '도서/음반/DVD' },
        { id: 16, value: 'ToysHobbies', name: '완구/취미' },
        { id: 17, value: 'Office', name: '문구/오피스' },
        { id: 18, value: 'PetSupplies', name: '반려동물용품' },
        { id: 19, value: 'Health', name: '헬스/건강식품' },
        { id: 20, value: 'DomesticTravel', name: '국내여행' },
        { id: 21, value: 'OverseasTravel', name: '해외여행' },
        { id: 22, value: 'RocketLuxury', name: '로켓럭셔리' },
        { id: 23, value: 'RocketInstall', name: '로켓설치' },
        { id: 24, value: 'CoupangPremium', name: '쿠팡 프리미엄' },
        { id: 25, value: 'HomeDecor', name: '공간별 집꾸미기' },
        { id: 26, value: 'Healthcare', name: '헬스케어 전문관' },
        { id: 27, value: 'CoupangOnly', name: '쿠팡 Only' },
        { id: 28, value: 'SingleLife', name: '싱글라이프' },
        { id: 29, value: 'MusicalInstruments', name: '악기전문관' },
        { id: 30, value: 'WeddingPrep', name: '결혼준비' },
        { id: 31, value: 'ArtCrafts', name: '아트/공예' },
        { id: 32, value: 'DustProducts', name: '미세먼지용품' },
        { id: 33, value: 'HomeCafe', name: '홈카페' },
        { id: 34, value: 'SilverStore', name: '실버스토어' },
        { id: 35, value: 'PetDoctor', name: '로켓펫닥터' },
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
