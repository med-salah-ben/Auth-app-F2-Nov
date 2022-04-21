const express = require('express');
// const cors =require("cors")
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./config/connectDB');


const Auth = require("./routes/Auth")

connectDB()
const app = express();
// app.use(cors())
app.use(express.json());
app.use("/api/auth",Auth)

const PORT = process.env.PORT || 5000;



app.listen(PORT,(err)=>{
    err ? console.log(err)
    : console.log(`server is running on ${PORT}`)
})