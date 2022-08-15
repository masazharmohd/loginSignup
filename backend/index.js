import User from "../backend/model/userSchema.js"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// const express = require("express")


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

let DB =
  'mongodb+srv://mas:mas@cluster0.ssx7t04.mongodb.net/login_signup?retryWrites=true&w=majority';

mongoose
  .connect(
    DB
    // useNewUrlParser: true,
    // useCreatIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  )
  .then(() => {
    console.log("connected !!!");
  })
  .catch((err) => {
    console.log("Not connected !", err);
  });

//   const userSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     mobile: {
//       type: Number,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     re_password: {
//       type: String,
//       required: true,
//     },
//   });
  
//   const User = mongoose.model('USER', userSchema);

//Route
app.get("/", (req, res) => {
    const { email, password } = req.body
    User.find((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json({
                message: "successfully login !!!",
                results: results
            })
        }
    })
});

app.post("/login", (req, res)=>{
    const { email, password } = req.body
    User.findOne({email: email }, (err, results) => {
        if(results){
            if(results.password === password){
                res.json({
                    message: "successfully login !!!",
                    results: results
                }) 
            }else{
                res.send("Password not valid !")
            }
             
        } else{
            res.json({
                message: "User not found"
            })   
        }
    })
})

app.post("/register", (req, res)=>{
    const {name, email, mobile, password, re_password } = req.body
    const user = new User({
        name: name,
        email : email,
        mobile: mobile,
        password: password,
        re_password: re_password,
    })
    User.findOne({email: email}, (err, results) => {
        if(results){
            res.send("User already registered !")
        }else{
            user.save((err, results) => {
                if(err) {
                    res.send(err)
                } else{
                    res.json({
                        message: "Successfully registered !",
                        results: results
                    })
                }
            })
        }
    })
})

app.listen(9002, () => {
  console.log("Be startes at port 9002 !!! ");
});
