import { useEffect, useState } from 'react';
import { getDashboardData } from '../services/dashboard.service.js';

export default function useDashboard() {

    const [data, setData] = useState({
        balance: 0,
        totalIncome: 0,
        totalExpense: 0,
        chart: {
            labels: [],
            income: [],
            expense: []
        }
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const response = await getDashboardData();
            setData(response)

        } catch (err) {
            setError(err.message || "Dashboard fetch failed");

        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchDashboardData()

    }, []);

    return {
        loading,
        error,
        data
    }
}


