import { configureStore } from '@reduxjs/toolkit';
import Category from './modules/CategorySlice';
import Visual from './modules/VisualSlice';
import Todayproduct from './modules/TodayproductSlice';
import SideBanner from './modules/SideBannerSlice';
import Product from './modules/ProductSlice';

export const store = configureStore({
    reducer: { Category, Visual, Todayproduct, SideBanner, Product },
});
