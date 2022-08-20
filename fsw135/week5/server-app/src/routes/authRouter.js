const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author.js')


authRouter.post("/signup", (req,res,next) => {
    User,findOne({ username: req.body.username.toLowerCase() }, (err, user)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser)=>{
            if(err){
                res.status(500)
                return(err)
            }
            const token = jwt.sign(savedUser.withoutPassword(),process.env.SECRET)
            return res.status(201).send({ token, user: savedUser.withoutPassword()})
        })
    })
})




//Login
authRouter.post("/login", (req,res,next) => {
    const failedLogin = "Username or Password is incorrect"
    User.findOne({username: req.body.username.toLowerCase() }, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error(failedLogin))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(403)
                return next(new Error(failedLogin))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error(failedLogin))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: user.withoutPassword() })
        })
    })
})

module.exports = authRouter