import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

import useInsights from "../hooks/useInsights.js";

import "../styles/insights.scss";

export default function Insights() {
  const { categoryData, monthlyData, loading } = useInsights();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="insights">
      <h2>Insights</h2>

      <div className="insights__charts">
        {/* Bar Chart */}
        <div className="chart">
          <h4>Category-wise Spending</h4>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ff8019" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="chart">
          <h4>Monthly Income vs Expense</h4>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monthName" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="income"
                stroke="#22c55e"
              />

              <Line
                type="monotone"
                dataKey="expense"
                stroke="#ef4444"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}