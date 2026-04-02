import { useState } from "react";
import { createTransaction } from "../services/transaction.service";

import "../styles/addTransaction.scss";

export default function AddTransaction({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createTransaction({
        ...form,
        amount: Number(form.amount),
      });

      onSuccess(); 
      onClose();   
    } catch (error) {
      console.log("Error adding transaction" , error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Add Transaction</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />

          <div className="actions">
            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}