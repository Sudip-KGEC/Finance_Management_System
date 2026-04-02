import mongoose from "mongoose";
import Transaction from "../../models/transaction.model.js";

export const getDashboardData = async (userId) => {
  const objectUserId = new mongoose.Types.ObjectId(userId);

  // Add category aggregation here
  const [summary, monthly] = await Promise.all([

    // SUMMARY
    Transaction.aggregate([
      {
        $match: { userId: objectUserId },
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]),

    //  MONTHLY
    Transaction.aggregate([
      {
        $match: { userId: objectUserId },
      },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            type: "$type",
          },
          total: { $sum: "$amount" },
        },
      },
      {
        $sort: { "_id.month": 1 },
      },
    ]),

  ]);

  // SUMMARY PROCESS
  let totalIncome = 0;
  let totalExpense = 0;

  summary.forEach((item) => {
    if (item._id === "income") totalIncome = item.total;
    if (item._id === "expense") totalExpense = item.total;
  });

  // MONTHLY PROCESS
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const chart = {
    labels: months,
    income: new Array(12).fill(0),
    expense: new Array(12).fill(0),
  };

  monthly.forEach((item) => {
    const index = item._id.month - 1;

    if (item._id.type === "income") {
      chart.income[index] = item.total;
    } else {
      chart.expense[index] = item.total;
    }
  });



  // FINAL RESPONSE
  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    chart,

  };
};