import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.VITE_API_URL + "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;   
