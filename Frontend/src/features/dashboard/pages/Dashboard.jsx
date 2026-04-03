import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { Wallet, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

import useDashboard from "../hooks/useDashboard.js";
import "../styles/dashboard.scss";

export default function Dashboard() {
  const { data, loading } = useDashboard();

  if (loading) {
    return <div className="dashboard">Loading...</div>;
  }

  // Income and Expense
  const pieData = [
    { name: "Income", value: data.totalIncome },
    { name: "Expense", value: data.totalExpense }
  ];

  //  Monthly Chart 
  const chartData = data.chart.labels.map((month, index) => ({
    month,
    income: data.chart.income[index],
    expense: data.chart.expense[index]
  }));


  return (
    <div className="dashboard">

      {/* Charts */}
      <div className="dashboard__charts">

        {/*  Income vs Expense */}
        <div className="chart">
          <h4>Income vs Expense</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                <Cell fill="#06c54c" />
                <Cell fill="#ef4444" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/*  Monthly Trend */}
        <div className="chart">
          <h4>Monthly Trend</h4>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="income"
                stroke="#06c54c"
                fill="#bbf7d0"
              />

              <Area
                type="monotone"
                dataKey="expense"
                stroke="#ef4444"
                fill="#fecaca"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Cards */}
      <div className="dashboard__cards">
        <div className="card">
          <div className="card__top">
            <Wallet size={18} />
            <span className="title">Balance</span>
          </div>
          <div className="value">₹{data.balance}</div>
        </div>

        <div className="card"><div className="card__top">
    <span className="title">Income</span>
    <ArrowDownCircle size={18} />
  </div>
  <div className="value highlight">₹{data.totalIncome}</div></div>

        <div className="card"> <div className="card__top">
    <span className="title">Expense</span>
    <ArrowUpCircle size={18} />
  </div>
  <div className="value">₹{data.totalExpense}</div></div>
      </div>

    </div>
  );
}