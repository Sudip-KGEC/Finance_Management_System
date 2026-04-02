import Transaction from "../../models/transaction.model.js";



// Create
export const createTransaction = async (data, userId) => {
  return await Transaction.create({ ...data, userId });
};



// Get all
export const getTransactions = async (query, userId) => {
  const { type, category, search } = query;

  let filter = { userId };

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (search) {
    filter.description = { $regex: search, $options: "i" };
  }

  return await Transaction.find(filter).sort({ date: -1 });
};



// Delete
export const deleteTransaction = async (id, userId) => {
  return await Transaction.findOneAndDelete({ _id: id, userId });
};