import axios from "axios";

const api = axios.create({
  baseURL: "https://finance-management-system-ijn7.onrender.com/api",
  withCredentials: true,
});

export default api;