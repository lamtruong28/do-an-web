import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from '../components/Modal/modalSlice';
import formSlice from './formSlice';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        form: formSlice.reducer,
        products: productSlice.reducer,
    }
});

export default store;