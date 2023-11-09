import express from 'express'
import connectDB from '../Database/connectDB.js';
import userRouter from './routes/user.route.js';
const app = express ();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/test' 

connectDB(DATABASE_URL);

app.listen(port, () => console.log (`server listening on port ${port}`));



app.use("/api/user",userRouter)