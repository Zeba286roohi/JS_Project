import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';
import { receipesRouter } from './routes/receipes.js';
const app=express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter)
app.use("/receipes",receipesRouter)
mongoose.connect("mongodb+srv://zebaroohi:zeba123@receipes.zydueak.mongodb.net/",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
)
app.listen(3001,()=>console.log("Server is running"))