import { useEffect, useState } from "react";
import {
    getCategoryInsights,
    getMonthlyInsights,
} from "../services/insights.service";

export default function useInsights() {
    const [categoryData, setCategoryData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchInsights = async () => {
        try {
            setLoading(true);


            const [categoryRes, monthlyRes] = await Promise.all([
                getCategoryInsights(),
                getMonthlyInsights(),
            ]);

            // Transform Category Data
            const formattedCategory = categoryRes.map((item) => ({
                name: item._id,
                value: item.total,
            }));

            //  Transform Monthly Data
            const monthlyMap = {};

            monthlyRes.forEach((item) => {
                const month = item._id.month;
                const type = item._id.type;

                if (!monthlyMap[month]) {
                    monthlyMap[month] = {
                        month,
                        income: 0,
                        expense: 0,
                    };
                }

                monthlyMap[month][type] = item.total;
            });

            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];

            const formattedMonthly = Object.values(monthlyMap)
                .sort((a, b) => a.month - b.month)
                .map((item) => ({
                    ...item,
                    monthName: monthNames[item.month - 1],
                }));

            setCategoryData(formattedCategory);
            setMonthlyData(formattedMonthly);
        } catch (error) {
            console.log("Insights fetch error", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInsights();
    }, []);

    return {
        categoryData,
        monthlyData,
        loading,
    };
}