import Transaction from "../../models/transaction.model.js";


export const getCategoryInsights = async (userId) => {
  return await Transaction.aggregate([
    {
      $match: {
        userId,
        type: "expense",
      },
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
    {
      $sort: { total: -1 },
    },
  ]);
};


// Monthly income vs expense
export const getMonthlyInsights = async (userId) => {
  return await Transaction.aggregate([
    {
      $match: { userId },
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
  ]);
};