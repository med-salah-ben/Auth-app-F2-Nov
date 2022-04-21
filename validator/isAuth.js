const jwt = require("jsonwebtoken");

//import model
const User =require("../model/User");

require("dotenv").config({path:"../config/.env"});

const isAuth = async (req,res,next)=>{
    try {
        const token = req.headers["x-auth-token"]
        //check for token
        if(!token){
            return res.status(400).json({msg:'no token unauthorized'})
        }
        const decoded = await jwt.verify(token,process.env.secretOrKey)
        //get user by id 
        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(400).json({msg:"unauthorized"})
        }
        //get user 
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json("server err")
    }
}

module.exports=isAuth