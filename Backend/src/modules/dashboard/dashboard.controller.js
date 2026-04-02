import { getDashboardData } from "./dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const data = await getDashboardData(req.user._id);

    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};