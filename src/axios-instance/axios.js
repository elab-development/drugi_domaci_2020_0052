import axios  from "axios";

let axiosInstance;

if (window.sessionStorage.getItem('token') !== null){
    let token = window.sessionStorage.getItem('token');
    axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 15000,
    });
}else{
    axiosInstance = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 15000,
    });
}

export default axiosInstance;