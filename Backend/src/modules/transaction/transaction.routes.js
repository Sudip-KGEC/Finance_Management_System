import express from "express";
import {
  addTransaction,
  fetchTransactions,
  removeTransaction,
} from "./transaction.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect); 

router.post("/", addTransaction);
router.get("/", fetchTransactions);
router.delete("/:id", removeTransaction);

export default router;