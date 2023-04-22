const express=require("express");
const dotenv=require("dotenv");
const connectDb=require("./config/db");
const cors=require('cors');
const app=express();
app.use(cors());
const cookieParser=require('cookie-parser');
const router=require('./routes');
dotenv.config();
app.use(express.json());
app.use(cookieParser());

connectDb();
app.use('/api',router);
app.get("/",(req,res)=>{
    res.send("API running");
})

const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running on ${PORT}`))