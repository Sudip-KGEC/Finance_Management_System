import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//route
import authRoute from './modules/auth/auth.routes.js';
import transactionRoute from './modules/transaction/transaction.routes.js';
import dashboardRoute from './modules/dashboard/dashboard.routes.js';
import insightsRoute from './modules/insights/insights.routes.js'

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173",
    credentials: true
}))

app.get("/" , (req , res) => {
    res.send("API working Well...")
})


app.use("/api/auth" , authRoute);
app.use("/api/transactions" , transactionRoute);
app.use("/api/dashboard" , dashboardRoute);
app.use("/api/insights" , insightsRoute)

export default app;