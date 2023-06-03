import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-co3d.onrender.com',
});

export default api;