import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const URL_DB = 'http://localhost:8080/api/products';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        products: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'idle';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'idle';
            })
            .addCase(addProduct.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
                state.status = 'idle';
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'idle';
            })
    }
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get(`${URL_DB}`);
    return res.data
});
export const addProduct = createAsyncThunk('products/addProduct', async (payload) => {
    const res = await axios.post(`${URL_DB}/add-new`, payload);
    return res.data
});


export default productSlice;