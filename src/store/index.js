import { configureStore } from '@reduxjs/toolkit';
import Category from './modules/CategorySlice';
import Visual from './modules/VisualSlice';
import Todayproduct from './modules/TodayproductSlice';
import SideBanner from './modules/SideBannerSlice';
import Product from './modules/ProductSlice';
import auth from './modules/authSlice';

export const store = configureStore({
    reducer: { Category, Visual, Todayproduct, SideBanner, Product, auth },
});
