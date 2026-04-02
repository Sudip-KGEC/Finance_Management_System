import {
  getCategoryInsights,
  getMonthlyInsights,
} from "./insights.service.js";

export const categoryInsights = async (req, res) => {
  try {
    const data = await getCategoryInsights(req.user._id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const monthlyInsights = async (req, res) => {
  try {
    const data = await getMonthlyInsights(req.user._id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};