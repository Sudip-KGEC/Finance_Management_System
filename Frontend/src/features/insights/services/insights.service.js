import api from "../../../shared/services/api";

export const getCategoryInsights = async () => {
  const response = await api.get("/insights/category");
  return response.data;
};


export const getMonthlyInsights = async () => {
  const response = await api.get("/insights/monthly");
  return response.data;
};