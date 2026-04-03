import './src/config/env.js'
import app from "./src/app.js";
import connectDB from './src/config/db.js';
// import uploadTransaction from './src/seed/dammy.js';


const PORT = process.env.PORT || 3000;
connectDB()
// uploadTransaction()

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
});