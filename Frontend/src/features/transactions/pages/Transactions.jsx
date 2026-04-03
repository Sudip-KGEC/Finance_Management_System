import { useState } from "react";
import useTransactions from "../hooks/useTransactions.js";
import "../styles/transactions.scss";
import AddTransaction from "../components/AddTransaction.jsx";

export default function Transactions() {
  const {
    transactions,
    filters,
    loading,
    handleDelete,
    handleFilterChange,
    refetch
  } = useTransactions();


  const [showModal, setShowModal] = useState(false);

  return (
    <div className="transactions">
      <h2>Transactions</h2>

      {/*  Filters */}
      <div className="transactions__filters">
        <input
          type="text"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) =>
            handleFilterChange("search", e.target.value)
          }
        />

        <select
          value={filters.type}
          onChange={(e) =>
            handleFilterChange("type", e.target.value)
          }
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) =>
            handleFilterChange("category", e.target.value)
          }
        >
          <option value="">All Categories</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
        </select>

        <button onClick={() => setShowModal(true)}>
          Add Transaction
        </button>
      </div>

      {/* Table */}
      <div className="transactions__table">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => (
                <tr key={t._id}>
                  <td>₹{t.amount}</td>
                  <td>{t.type}</td>
                  <td>{t.category}</td>
                  <td>{t.description}</td>
                  <td>
                    {new Date(t.date).toLocaleDateString()}
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDelete(t._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {transactions.length === 0 && (
                <tr>
                  <td colSpan="6">No transactions found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <AddTransaction
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            refetch();           
            setShowModal(false); 
          }}
        />
      )}
    </div>
  );
}