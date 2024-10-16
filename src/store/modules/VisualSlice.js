import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Visual: [
        { id: 1, img: '/images/Visual/main1.png', minimg: '/images/Visual/main1_min.jpg' },
        { id: 2, img: '/images/Visual/main2.png', minimg: '/images/Visual/main2_min.png' },
        { id: 3, img: '/images/Visual/main3.jpg', minimg: '/images/Visual/main3_min.jpg' },
        { id: 4, img: '/images/Visual/main4.jpg', minimg: '/images/Visual/main4_min.jpg' },
        { id: 5, img: '/images/Visual/main5.jpg', minimg: '/images/Visual/main5_min.jpg' },
        { id: 6, img: '/images/Visual/main6.jpg', minimg: '/images/Visual/main6_min.jpg' },
    ],
    selVisual: { id: 1, img: '/images/Visual/main1.png', minimg: '/images/Visual/main1_min.png' },
};

export const VisualSlice = createSlice({
    name: 'VisualSlice',
    initialState,
    reducers: {
        isSelVisual: (state, action) => {
            state.selVisual = state.Visual.find((item) => item.id === action.payload);
        },
    },
});

export const { isSelVisual } = VisualSlice.actions;
export default VisualSlice.reducer;
