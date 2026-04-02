import express from "express";
import {
  categoryInsights,
  monthlyInsights,
} from "./insights.controller.js";

import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/category", categoryInsights);
router.get("/monthly", monthlyInsights);

export default router;