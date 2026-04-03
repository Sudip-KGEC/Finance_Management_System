import mongoose from "mongoose";
import Transaction from "../models/transaction.model.js";

const userId = new mongoose.Types.ObjectId("69cf36b9ab7a7249ea9c80e4");

const dummydata = [
  {
    userId,
    amount: 50000,
    type: "income",
    category: "salary",
    description: "January salary",
    date: new Date("2026-01-05")
  },
  {
    userId,
    amount: 8000,
    type: "expense",
    category: "food",
    description: "Groceries",
    date: new Date("2026-01-10")
  },
  {
    userId,
    amount: 5000,
    type: "expense",
    category: "travel",
    description: "Transport",
    date: new Date("2026-01-15")
  },

  {
    userId,
    amount: 52000,
    type: "income",
    category: "salary",
    description: "February salary",
    date: new Date("2026-02-05")
  },
  {
    userId,
    amount: 9000,
    type: "expense",
    category: "shopping",
    description: "Clothes",
    date: new Date("2026-02-12")
  },
  {
    userId,
    amount: 6000,
    type: "expense",
    category: "food",
    description: "Dining",
    date: new Date("2026-02-18")
  },

  {
    userId,
    amount: 55000,
    type: "income",
    category: "freelance",
    description: "Project payment",
    date: new Date("2026-03-07")
  },
  {
    userId,
    amount: 7000,
    type: "expense",
    category: "food",
    description: "Groceries",
    date: new Date("2026-03-10")
  },
  {
    userId,
    amount: 4000,
    type: "expense",
    category: "travel",
    description: "Cab & fuel",
    date: new Date("2026-03-20")
  },

  {
    userId,
    amount: 50000,
    type: "income",
    category: "salary",
    description: "April salary",
    date: new Date("2026-04-02")
  },
  {
    userId,
    amount: 10000,
    type: "expense",
    category: "rent",
    description: "House rent",
    date: new Date("2026-04-05")
  },
  {
    userId,
    amount: 6000,
    type: "expense",
    category: "food",
    description: "Groceries",
    date: new Date("2026-04-15")
  }
];

const uploadTransaction = async () => {
  await Transaction.deleteMany({ userId }); 
  await Transaction.insertMany(dummydata);
  console.log("Data uploaded correctly");
};

export default uploadTransaction