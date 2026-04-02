import Transaction from "../../models/transaction.model.js";

export const getDashboardData = async (userId) => {
  const result = await Transaction.aggregate([
    {
      $match: { userId },
    },
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  let totalIncome = 0;
  let totalExpense = 0;

  result.forEach((item) => {
    if (item._id === "income") totalIncome = item.total;
    if (item._id === "expense") totalExpense = item.total;
  });

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
  };
};