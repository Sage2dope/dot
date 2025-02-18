import axios from 'axios';


// API URL from the environment variable that sends and receives data from the backend
// The environment variable is defined in the .env.example file


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;