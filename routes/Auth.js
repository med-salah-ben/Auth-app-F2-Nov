const router = require("express").Router();
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken")
const User = require("../model/User");
const {loginRules,registerRules,validator} =require('../validator/validator')
require('dotenv').config({path:"../config/.env"});
const isAuth = require("../validator/isAuth");

//register

router.get("/",(req,res)=>{
    res.send({msg:"hello world!!!"})
})

// router.post("/hi",async(req,res)=>{
//     const {name} = req.body
//     .then(res.send(name))
//     .catch((err)=>console.log(err))
// })

router.post("/register",registerRules(),validator,async(req,res)=>{
    const {name,lastName,email,password}=req.body;
    try {
        //simple validation
        // if(!name|| !lastName|| !email || !password){
        //   return res.status(400).json({msg:"please enter all fields"})
        // }
        //check for existing user 
        let user =await User.findOne({email})
        if(user){
             res.status(400).json({msg:'user already exists'})
        }
        //create new user
        user = new User({name,lastName,email,password})
        // hash password 
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password,salt)
        user.password =hashedPassword;
        //save user
        await user.save();

        //user sign
        const payload = { 
            id:user._id
        }

        const token = await jwt.sign(payload,process.env.secretOrKey,{expiresIn:"1h"})
        
        res.status(200).json({msg:"User Registered With Success",user,token})

    } catch (error) {
        res.status(500).send({msg:"register server errors"})
        }
})


//login user 
router.post('/login', loginRules(),validator,    async(req,res)=>{
    const {email,password} = req.body;
    try {

        if(!email || !password){
            return res.status(400).send({msg:"please enter all fields"})
        }
        let user = await User.findOne({email})
        if(!user){
            return  res.status(400).send({msg:"User does not exist "})
             
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
           return  res.status(400).send({msg:"Bad Credentials password"})
        }

        const payload = {
            id:user._id
        }

        const token = jwt.sign(payload,process.env.secretOrKey,{expiresIn:"1h"})
        return res.status(200).send({msg:"logged with success",user,token})
    } catch (error) {
            return res.status(500).send({msg:"login server error"})
    }
})

router.get("/user",isAuth,(req,res)=>{
    res.status(200).json({user:req.user})
})

module.exports =router