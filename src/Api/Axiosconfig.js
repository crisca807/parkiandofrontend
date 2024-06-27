import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api-rest-node-js-parkiando.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;