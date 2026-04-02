import api from "../../../shared/services/api.js";


export const getDashboardData = async () => {
    const response = await api.get("/dashboard");
    return response.data;
}