import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const URL_DB = 'http://localhost:8080/users';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: '',
        displayName: '',
        users: [],
    },
    reducers: {
        setData: (state, action) => {
            state.userId = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
    }
});

export const addNewUser = createAsyncThunk('user/addNewUser', async (payload) => {
    const res = await axios.post(`${URL_DB}`, payload);
    console.log({ res })
    return res.data
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await axios.get(`${URL_DB}`);
    return res.data;
})

export const handleLogin = ({ users, userName, password }) => {
    const res = users.find(user => (user.userName === userName && bcrypt.compareSync(password, user.password)));
    return res
};
export const checkEistsUser = ({ users, userName }) => {
    const res = users.find(user => (user.userName === userName));
    return res
};

export default userSlice;