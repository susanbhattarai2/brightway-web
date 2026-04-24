import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.8:100/api/frontend", // ✅ replace with your Laravel API base URL
  timeout: 20000,
});


export default api;
