import axios from 'axios';

// Create an instance of axios
const instance = axios.create({
    baseURL: "http://localhost:8001",
});

// Request Interceptor - Logs request details
instance.interceptors.request.use(
    (request) => {
        console.log('Starting Request:', request);
        return request;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor - Logs response details
instance.interceptors.response.use(
    (response) => {
        console.log('Response:', response);
        return response;
    },
    (error) => {
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);

export default instance;
