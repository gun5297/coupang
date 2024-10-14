import { configureStore } from '@reduxjs/toolkit';
import Category from './modules/CategorySlice';
import Visual from './modules/VisualSlice';

export const store = configureStore({
    reducer: { Category, Visual },
});
