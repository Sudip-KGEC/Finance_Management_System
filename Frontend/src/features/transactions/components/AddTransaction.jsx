import { useState } from "react";
import { createTransaction } from "../services/transaction.service";
import { IndianRupee, Tag, FileText, ArrowDownCircle } from "lucide-react";

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

    if (!form.amount || !form.category) return;

    try {
      setLoading(true);

      await createTransaction({
        ...form,
        amount: Number(form.amount),
      });

      onSuccess();
    
    } catch (error) {
      console.log("Error adding transaction", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Add Transaction</h3>

        <form onSubmit={handleSubmit}>
          {/* Amount */}
          <div className="form-group">
            <label>Amount</label>
            <div className="input-wrap">
              <IndianRupee size={16} />
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                value={form.amount}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Type */}
          <div className="form-group">
            <label>Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>
            <div className="input-wrap">
              <Tag size={16} />
              <input
                type="text"
                name="category"
                placeholder="e.g Food, Salary"
                value={form.category}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <div className="input-wrap">
              <FileText size={16} />
              <input
                type="text"
                name="description"
                placeholder="Optional note"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="actions">
            <button
              type="button"
              className="cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}