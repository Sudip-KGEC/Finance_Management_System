import { useEffect, useState } from "react";
import {
  getTransactions,
  deleteTransaction,
} from "../services/transaction.service";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);

  //  Fetch transactions
  const fetchTransactions = async () => {
    try {
      setLoading(true);

      const data = await getTransactions(filters);
      setTransactions(data);
    } catch (err) {
      console.log("Error fetching transactions" , err.messege);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [filters]);

  // Delete
  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    transactions,
    filters,
    loading,
    handleDelete,
    handleFilterChange,
    refetch: fetchTransactions
  };
}