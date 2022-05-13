import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from '../components/Modal/modalSlice';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        products: productSlice.reducer,
    }
});

export default store;