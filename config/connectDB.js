const mongoose = require('mongoose');
require("dotenv").config({path:'./.env'})

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.mongoURI);
        console.log("database connected")
    } catch (error) {
        console.log(`database failed to connected ${error}`)
    }
}

module.exports = connectDB;