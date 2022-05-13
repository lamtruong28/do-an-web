import axios from 'axios';
const URL_DB = 'http://localhost:8080/api/users';
export const handleLogin = async (payload) => {
    try {
        const res = await axios.post(`${URL_DB}/login`, payload);
        return res.data;
    } catch (error) {
        return error.response.data
    }
};
