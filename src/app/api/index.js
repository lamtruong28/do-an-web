import axios from 'axios';
const URL_DB = 'http://localhost:8080/users';
export const handleLogin = async (payload) => {
    const res = await axios.post(`${URL_DB}/login`, payload);
    console.log(res.data)
    return res.data;
};
