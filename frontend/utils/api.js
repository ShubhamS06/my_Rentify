import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.BASE_URL}`, // Replace with your API base URL
});

export default api;
