import {
  createTransaction,
  getTransactions,
  deleteTransaction,
} from "./transaction.service.js";


export const addTransaction = async (req, res) => {
  try {
    const transaction = await createTransaction(req.body, req.user.id);

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



export const fetchTransactions = async (req, res) => {
  try {
    const transactions = await getTransactions(req.query, req.user.id);

    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



export const removeTransaction = async (req, res) => {
  try {
    await deleteTransaction(req.params.id, req.user.id);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};