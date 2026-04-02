import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//route
import authRoute from './modules/auth/auth.routes.js'

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173"
}))

app.get("/" , (req , res) => {
    res.send("API working Well...")
})


app.use("/api/auth" , authRoute);

export default app;